import React, { useState } from "react";

import { inject, observer } from "mobx-react";

import { FadeTitle, AnimatedMenu, ParallaxBackground } from "./animations";

import { Store } from "../../store";

import {
  calc,
  trans1,
  trans2,
  trans3,
  trans4,
  trans5,
} from './animations/helpers';

import style from "./style.module.scss";

interface IProps {
  store?: Store;
}

const bgOptions = [
  { img: "card1", interpolateFn: trans1 },
  { img: "card2", interpolateFn: trans2 },
  { img: "card2", interpolateFn: trans3 },
  { img: "card2", interpolateFn: trans4 },
  { img: "card2", interpolateFn: trans5 },
];

const Menu = observer(({ store }: IProps) => {
  const { storieTitles } = store!;

  const [coords, setCoords] = useState({ xy: [0, 0] });

  return (
    <div
      className={style.container}
      onMouseMove={({ clientX: x, clientY: y }) =>
        setCoords({ xy: calc(x, y) })
      }
    >
      <div className={style.menu}>
        <FadeTitle title="Select your journey" className={style.title} />
        <div className={style.stories}>
          <AnimatedMenu options={storieTitles} className={style.story} />
        </div>
      </div>
      <ParallaxBackground bgOptions={bgOptions} style={style} coords={coords} />
    </div>
  );
});

export default inject("store")(Menu);
