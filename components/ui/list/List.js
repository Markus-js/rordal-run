import classes from "./List.module.css";
import Image from "next/image";

export default function List() {
  // Data from pages/deltagere
  return (
    <div className={classes.list}>
      <ul>
        <li className={classes.sortList}>
          <span></span>
          <span>
            ID
            <img src="/graphics/Icon awesome-sort.svg" alt="sort" />
          </span>
          <span>
            NAVN
            <img src="/graphics/Icon awesome-sort.svg" alt="sort" />
          </span>
          <span>
            POST & BY
            <img src="/graphics/Icon awesome-sort.svg" alt="sort" />
          </span>
          <span>
            DISTANCE
            <img src="/graphics/Icon awesome-sort.svg" alt="sort" />
          </span>
        </li>
        <li>
          <button>
            <img src="/graphics/Icon awesome-trash-alt.svg" alt="delete" />
          </button>
          <span className={classes.id}>203</span>
          <span className={classes.name}>Jonna Jørgensen</span>
          <span className={classes.city}>9210 Aalborg SO</span>
          <span className={classes.distance}>One Mile</span>
        </li>
        {/* Delete after map() */}
        <li>
          <button>
            <img src="/graphics/Icon awesome-trash-alt.svg" alt="delete" />
          </button>
          <span className={classes.id}>203</span>
          <span className={classes.name}>Jonna Jørgensen</span>
          <span className={classes.city}>9210 Aalborg SO</span>
          <span className={classes.distance}>One Mile</span>
        </li>
      </ul>
    </div>
  );
}
