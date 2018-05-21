import { Meteor } from "meteor/meteor"

import { Documents } from "../both/document-collection.js"

// -------------------------------------------------------
Meteor.publish("documents.all", function documentsAll() {
  return Documents.find()
})
