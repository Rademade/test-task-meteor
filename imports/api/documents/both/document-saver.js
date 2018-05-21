import {DocumentDefinitions} from "../../documents-definitions/both/document-definition-collection";
import {Documents} from "./document-collection";

export class DocumentSaver {
  constructor(document, layout) {
    this._document = document;
    this._layout = layout;
  }

  call() {
    if (Meteor.isServer) {
      let documentDefinition = DocumentDefinitions.findOne({_id: this._layout.documentDefinitionId});
      let filledFields = this._document.fields.map((field) => {
        let targetField = _.find(documentDefinition.schema.fields, (documentDefinitionField) => {
          return field.fieldId == documentDefinitionField._id
        })
        targetField.value = field.value;
        return targetField;
      })
      return Documents.insert(
        {
          documentDefinitionId: documentDefinition._id,
          schema: {
            fields: filledFields
          }
        }
      )
    }
  }
}
