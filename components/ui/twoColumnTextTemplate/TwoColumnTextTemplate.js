import classes from "./TwoColumnTextTemplate..module.css";

export default function TwoColumnTextTemplate() {
  return (
    <div>
      <div className={classes.flexContainer}>
        <div>
          <p>
            Rørdal Run 2021 er udsat på grund af COVID-19. Vi glæder os til at
            løbe sammen den 12. september 2021, hvorTechCollege fortsætter
            succesen med det fantastiske løb
          </p>
        </div>
        <div>
          <p>
            Vi glæder os til at løbe sammen den 12. september 2021,
            hvorTechCollege fortsætter succesen med det fantastiske løb
          </p>
        </div>
      </div>
    </div>
  );
}
