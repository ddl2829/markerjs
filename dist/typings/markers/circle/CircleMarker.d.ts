import { RectangularMarkerBase } from "../RectangularMarkerBase";
export declare class CircleMarker extends RectangularMarkerBase {
    static createMarker: () => RectangularMarkerBase;
    private markerCircle;
    protected setup(): void;
    protected resize(x: number, y: number): void;
}
