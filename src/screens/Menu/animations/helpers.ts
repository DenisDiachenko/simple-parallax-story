
export const calc = (x: number, y: number) => [
	x - window.innerWidth / 2,
	y - window.innerHeight / 2,
];

export const trans1 = (x: number, y: number) =>
	`translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
export const trans2 = (x: number, y: number) =>
	`translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

export const trans3 = (x: number, y: number) =>
	`translate3d(${x / 6 + 220}px,${y / 8 - 230}px,0)`;
export const trans4 = (x: number, y: number) =>
	`translate3d(${x / 6 + 35}px,${y / 8 - 115}px,0)`;
export const trans5 = (x: number, y: number) =>
	`translate3d(${x / 6 - 80}px,${y / 8 - 380}px,0)`;