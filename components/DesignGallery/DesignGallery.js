"use client";

import { useEffect, useRef, useState } from "react";
import ImageModal from "@/components/ImageModal/ImageModal";

const designItems = Array.from({ length: 25 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const ext = i + 1 >= 21 ? "jpg" : "webp";
  return {
    src: `/assets/projects/graphic-design/graphic-${num}.${ext}`,
    title: `Graphic Design Work ${num}`,
    num,
  };
});

export default function DesignGallery() {
  const galleryRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const items = Array.from(gallery.querySelectorAll(".design-item"));
    if (!items.length) return;

    function targetRowHeight() {
      if (window.innerWidth <= 480) return 160;
      if (window.innerWidth <= 760) return 190;
      if (window.innerWidth <= 1100) return 230;
      return 270;
    }

    function layout() {
      const gap = window.innerWidth <= 760 ? 8 : 10;
      const containerWidth = gallery.clientWidth;
      const tHeight = targetRowHeight();
      if (!containerWidth) return;

      const ars = items.map((item) => {
        const img = item.querySelector("img");
        return img && img.naturalWidth && img.naturalHeight
          ? img.naturalWidth / img.naturalHeight
          : 1.5;
      });

      let row = [];
      let rowArSum = 0;

      function flushRow(isLast) {
        if (!row.length) return;
        const totalGap = gap * (row.length - 1);
        let rowHeight = (containerWidth - totalGap) / rowArSum;
        if (isLast && rowHeight > tHeight * 1.6) {
          rowHeight = tHeight;
        }
        row.forEach((idx) => {
          const w = ars[idx] * rowHeight;
          items[idx].style.width = `${w}px`;
          items[idx].style.height = `${rowHeight}px`;
        });
        row = [];
        rowArSum = 0;
      }

      for (let i = 0; i < items.length; i++) {
        const widthAtTarget = ars[i] * tHeight;
        const gapSoFar = gap * row.length;
        if (
          row.length &&
          rowArSum * tHeight + widthAtTarget + gapSoFar > containerWidth
        ) {
          flushRow(false);
        }
        row.push(i);
        rowArSum += ars[i];
      }
      flushRow(true);
    }

    function schedule() {
      requestAnimationFrame(layout);
    }

    schedule();

    let pending = 0;
    items.forEach((item) => {
      const img = item.querySelector("img");
      if (img && !(img.complete && img.naturalWidth)) {
        pending++;
        const done = () => {
          pending--;
          if (pending <= 0) schedule();
        };
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    });

    window.addEventListener("load", schedule);
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(schedule, 120);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", schedule);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div ref={galleryRef} className="design-gallery">
        {designItems.map((item) => (
          <button
            key={item.num}
            className="design-item"
            type="button"
            onClick={() => setLightbox({ src: item.src, title: item.title })}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <span>{item.num}</span>
          </button>
        ))}
      </div>

      {lightbox && (
        <ImageModal
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
