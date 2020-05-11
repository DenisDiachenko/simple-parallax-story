import React, { useEffect } from 'react';
import { animated, useSpring } from "react-spring";

import {
	IOptions,
	IStyle,
	ICoords
} from './types';

interface IProps {
	bgOptions: IOptions[];
	style: IStyle;
	coords: ICoords
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
		{bgOptions.map(({ url,  interpolateFn }: any, index: number) => (
			<animated.div
				key={interpolateFn.name}
				className={style.card}
				style={{
					backgroundImage: `url(${url})`,
					transform: props.xy.interpolate(interpolateFn),
					opacity: index  > 1 && index % 2 === 0 ? 0.9 : 1,
				}}
			/>
		))}
		</>
	)

}