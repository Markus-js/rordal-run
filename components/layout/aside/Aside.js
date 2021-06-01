import classes from "./Aside.module.css";
import Image from "next/image";
import Menu from '../menu/Menu'

export default function Aside() {
  return (
      <aside className={classes.aside}>
      <Menu />
        <img src="/logo/aside.svg" alt="logo" />
      </aside>
  );
}
