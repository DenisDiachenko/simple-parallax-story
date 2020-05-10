import React, { useEffect } from 'react';
import { animated, useSpring } from "react-spring";

interface Options {
	img: string;
	interpolateFn: (x: number, y: number) => string;
}

interface Style {
	readonly [key: string]: string;
}

interface IProps {
	bgOptions: Options[];
	style: Style;
	coords: any
}

export const ParallaxBackground = ({ bgOptions, style, coords }: IProps) => {

	const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
	}));

	useEffect(() => {
		set(coords)
	}, [coords, set]);

	return (
		<>
		{/* Use any in a reason of weird behavior with TS */}
    {/* Created issue and waiting for response: https://github.com/react-spring/react-spring/issues/998 */}
		{bgOptions.map(({ img, interpolateFn }) => (
			<animated.div
				className={style[img]}
				style={{ transform: props.xy.interpolate(interpolateFn as any) }}
			/>
		))}
		</>
	)

}