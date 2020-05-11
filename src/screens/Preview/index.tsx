import React, { useEffect, useState } from "react";

import { Store } from "../../store";

import { useParams, useHistory } from "react-router-dom";

import { useSpring, animated } from "react-spring";

import { inject, observer } from "mobx-react";

import style from './style.module.scss';

interface IProps {
  store?: Store;
}

const Preview = observer(({ store }: IProps) => {
  const [preview, setPreview] = useState({ title: "", background: "" });

	const { story } = useParams();

	const history = useHistory();

  const { stories } = store!;

  const props = useSpring({
		config: {
			duration: 2000,
		},
		from: { opacity: 0 },
		to: { opacity: 1 },
		onRest: () => setTimeout(() => history.push(`/story/${story}/initial-stage`), 1000)
  });


  useEffect(() => {
    const selectedStory = stories.find((item) => item.title === story);
    if (selectedStory) {
      const {
        preview: { title, background },
      } = selectedStory!;
      setPreview({ title, background });
    }
  }, [story, stories]);

  return (
    <div
      style={{
				background: preview.background
      }}
      className={style.container}
    >
        <animated.div style={props}>
          {preview.title}
        </animated.div>
    </div>
  );
});

export default inject("store")(Preview);
