import { Meteor } from "meteor/meteor"
import {Fields} from "../both/field-collection";


Meteor.publish("fields.all", function fieldAll() {
  return Fields.find()
})
