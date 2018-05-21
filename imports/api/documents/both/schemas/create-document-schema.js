import SimpleSchema from "simpl-schema"

// ***************************************************************
// Create document schema
// ***************************************************************

const CreateDocumentSchema = new SimpleSchema({
  layoutId: String,
  fields: [Object],
  'fields.$.fieldId': String,
  'fields.$.value': String,
})

export default CreateDocumentSchema
