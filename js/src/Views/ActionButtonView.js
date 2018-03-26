import Backbone from 'Backbone';
import $ from 'jquery';

const ActionButtonView = Backbone.View.extend({

  /**
   * {@inheritdoc}
   */
  initialize: function(options) {
    Backbone.View.prototype.initialize.call(this, options);
    this.action = options.action;
  },

  template: '<li class="toolbar-action"></li>',

  events: {
    "click a": "execute",
  },

  render: function() {
    this.$el.html($('<a href="#" title="'
        + this.action.label
        + '" class="toolbar-action__button">'
        + this.action.icon
        + '</a>'));

    return this;
  },

  execute: function() {
    this.action.callback();
  }

});

export default ActionButtonView;
