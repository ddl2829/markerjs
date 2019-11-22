import { SvgHelper } from "../../helpers/SvgHelper";
import { RectangularMarkerBase } from "../RectangularMarkerBase";

export class CircleMarker extends RectangularMarkerBase {
    public static createMarker = (): RectangularMarkerBase => {
        const marker = new CircleMarker();
        marker.setup();
        return marker;
    }

    private markerRect: SVGRectElement;

    protected setup() {
        super.setup();
        this.markerRect = SvgHelper.createRect(this.width, this.height);
        this.addToRenderVisual(this.markerRect);
        SvgHelper.setAttributes(this.visual, [["class", "circle-marker"]]);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerRect.setAttribute("width", this.width.toString());
        this.markerRect.setAttribute("height", this.height.toString());
    }

}
