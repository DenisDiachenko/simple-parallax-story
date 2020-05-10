import React from "react";
import { animated, useTransition } from "react-spring";

interface IProps {
  title: string;
  className: string;
  type?: any;
}

export const FadeTitle = ({ className, title }: IProps) => {
  const transitions = useTransition(null, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  return (
    <>
      {transitions.map(({ key, props }) => (
        <animated.div key={key} style={props} className={className}>
          {title}
        </animated.div>
      ))}
    </>
  );
};

// export const FadeTitle;
