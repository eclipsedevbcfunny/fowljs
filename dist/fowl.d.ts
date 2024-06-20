// Generated by dts-bundle-generator v9.5.1

export declare class GameObject {
	x: number;
	y: number;
	w: number;
	h: number;
	visible: boolean;
	exists: boolean;
	constructor(x?: number, y?: number, w?: number, h?: number);
	draw(): void;
	kill(): void;
}
export declare class RectangleShape extends GameObject {
	x: number;
	y: number;
	w: number;
	h: number;
	color: string;
	constructor(x: number, y: number, w: number, h: number, color: string);
	draw(): void;
}
export declare class Camera extends GameObject {
	x: any;
	y: any;
	lastX: any;
	lastY: any;
	lock: boolean;
	lockObject: any;
	constructor(x?: any, y?: any);
	draw(): void;
	follow(object: any): void;
	unfollow(): void;
}
export declare class State {
	constructor();
	mousePos: any;
	manager: StateManager;
	preloads: Record<string, any>;
	objects: Array<GameObject>;
	prePreload(): void;
	preload(): void;
	finishPreload(): void;
	bg: RectangleShape;
	bgColor: string;
	camera: Camera;
	preCreate(): void;
	create(): void;
	preUpdate(delta: number): void;
	update(delta: number): void;
	add(object: GameObject, callback?: () => void): void;
	addPreload(name: string, data: any): void;
	getPreload(name: string): any;
	resetState(): void;
}
export declare class StateManager {
	scene: State;
	constructor();
	switch(scene: State): void;
}
export declare function getManager(): StateManager;
export declare class Music {
	source: string;
	audio: HTMLAudioElement;
	ready: boolean;
	constructor(source: string);
	play(force?: boolean): void;
	stop(): void;
}
export declare class Sound {
	source: string;
	constructor(source: string);
	play(): void;
}
export declare class Font {
	size: number;
	name: string;
	constructor(size?: number, name?: string);
	getMerged(): string;
	getSize(): number;
	getName(): string;
}
export declare class Group extends GameObject {
	objects: Array<GameObject>;
	x: number;
	y: number;
	constructor(x?: number, y?: number);
	draw(): void;
	add(object: GameObject, callback?: () => void): void;
}
export declare class OutlinedRectangleShape extends GameObject {
	x: number;
	y: number;
	w: number;
	h: number;
	color: string;
	outline_color: string;
	outline_width: number;
	constructor(x: number, y: number, w: number, h: number, color: string, outline_color: string, outline_width: number);
	draw(): void;
}
export declare class OutlinedTextLabel extends GameObject {
	x: number;
	y: number;
	font: Font;
	color: string;
	text: string;
	outline_color: string;
	outline_width: number;
	constructor(text: string, x: number, y: number, color: string, outline_color: string, outline_width: number, font: Font);
	draw(): void;
}
export declare class SlicedSprite extends GameObject {
	src: any;
	scale: number;
	img: HTMLImageElement;
	x: any;
	y: any;
	w: any;
	h: any;
	sx: any;
	sy: any;
	sw: any;
	sh: any;
	constructor(src: any, x: any, y: any, w: any, h: any, sx: any, sy: any, sw: any, sh: any, scale?: number);
	draw(): void;
}
export declare class Sprite extends GameObject {
	src: string;
	scale: number;
	img: HTMLImageElement;
	x: any;
	y: any;
	w: number;
	h: number;
	constructor(src: string, x: any, y: any, scale?: number);
	draw(): void;
}
export declare class TextLabel extends GameObject {
	x: number;
	y: number;
	font: Font;
	color: string;
	text: string;
	constructor(text: string, x: number, y: number, color: string, font: Font);
	draw(): void;
}
export declare class TileMap extends GameObject {
	data: any;
	offsetX: number;
	offsetY: number;
	tileSize: any;
	tilePaths: string[];
	constructor(data: any, tileSize: any, offsetX?: number, offsetY?: number);
	addTile(path: string): void;
	draw(): void;
	getCollision(obj1: any, tileX: number, tileY: number): boolean;
}
declare const canvas: () => HTMLCanvasElement;
export declare enum CollisionSides {
	TOP = 0,
	BOTTOM = 1,
	LEFT = 2,
	RIGHT = 3
}
export declare const colors: {
	0: {
		white: string;
		darkWhite: string;
		darkerWhite: string;
		silver: string;
		darkSilver: string;
		darkerSilver: string;
		deepSilver: string;
		deeperSilver: string;
		gray: string;
		dimGray: string;
		dimmerGray: string;
		darkGray: string;
		darkerGray: string;
		deepGray: string;
		lightBlack: string;
		black: string;
	};
	1: {
		red: string;
		orange: string;
		yellow: string;
		yellowGreen: string;
		green: string;
		teal: string;
		fowl: string;
		violet: string;
		deepBlue: string;
		hotPink: string;
	};
	2: {
		candyAppleRed: string;
		yellowOrange: string;
		gold: string;
		lemon: string;
		lime: string;
		darkGreen: string;
		skyBlue: string;
		blue: string;
		purple: string;
		fuchsia: string;
	};
	3: {
		fullRed: string;
		fullYellow: string;
		fullGreen: string;
		fullTeal: string;
		fullBlue: string;
		fullMagenta: string;
	};
	4: {
		variables: string;
		numbers: string;
		classes: string;
		strings: string;
		special: string;
		functions: string;
		keywords: string;
		foreground: string;
		comments: string;
	};
};
export type Controller = Record<string, {
	down: boolean;
}>;
export declare let controller: Controller;
export declare function getCollision(obj1: GameObject, obj2: GameObject): boolean;
export declare function getCollisionSide(obj1: GameObject, obj2: GameObject): CollisionSides | undefined;
export declare function getKeys(keys: any[]): boolean;
export declare function getMouseKeys(keys: any[]): boolean;
export declare function startGame(defaultScene: State): void;
export declare class CollisionBound {
	x: number;
	y: number;
	w: number;
	h: number;
	constructor(x: number, y: number, w: number, h: number);
}

export {
	canvas as getCanvas,
};

export {};
