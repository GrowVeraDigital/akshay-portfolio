"use client";

import { assetPath } from "@/lib/assetPath";


import { useState } from "react";
import Reveal from "@/common/Reveal/Reveal";
import VideoModal from "@/common/VideoModal/VideoModal";
import DesignGallery from "@/components/HomePage/DesignGallery/DesignGallery";
import "./Projects.scss";

function getYouTubeId(url) {
  const match = url.match(/(?:shorts\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return match ? match[1] : null;
}

const projectSections = [
  {
    title: "AI Video Generation",
    number: "01",
    subtitle: "Click thumbnail to watch",
    className: "ai-video-feature",
    category: "video",
    galleryClassName: "ai-video-gallery",
    videos: [
      { href: "https://youtube.com/shorts/1Kue8s-YoHU", thumb: assetPath("/assets/projects/AiVideoThumbnail/1.webp"), alt: "AI Video 01", num: "01" },
      { href: "https://youtube.com/shorts/2HO9ZpUgjns", thumb: assetPath("/assets/projects/AiVideoThumbnail/2.webp"), alt: "AI Video 02", num: "02" },
      { href: "https://youtube.com/shorts/gdA-MbTdpas", thumb: assetPath("/assets/projects/AiVideoThumbnail/3.webp"), alt: "AI Video 03", num: "03" },
      { href: "https://youtube.com/shorts/GF4iU3a1BG0", thumb: assetPath("/assets/projects/AiVideoThumbnail/4.webp"), alt: "AI Video 04", num: "04" },
    ],
  },
  {
    title: "Promotional Ads",
    number: "02",
    subtitle: "Click thumbnail to watch",
    className: "promotional-ads-feature",
    category: "video",
    galleryClassName: "ai-video-gallery",
    videos: [
      { href: "https://youtube.com/shorts/1B9buL4ajiY", thumb: assetPath("/assets/projects/AdsThumbnail/1.webp"), alt: "AI Video 01", num: "01" },
      { href: "https://youtube.com/shorts/-h9NOe-WsWQ", thumb: assetPath("/assets/projects/AdsThumbnail/2.webp"), alt: "AI Video 02", num: "02" },
      { href: "https://youtube.com/shorts/6jSjJhCdx-c", thumb: assetPath("/assets/projects/AdsThumbnail/3.webp"), alt: "AI Video 03", num: "03" },
      { href: "https://youtube.com/shorts/O3FZfwDCJao", thumb: assetPath("/assets/projects/AdsThumbnail/4.webp"), alt: "AI Video 04", num: "04" },
    ],
  },
  {
    title: "Motion Graphics",
    number: "03",
    subtitle: "Click thumbnail to watch",
    className: "motion-graphics-feature",
    category: "motion",
    galleryClassName: "motion-graphics-gallery",
    videos: [
      { href: "https://youtube.com/shorts/RAtOgdckiNo", thumb: assetPath("/assets/projects/MotionGraphicsThumbnail/1.webp"), alt: "Motion Graphics 01", num: "01" },
      { href: "https://youtube.com/shorts/3L0UKqgEE3Q", thumb: assetPath("/assets/projects/MotionGraphicsThumbnail/2.webp"), alt: "Motion Graphics 02", num: "02" },
    ],
  },
  {
    title: "Social Media Creatives",
    number: "04",
    subtitle: "Photoshop \u00b7 Illustrator",
    className: "reels-video-feature",
    category: "video",
    galleryClassName: "ai-video-gallery",
    videos: [
      { href: "https://youtube.com/shorts/PxhHR3XEOtc", thumb: assetPath("/assets/projects/ReelsThumbnail/5.png"), alt: "AI Video 01", num: "01" },
      { href: "https://youtube.com/shorts/6pHrA_0R-Lw", thumb: assetPath("/assets/projects/ReelsThumbnail/2.webp"), alt: "AI Video 02", num: "02" },
      { href: "https://youtube.com/shorts/r3pQCyCj6-k", thumb: assetPath("/assets/projects/ReelsThumbnail/3.webp"), alt: "AI Video 03", num: "03" },
      { href: "https://youtube.com/shorts/A6JtqycWYIk", thumb: assetPath("/assets/projects/ReelsThumbnail/4.webp"), alt: "AI Video 04", num: "04" },
    ],
  },
];

export default function Projects() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleVideoClick = (href) => {
    const videoId = getYouTubeId(href);
    if (videoId) setActiveVideoId(videoId);
  };

  return (
    <section id="projects" className="section projects">
      <div className="section-label">03 / SELECTED WORK</div>
      <div className="projects-head">
        <Reveal className="section-heading">
          <p className="eyebrow">MY WORK</p>
          <h2>
            Ideas into<span>visuals.</span>
          </h2>
        </Reveal>
      </div>

      <div className="project-grid">
        {projectSections.map((project) => (
          <Reveal
            key={project.number}
            tag="article"
            className={`project-card large ${project.className}`}
            data-category={project.category}
          >
            <div className={project.galleryClassName}>
              {project.videos.map((video) => (
                <a
                  key={video.num}
                  className="ai-video-card"
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleVideoClick(video.href);
                  }}
                >
                  <div className="video-thumb">
                    <img src={video.thumb} alt={video.alt} loading="lazy" />
                    <span className="thumb-play">▶</span>
                    <span className="thumb-number">{video.num}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="project-meta">
              <div className="project-meta-left">
                <span className="project-meta-num">{project.number}</span>
                <h3 className="project-meta-title">{project.title}</h3>
              </div>
              <p className="project-meta-sub">{project.subtitle}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="real-work">
        <div className="real-work-head">
          <div>
            <p className="eyebrow">GRAPHIC DESIGN WORK</p>
            <h3>
              Selected <span>creatives.</span>
            </h3>
          </div>
        </div>
        <DesignGallery />
      </Reveal>

      {activeVideoId && (
        <VideoModal
          videoId={activeVideoId}
          onClose={() => setActiveVideoId(null)}
        />
      )}
    </section>
  );
}
