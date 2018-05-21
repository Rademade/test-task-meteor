import SimpleSchema from "simpl-schema"
import DocumentDefinitionsSchema from "../../../documents-definitions/both/schemas/document-definition-schema";

const DocumentSchema = new SimpleSchema({});
DocumentSchema.extend(DocumentDefinitionsSchema);
DocumentSchema.extend(
  {
    "schema.fields.$.value": {
      type: String
    },
    documentDefinitionId: {
      type: String
    }
  }
);

export default DocumentSchema
