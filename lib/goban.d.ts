declare enum Stone {
    None = 0,
    Black = 1,
    White = 2
}
declare class Goban {
    #private;
    canvas: HTMLCanvasElement;
    size: number;
    matrix: Stone[][];
    constructor(root: HTMLElement, size: number, onClick?: (x: number, y: number) => void);
    placeStone(stone: Stone, x: number, y: number): void;
    draw(): void;
}