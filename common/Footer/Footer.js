import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div>
        <Image src={Logo} alt="Growvera Digital" height={30} />
      </div>
      <p>Graphic Designer &amp; Video Editor</p>
      <p>© {new Date().getFullYear()} Akshay Chheta</p>
    </footer>
  );
}
