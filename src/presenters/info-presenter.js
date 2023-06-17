import Presenter from './presenter.js';

/**
 * @extends {Presenter<InfoView>}
 */
class InfoPresenter extends Presenter {
  /**
   * @override
   * @return {InfoViewState}
   */
  createViewState() {
    // TODO: Создать динамически
    return {
      places: 'Amsterdam — Chamonix — Geneva',
      dates: 'Mar 18 — 20',
      cost: '12301',
    };
  }
}

export default InfoPresenter;
