import ToolbarCollection from './Collections/ToolbarCollection';
import ToolbarView from './Views/ToolbarView';

class ToolbarManager {

  constructor() {
    this.collection = new ToolbarCollection();
  }

  add(el, model) {
    model = this.collection.add(model);

    const toolbar = new ToolbarView({
      el: el,
      model: model
    });

    toolbar.render();

    return toolbar;
  }

}

export default ToolbarManager;
