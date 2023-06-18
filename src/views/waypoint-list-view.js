import View from './view.js';
import FormView from './form-view.js';
import WaypointView from './waypoint-view.js';

/**
 * @extends {View<WaypointListViewState>}
 */
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
    const views = this.state.items.map(this.createItemView);

    this.replaceChildren(...views);
  }

  /**
   * @param {PointViewState} state
   * @return {FormView | WaypointView}
   */
  createItemView(state) {
    const view = state.isEditable ? new FormView() : new WaypointView();

    view.classList.add('trip-list__item');
    view.setAttribute('role', 'listitem');
    view.state = state;
    view.render();

    return view;
  }
}

customElements.define('waypoint-list-view', WaypointListView);

export default WaypointListView;
