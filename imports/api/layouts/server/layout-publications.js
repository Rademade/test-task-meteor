import { Meteor } from "meteor/meteor"

import { Layouts } from "../both/layout-collection.js"
import SimpleSchema from "simpl-schema";

Meteor.publish("layouts.all", function layoutsAll() {
  return Layouts.find()
})

Meteor.publish("layouts.single", function layoutsSingle(id) {
  new SimpleSchema({
    id: { type: String }
  }).validate({ id })

  return Layouts.find(id)
})
