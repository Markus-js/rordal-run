import Image from "next/image";
import classes from './Introduction.module.css'

export default function Introduction() {
  return (
    <div className={classes.introductionContainer}>
      <img src="/images/bigTitle.svg" alt="rørdal run 2021" />
      <p>
        Rørdal Run 2021 er udsat på grund af COVID-19. Vi glæder os til at løbe
        sammen den 12. september 2021, hvorTechCollege fortsætter succesen med
        det fantastiske løb i Aalborgs østlige havneområde. Igen i år kan der
        vælges imellem tre distancer: One mile, Stafetten og Den lange.
      </p>
    </div>
  );
}
