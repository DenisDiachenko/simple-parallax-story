import React from "react";
import { animated, useTransition } from "react-spring";

interface IStyle {
	[key: string]: string;
}

interface IProps {
	className?: string;
	children: JSX.Element | JSX.Element[];
	onMouseMove?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	ownStyle?: React.CSSProperties | undefined;
}

export const FadeContainer = ({
	className,
	onMouseMove,
	children,
	ownStyle,
}: IProps) => {
  const transitions = useTransition(null, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {transitions.map(({ key, props }) => (
        <animated.div key={key} style={{...props, ...ownStyle}} className={className} onMouseMove={onMouseMove}>
          {children}
        </animated.div>
      ))}
    </>
  );
};

