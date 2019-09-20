export declare class MarkerBase {
    static createMarker: () => MarkerBase;
    visual: SVGGElement;
    renderVisual: SVGGElement;
    onSelected: (marker: MarkerBase) => void;
    defs: SVGElement[];
    protected width: number;
    protected height: number;
    protected isActive: boolean;
    protected isResizing: boolean;
    protected previousMouseX: number;
    protected previousMouseY: number;
    private isDragging;
    manipulate: (ev: MouseEvent) => void;
    endManipulation(): void;
    select(): void;
    deselect(): void;
    protected setup(): void;
    protected addToVisual: (el: SVGElement) => void;
    protected addToRenderVisual: (el: SVGElement) => void;
    protected resize(x: number, y: number): void;
    protected onTouch(ev: TouchEvent): void;
    private mouseDown;
    private mouseUp;
    private mouseMove;
    private move;
}
