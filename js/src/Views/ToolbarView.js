import Backbone from 'Backbone';
import $ from 'jquery';

const ToolbarView = Backbone.View.extend({

  /**
   * {@inheritdoc}
   */
  initialize: function(options) {
    Backbone.View.prototype.initialize.call(this, options);

    this.actionViews = [];
    this.listenTo(this.model, 'change:label', this._updateLabelChildren);
    this.listenTo(this.model, 'change:actions', this._updateActionChildren);
    this.listenTo(this.model, 'change:active change:showLabel change:showActions', this._updateUi);
  },

  /**
   * {@inheritdoc}
   */
  remove: function() {
    this._removeActionViews();
    this.stopListening();
    this.$toolbarEl.remove();
    this.model.destroy();
    return this;
  },

  render: function() {

    // Mark the root element so that we know which toolbar to make active.
    this.$el.addClass('js-toolbar-boundary');
      
    // Create the view elements.
    this.$selectableEl = this._findSelectable(this.$el);
    this.$toolbarEl = $('<div class="toolbar"></div>');
    this.$labelEl = $('<div class="toolbar__label"></div>');
    this.$actionsEl = $('<div class="toolbar__actions"></div>');
    this.$toolbarEl.append(this.$labelEl);
    this.$toolbarEl.append(this.$actionsEl);

    this.$selectableEl.css({
      position: 'relative',
    });

    this.$toolbarEl.css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }).prop('contentEditable', false);

    // Fill the contents of the label and actions elements.
    this._updateLabelChildren()
      ._updateActionChildren()
      ._updateLabel()
      ._updateActions()
      ._updateUi();

    return this;
  },

  reposition: function() {
    return this._updateLabel()._updateActions();
  },

  _updateLabelChildren() {
    this.$labelEl.html(this.model.get('label'));
    return this;
  },

  _updateActionChildren() {

    // Remove the existing views that were created.
    this._removeActionViews();

    // Attach updated action views.
    var view = this;
    _.each(this.model.get('actions'), function(action) {
      var $actionEl = $(action.view.prototype.template);
      view.$actionsEl.append($actionEl);
      var childView = new action.view({
        el: $actionEl[0],
        action: action,
      });
      childView.render();
      view.actionViews.push(childView);
    });

    return this;
  },

  _updateUi: function() {
    if (this.model.get('active')) {
      this.$selectableEl.append(this.$toolbarEl);
      this.$selectableEl.addClass('js-toolbar-active');
    }
    else {
      this.$toolbarEl.detach();
      this.$selectableEl.removeClass('js-toolbar-active');
    }
    this.$labelEl.css({
      position: 'absolute',
      top: 0,
      left: -(parseInt(this.$selectableEl.css('borderLeft'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px',
    });

    this.$actionsEl.css({
      position: 'absolute',
      top: 0,
      right: -(parseInt(this.$selectableEl.css('borderLeft'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px',
    });
    return this._updateLabel()._updateActions();
  },

  _updateLabel: function() {
    if (this.model.get('showLabel') && this.model.get('active')) {
      this._showUiElement(this.$labelEl, 'left');
    }
    else {
      this._hideUiElement(this.$labelEl);
    }
    return this;
  },

  _updateActions: function() {
    if (this.model.get('showActions') && !!this.model.get('actions') && this.model.get('active')) {
      this._showUiElement(this.$actionsEl, 'right');
    }
    else {
      this._hideUiElement(this.$actionsEl);
    }
    return this;
  },

  _showUiElement: function($el, pos) {
    $el.show();

    if (this.$el.offset().top < $el.outerHeight()) {
      $el.css({ top: -(parseInt(this.$selectableEl.css('borderTop'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px' });
    }
    else {
      $el.css({ top: -$el.outerHeight() - (parseInt(this.$selectableEl.css('borderTop'), 10) + parseInt(this.$selectableEl.css('outlineWidth'), 10)) + 'px' });
    }
    return this;
  },

  _hideUiElement: function($el) {
    $el.hide();
    return this;
  },


  _findSelectable: function($el) {
    if ($el.is('.js-toolbar-boundary') && !$el.is(this.$el)) {
      return $([]);
    }

    if ($el.is('.js-toolbar-selectable')) {
      return $el;
    }

    if ($el.outerHeight()) {
      return $el;
    }

    var view = this;
    var $result = $([]);
    $el.children().each(function() {
      var $bestMatch = view._findSelectable($(this));

      if ($bestMatch.is('.js-toolbar-selectable')) {
        $result = $bestMatch;
        return false;
      }
      else if (!!$bestMatch.outerHeight() && !$result.length) {
        $result = $bestMatch;
      }
    });

    if (!$result.length) {
      $result = $el;
    }

    return $result;
  },

  _removeActionViews: function() {
    _.each(this.actionViews, function(view) {
      view.remove();
    });
    this.actionViews = [];

    return this;
  }

});

export default ToolbarView;
