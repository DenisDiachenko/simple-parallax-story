
export const calc = (x: number, y: number) => [
	(x / 100) - window.innerWidth / 100,
	(y / 25) - window.innerHeight / 100,
];

const trans1 = (x: number, y: number) =>
	`translate3d(${x / 8 - 29}vw,${y / 8 - 30}vh,0)`;
export const trans2 = (x: number, y: number) =>
	`translate3d(${x / 4 - 35}vw,${y / 6 + 1}vh,0)`;

const trans3 = (x: number, y: number) =>
	`translate3d(${x / 3 + 5}vw,${y / 8 - 7}vh,0)`;
const trans4 = (x: number, y: number) =>
	`translate3d(${x / 3 + 35}vw,${y / 8 - 22}vh,0)`;
const trans5 = (x: number, y: number) =>
	`translate3d(${x / 3 + 17}vw,${y / 8 - 35}vh,0)`;
const trans6 = (x: number, y: number) =>
	`translate3d(${x / 2 + 35}vw,${y / 8 - 22}vh,0)`;
const trans7 = (x: number, y: number) =>
	`translate3d(${x / 2 + 17}vw,${y / 8 - 35}vh,0)`;


export const interpolateFns = [trans1, trans2, trans3, trans4, trans5, trans6, trans7];
