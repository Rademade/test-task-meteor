import SimpleSchema from "simpl-schema";

const FieldSchema = new SimpleSchema({
  _id: {
    type: String
  },
  name: {
    type: String,
    label: "name"
  },
  type: {
    type: String,
    label: "Type",
    allowedValues: ['number', 'text']
  },
  label: {
    type: String,
    label: "Label"
  },
  maxLength: {
    type: Number,
    label: "Max Length",
    optional: true
  },
});

export default FieldSchema;
