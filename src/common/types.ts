export interface IOptions {
	url: string;
	interpolateFn: (x: number, y: number) => string;
}

export interface IStyle {
	readonly [key: string]: string;
}

export interface ICoords {
	xy: number[];
}