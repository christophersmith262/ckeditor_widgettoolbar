/**
 * @file
 * A modern widget toolbar for CKEditor.
 *
 * @ignore
 */

import Drupal from 'drupal';
import CKEDITOR from 'ckeditor';

var pluginDefinition = {
  icons: null,
  hidpi: false,
}

if (Drupal.ckeditor_widgettoolbar) {
  pluginDefinition = { ...pluginDefinition,
    beforeInit: function(editor) {
      editor.widgetToolbars = new Drupal.ckeditor_widgettoolbar.ToolbarManager();
    },
  };
}

CKEDITOR.plugins.add('widgettoolbar', pluginDefinition);
