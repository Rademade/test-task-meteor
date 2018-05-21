import { Mongo } from "meteor/mongo"

import DocumentDefinitionSchema from "./schemas/document-definition-schema.js"

export const DocumentDefinitions = new Mongo.Collection("document-definitions")

DocumentDefinitions.allow({
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

DocumentDefinitions.deny({
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

DocumentDefinitions.attachSchema(DocumentDefinitionSchema)
