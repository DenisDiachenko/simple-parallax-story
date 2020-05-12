import React, { useState } from "react";

import { inject, observer } from "mobx-react";

import { AnimatedMenu } from "./animations";

import { FadeTitle, ParallaxBackground } from "../../common";

import { Store } from "../../store";

import {
  calc,
  trans1,
  trans2,
  trans3,
  trans4,
  trans5,
} from "./animations/helpers";

import style from "./style.module.scss";

interface IProps {
  store?: Store;
}

const bgOptions = [
  {
    url: "https://image.flaticon.com/icons/svg/789/789395.svg",
    interpolateFn: trans1,
  },
  {
    url: "https://image.flaticon.com/icons/svg/414/414927.svg",
    interpolateFn: trans2,
  },
  {
    url: "https://image.flaticon.com/icons/svg/414/414927.svg",
    interpolateFn: trans3,
  },
  {
    url: "https://image.flaticon.com/icons/svg/414/414927.svg",
    interpolateFn: trans4,
  },
  {
    url: "https://image.flaticon.com/icons/svg/414/414927.svg",
    interpolateFn: trans5,
  },
];

const MainMenu = observer(({ store }: IProps) => {
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

export default inject("store")(MainMenu);
