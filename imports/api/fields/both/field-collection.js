import { Mongo } from "meteor/mongo"
import FieldSchema from "./schemas/field-schema";

export const Fields = new Mongo.Collection("fields")

Fields.allow({
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

Fields.deny({
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

Fields.attachSchema(FieldSchema)
