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
        this.markerCircle.setAttribute("fill", "rgba(0,0,0,0)");
        this.markerCircle.setAttribute("stroke", "rgb(255,0,0)");
        this.markerCircle.setAttribute("stroke-width", "3");
        this.addToRenderVisual(this.markerCircle);
        SvgHelper.setAttributes(this.visual, [["class", "circle-marker"]]);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerCircle.setAttribute("rx", (this.width / 2).toString());
        this.markerCircle.setAttribute("ry", (this.height / 2).toString());
        this.markerCircle.setAttribute("cx", (this.width / 2).toString());
        this.markerCircle.setAttribute("cy", (this.height / 2).toString());
    }

    //<ellipse fill="rgba(0,0,0,0)" stroke="rgb(255,0,0)" stroke-width="3" cx="100" cy="25" rx="93" ry="46"></ellipse>

}
