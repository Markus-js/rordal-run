import Link from "next/link";
import classes from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={classes.menu}>
      <ul className="nav">
        <li>
          <Link href="/">FORSIDE</Link>
        </li>
        <li>
          <Link href="/distancer">DISTANCER</Link>
        </li>
      </ul>
    </div>
  );
}
