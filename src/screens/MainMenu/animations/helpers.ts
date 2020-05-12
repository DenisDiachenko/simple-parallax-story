
export const calc = (x: number, y: number) => [
	(x / 100) - window.innerWidth / 100,
	(y / 25) - window.innerHeight / 100,
];

export const trans1 = (x: number, y: number) =>
	`translate3d(${x / 8 + 20}vw,${y / 8 - 30}vh,0)`;
export const trans2 = (x: number, y: number) =>
	`translate3d(${x / 4 - 30}vw,${y / 6 - 5}vh,0)`;

export const trans3 = (x: number, y: number) =>
	`translate3d(${x / 3 + 35}vw,${y / 8 - 23}vh,0)`;
export const trans4 = (x: number, y: number) =>
	`translate3d(${x / 3 + 5}vw,${y / 8 - 11}vh,0)`;
export const trans5 = (x: number, y: number) =>
	`translate3d(${x / 1 - 20}vw,${y / 8 - 38}vh,0)`;