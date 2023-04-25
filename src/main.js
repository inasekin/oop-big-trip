import {render, RenderPosition} from './render';
import FilterView from './view/filter-view';
import InfoView from './view/info-view';
import ButtonView from './view/button-view';
import WaypointsPresenter from './presenter/waypoints-presenter';


const tripFilters = document.querySelector('.trip-controls__filters');
const tripMain = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');
const boardPresenter = new WaypointsPresenter({waypointsContainer: tripEvents});

render(new InfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilters);
render(new ButtonView(), tripMain);
boardPresenter.init();
