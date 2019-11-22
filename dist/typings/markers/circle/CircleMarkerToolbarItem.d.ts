import { ToolbarItem } from '../../toolbar/ToolbarItem';
import { CircleMarker } from './CircleMarker';
export declare class CircleMarkerToolbarItem implements ToolbarItem {
    name: string;
    tooltipText: string;
    icon: string;
    markerType: typeof CircleMarker;
}
