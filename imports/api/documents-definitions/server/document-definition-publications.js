import { Meteor } from "meteor/meteor"

import { DocumentDefinitions } from "../both/document-definition-collection.js"

Meteor.publish("document-definitions.single", function documentDefinitionsAll(id) {
  return DocumentDefinitions.findOne({_id: id});
})
