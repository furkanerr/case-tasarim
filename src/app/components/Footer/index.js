import Link from "next/link";
import footerData from "../../../../datas/footer.json";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import GooglePlay from "../../../../datas/google-play-badge-logo-svgrepo-com.svg";
import AppStore from "../../../../datas/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import styles from './style.module.css'; // Özel CSS dosyasını import et

const socialIcons = {
  Youtube: <FaYoutube size={24} />,
  Facebook: <FaFacebook size={24} />,
  Twitter: <FaTwitter size={24} />,
  Instagram: <FaInstagram size={24} />,
  LinkedIn: <FaLinkedin size={24} />,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {footerData.footer.map((section) => (
            <div key={section.title} className={styles.column}>
              <h5 className={styles.title}>{section.title}</h5>
              <ul className={styles.list}>
                {section.links.map((link, index) => (
                  <li key={link.title} className={index < section.links.length - 1 ? styles.listItem : ''}>
                    <Link href={link.url} className={styles.link}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.column}>
            <h5 className={styles.title}>Get the App</h5>
            <div className={styles.appLinks}>
              <Image src={AppStore} alt={"App Store"} width={80} height={80} />
              <Image src={GooglePlay} alt="Play Store" width={80} height={80} />
            </div>
            <h5 className={styles.title}>Follow Us</h5>
            <div className={styles.socialLinks}>
              {footerData.socialMedia.links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  {socialIcons[link.title]}
                </a>
              ))}
            </div>
          </div>
          
        </div>
        <hr className={styles.divider} />
        <div className={styles.bottomRow}>
          <div className={styles.footerText}>Collers © 2023. All rights reserved.</div>
          <div className={styles.bottomLinks}>
            <Link href="/terms" className={styles.bottomLink}>Terms</Link>
            <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
            <Link href="/contact" className={styles.bottomLink}>Contacts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
