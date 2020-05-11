import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { inject, observer } from "mobx-react";

import { useParams } from "react-router-dom";

import { FadeTitle, ParallaxBackground } from "../../animations";
import { calc, interpolateFns } from "./animations/helpers";

import { IActions, IAsset } from "../../types";

import { IBgInterpolateFns } from "./types";

import { Store } from "../../store";

import style from "./style.module.scss";

interface IProps {
  store?: Store;
}

const Story = observer(({ store }: IProps) => {
  const [coords, setCoords] = useState({ xy: [0, 0] });

  const [content, setContent] = useState({
    title: "",
    background: { img: "", color: "" },
    actions: [] as IActions[],
    assets: [] as IAsset[],
    bgInterpolateFns: [] as IBgInterpolateFns[],
  });

  const { story, stage } = useParams();

  const { stories } = store!;

  useEffect(() => {
    const selectedStory = stories.find((item) => item.title === story);
    const selectedStage = selectedStory?.stages.find(
      (item) => item.stage === stage
    );
    if (selectedStage) {
      const { title, actions, background, assets } = selectedStage!;

      const bgInterpolateFns = assets.map(({ url, index }) => ({
        url,
        interpolateFn: interpolateFns[index],
      }));
      setContent({ title, actions, background, assets, bgInterpolateFns });
    }
  }, [stories, story, stage]);

  return (
    <div
      style={{
        backgroundImage: `url(${content.background.img})`,
        backgroundColor: content.background.color,
      }}
      className={style.container}
      onMouseMove={({ clientX: x, clientY: y }) =>
        setCoords({ xy: calc(x, y) })
      }
    >
      <div className={style.content}>
        <FadeTitle title={content.title} className={style.text} />
        <div className={style.actions}>
          {content.actions.map((item: IActions) => (
            <Link
              key={item.label}
              to={item.nextStage ? `/story/${story}/${item.nextStage}` : "/"}
            >
              <FadeTitle title={item.label} className={style.action} />
            </Link>
          ))}
        </div>
      </div>
      <div className={style.hover}></div>
      <ParallaxBackground
        bgOptions={content.bgInterpolateFns}
        style={style}
        coords={coords}
      />
    </div>
  );
});

export default inject("store")(Story);
