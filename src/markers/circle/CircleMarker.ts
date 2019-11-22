import { SvgHelper } from "../../helpers/SvgHelper";
import { RectangularMarkerBase } from "../RectangularMarkerBase";

export class CircleMarker extends RectangularMarkerBase {
    public static createMarker = (): RectangularMarkerBase => {
        const marker = new CircleMarker();
        marker.setup();
        return marker;
    }

    private markerCircle: SVGEllipseElement;

    protected setup() {
        super.setup();
        this.markerCircle = SvgHelper.createEllipse(this.width / 2, this.height / 2);
        this.addToRenderVisual(this.markerCircle);
        SvgHelper.setAttributes(this.visual, [["class", "circle-marker"]]);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerCircle.setAttribute("rx", (this.width / 2).toString());
        this.markerCircle.setAttribute("ry", (this.height / 2).toString());
    }

}
