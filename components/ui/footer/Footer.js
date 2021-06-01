import Link from "next/link";
import Image from "next/image";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer} >
      <div>
        <ul>
          <li>
            <Link href="/">om rørdal run</Link>
          </li>
          <li>
            <Link href="/">ruter</Link>
          </li>
          <li>
            <Link href="/">tilmelding</Link>
          </li>
          <li>
            <Link href="/">distancer</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="tel:+45-35-67-90-87">+42 35 67 90 87</a>
          </li>
          <li>
            <a href="mailto:roerdalrun@mail.com">roerdalrun@mail.com</a>
          </li>
        </ul>
      </div>
      <div className={classes.flexWrapper}>
        <div>
          <img src="/grafic/Icon awesome-instagram.svg" alt="" />
        </div>
        <div>
          <img src="/grafic/Icon ionic-logo-facebook.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
