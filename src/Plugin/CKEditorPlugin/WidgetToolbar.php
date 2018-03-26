<?php

namespace Drupal\ckeditor_widgettoolbar\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "widgettoolbar" plugin.
 *
 * @CKEditorPlugin(
 *   id = "widgettoolbar",
 *   label = @Translation("Widget Filter"),
 *   module = "ckeditor_widgettoolbar"
 * )
 */
class WidgetToolbar extends CKEditorPluginBase implements CKEditorPluginContextualInterface {

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    // If the module is enabled, the plugin should be enabled.
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'ckeditor_widgettoolbar') . '/js/dist/plugins/widgettoolbar/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [
      'ckeditor_widgettoolbar/core',
    ];
  }

}
