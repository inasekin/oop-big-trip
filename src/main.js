import './view/info-view.js';
import './view/filter-view.js';
import './view/button-view.js';
import './view/sort-view.js';
import './view/waypoint-list-view.js';

import AppModel from './models/app-model.js';

const appModel = new AppModel();
console.log(appModel.getOfferGroups());

/**
 * @type {InfoView}
 */
const infoView = document.querySelector('info-view');

/**
 * @type {ButtonView}
 */
const buttonView = document.querySelector('button-view');

/**
 * @type {FilterView}
 */
const filterView = document.querySelector('filter-view');

/**
 * @type {SortView}
 */
const sortView = document.querySelector('sort-view');

/**
 * @type {WaypointListView}
 */
const waypointListView = document.querySelector('waypoint-list-view');

infoView.render();
buttonView.render();
filterView.render();
sortView.render();
waypointListView.render();
