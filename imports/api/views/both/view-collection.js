import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import FieldSchema from "../../fields/both/schemas/field-schema";


const ViewSchema = new SimpleSchema({
  header: Object,
  'header.rows': [Object],
  'header.rows.$.columns':[FieldSchema],
  buttons: [String]
})

export const Views = new Mongo.Collection("views");

Views.attachSchema(ViewSchema);
