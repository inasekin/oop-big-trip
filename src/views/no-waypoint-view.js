import View from './view.js';
import {html} from '../utils.js';

/**
 * @extends {View<NoWaypointViewState>}
 */
class NoWaypointView extends View {
  /**
   * @override
   */
  createHtml() {
    const placeholder = this.state;

    if (placeholder.isHidden) {
      return '';
    }

    return html`
      <p class="trip-events__msg">${placeholder.text}</p>
    `;
  }
}

customElements.define('no-waypoint-view', NoWaypointView);

export default NoWaypointView;
