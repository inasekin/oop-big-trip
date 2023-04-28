import View from './view.js';
import FormView from './form-view.js';
import WaypointView from './waypoint-view.js';

class WaypointListView extends View {
  constructor() {
    super();

    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  /**
   * @override
   */
  render() {
    const views = new Array(4).fill().map(this.createItemView);

    this.replaceChildren(...views);
  }

  /**
   * @return {FormView | WaypointView}
   */
  createItemView(none, index) {
    const view = (index === 0) ? new FormView() : new WaypointView();

    view.classList.add('trip-list__item');
    view.setAttribute('role', 'listitem');
    view.render();

    return view;
  }
}

customElements.define('waypoint-list-view', WaypointListView);

export default WaypointListView;
