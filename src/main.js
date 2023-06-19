import './views/info-view.js';
import './views/filter-view.js';
import './views/add-view.js';
import './views/sort-view.js';
import './views/waypoint-list-view.js';
import './views/no-waypoint-view.js';

import AppModel from './models/app-model.js';

import InfoPresenter from './presenters/info-presenter.js';
import AddPresenter from './presenters/add-presenter.js';
import FilterPresenter from './presenters/filter-presenter.js';
import SortPresenter from './presenters/sort-presenter.js';
import WaypointListPresenter from './presenters/waypoint-list-presenter.js';
import NoWaypointPresenter from './presenters/no-waypoint-presenter.js';

const appModel = new AppModel();

new InfoPresenter(document.querySelector('info-view'));
new AddPresenter(document.querySelector('add-view'));
new FilterPresenter(document.querySelector('filter-view'));
new SortPresenter(document.querySelector('sort-view'));
new WaypointListPresenter(document.querySelector('waypoint-list-view'), appModel);
new NoWaypointPresenter(document.querySelector('no-waypoint-view'), appModel);
