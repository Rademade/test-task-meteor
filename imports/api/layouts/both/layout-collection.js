import { Mongo } from "meteor/mongo"

import LayoutsSchema from "./schemas/layout-schema"

export const Layouts = new Mongo.Collection("layouts")

Layouts.allow({
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

Layouts.deny({
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

Layouts.attachSchema(LayoutsSchema)
