import React, { memo } from "react";
import { useTrail, animated } from "react-spring";

interface IProps {
  className: string;
  options: string[];
}

export const AnimatedMenu = memo(({ className, options }: IProps) => {
  const trail = useTrail(options!.length, {
    config: { mass: 2, tension: 250, friction: 15 },
    opacity: 1,
    x: 0,
    height: 18,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={options[index]}
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.div className={className} style={{ height }}>
            {options[index]}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
})

