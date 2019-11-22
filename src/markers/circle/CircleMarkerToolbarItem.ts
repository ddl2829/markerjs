import { ToolbarItem } from '../../toolbar/ToolbarItem';
import { CircleMarker } from './CircleMarker';

import Icon from './circle-marker-toolbar-icon.svg';

export class CircleMarkerToolbarItem implements ToolbarItem {
	public name = 'circle-marker';
	public tooltipText = 'Circle';

	public icon = Icon;
	public markerType = CircleMarker;
}
