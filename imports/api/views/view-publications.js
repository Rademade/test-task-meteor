import {Meteor} from "meteor/meteor"
import {ViewPublication, ViewPublicationHelper} from "./view-publication-helper";

Meteor.publish("views.single", function viewsSingle(layoutId) {
  return new ViewPublicationHelper(layoutId).generate()
})
