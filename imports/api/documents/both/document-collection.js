import { Mongo } from "meteor/mongo"

import DocumentSchema from "./schemas/document-schema"
export const Documents = new Mongo.Collection("documents")

Documents.allow({
  insert() {
    return false
  },
  update() {
    return false
  },
  remove() {
    return false
  }
})

Documents.deny({
  insert() {
    return true
  },
  update() {
    return true
  },
  remove() {
    return true
  }
})

Documents.attachSchema(DocumentSchema)
