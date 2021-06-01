import classes from "./Hero.module.css";
import Image from "next/image";
/* 
Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).
 */

export default function Hero() {
  return (
    <header className={classes.devider}>
      {/* src need to be dynamic to take different sources  */}
      <img src="/images/COLOURBOX12231828.jpg" className={classes.image} />
    </header>
  );
}
