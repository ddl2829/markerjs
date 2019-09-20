import { RectangularMarkerBase } from "../RectangularMarkerBase";
export declare class TextMarker extends RectangularMarkerBase {
    static createMarker: () => TextMarker;
    protected readonly MIN_SIZE = 50;
    private readonly DEFAULT_TEXT;
    private text;
    private textElement;
    private inDoubleTap;
    private editor;
    private editorTextArea;
    protected setup(): void;
    protected resize(x: number, y: number): void;
    private renderText;
    private sizeText;
    private onDblClick;
    private onTap;
    private showEditor;
    private onEditorOkClick;
    private closeEditor;
    private onEditorKeyDown;
}
