import Image from "next/image";
import Link from "next/link";
import TwoColumnTextTemplate from "../ui/twoColumnTextTemplate/TwoColumnTextTemplate";
import ImageComponent from "../ui/imageComponent/ImageComponent";
import classes from "./Begivenheder.module.css";

export default function Begivenheder() {
  return (
    <div className={classes.begivenhederContainer}>
      <ImageComponent />
      <div className="contentContainerMargin">
        <TwoColumnTextTemplate />
        <button className="btn-link">
          <Link href="/"> Læs mere om one mile</Link>
        </button>
      </div>
    </div>
  );
}
