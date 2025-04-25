import React from "react";
import style from "./random.module.scss";

const Random = () => {
  return (
    <div className={style.randomContainer}>
      <div className={style.section}>
        <h1>Flibbertigibbet Wonderland</h1>
        <p>Zoop-zoop whimsy clouds dance through neon dreams, while sparkly unicorns juggle rainbow marshmallows.</p>
      </div>

      <div className={style.section}>
        <h2>Bumbershoot Symphony</h2>
        <p>Squiggly wiggly pudding pops performing ballet on floating teacups, beneath cotton candy skyscrapers.</p>
        <div className={style.boxGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={style.box}></div>
          ))}
        </div>
      </div>

      <div className={style.section}>
        <h2>Whimsical Wobbles</h2>
        <p>Bouncing bonkers butterscotch bubbles brewing brilliant bedazzled bamboo bridges.</p>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>Zigzag Zoom Zone {i}</li>
          ))}
        </ul>
      </div>

      <div className={style.section}>
        <h2>Topsy Turvy Tales</h2>
        <p>Loopy loops of lollipop lightning leaping through lavender labyrinths of luminous laughter.</p>
      </div>

      <div className={style.section}>
        <h2>Quirky Quandaries</h2>
        <p>Wobbling waffles whisper wispy wonderments while watching wacky walruses waltz.</p>
        <div className={style.boxGrid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={style.box}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Random;