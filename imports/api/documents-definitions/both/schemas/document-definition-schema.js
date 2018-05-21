import SimpleSchema from 'simpl-schema';
import { DocumentDefinitionFieldsSchema } from "./document-definition-fields-schema";

const DocumentDefinitionsSchema = new SimpleSchema({
  schema: DocumentDefinitionFieldsSchema
})

export default DocumentDefinitionsSchema;
