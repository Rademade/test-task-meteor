import SimpleSchema from "simpl-schema";
import FieldSchema from "/imports/api/fields/both/schemas/field-schema";

export const DocumentDefinitionFieldsSchema = new SimpleSchema({
  fields: [
    FieldSchema
  ]
});
