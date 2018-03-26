import Backbone from 'Backbone';
import ToolbarModel from '../Models/ToolbarModel';

const ToolbarCollection = Backbone.Collection.extend({

  model: ToolbarModel,

});

export default ToolbarCollection;
