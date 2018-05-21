import {Meteor} from "meteor/meteor"
import SimpleSchema from "simpl-schema"
import {ValidatedMethod} from "meteor/mdg:validated-method"

import {Documents} from "./document-collection.js"
import CreateDocumentSchema from "./schemas/create-document-schema.js"
import {Layouts} from "/imports/api/layouts/both/layout-collection.js"
import {DocumentSaver} from "./document-saver";

export const createDocument = new ValidatedMethod({
  name: "documents.create",
  validate: CreateDocumentSchema.validator(),
  run(document) {
    let layout = Layouts.findOne({_id: document.layoutId});
    new DocumentSaver(document, layout).call()
  }
})

export const deleteDocument = new ValidatedMethod({
  name: "documents.delete",
  validate: new SimpleSchema({
    documentId: { type: String }
  }).validator(),
  run({ documentId }) {

    return Documents.remove(documentId, function(error, result) {
      if (error) {
        throw new Meteor.Error(500, "Server error")
      }
    })
  }
})
