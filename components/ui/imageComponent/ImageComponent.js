import classes from './imageComponent.module.css'

export default function ImageComponent() {
  return (
    <div className={classes.imageContainer}>
      <img src="/images/COLOURBOX16089420.jpg" alt="" />
      <div className={classes.titleBox}>
        <h2 className={classes.title}>one mile</h2>
        <p className={classes.desc}>et løb for hele familien</p>
      </div>
    </div>
  );
}
