import Backbone from 'Backbone';

const ToolbarModel = Backbone.Model.extend({

  defaults: {
    sticky: false,
    active: false,
    showLabel: false,
    showActions: false,
  },

  /**
   * {@inheritdoc}
   */
  set: function(attributes, options) {
    var thisModel = this;

    // If this model is being made sticky, all other models must be made
    // unsticky.
    if (attributes.sticky === true) {
      this.collection.each(function(model) {
        if (model.cid != thisModel.cid) {
          model.set({ sticky: false });
        }
      });
      attributes.active = true;
    }

    var stickyModel = this.collection.findWhere({ sticky: true });
    if (!stickyModel) {
      stickyModel = this;
    }
    if (attributes.active === true) {
      this.collection.each(function(model) {
        if (model.cid  != thisModel.cid && model.cid != stickyModel.cid) {
          model.set({ active: false });
        }
      });
    }

    return Backbone.Model.prototype.set.call(this, attributes, options);
  }

});

export default ToolbarModel;
