import { Meteor } from "meteor/meteor"
import { Documents } from "/imports/api/documents/both/document-collection.js"
import { Layouts } from "/imports/api/layouts/both/layout-collection";
import { Fields } from "/imports/api/fields/both/field-collection";
import {DocumentDefinitions} from "/imports/api/documents-definitions/both/document-definition-collection";

function cleanUpCollections() {
  let collections = [Fields, DocumentDefinitions, Layouts, Documents]
  collections.forEach((collection) => collection.remove({}))
}

Meteor.startup(() => {
  cleanUpCollections();

  var nameFieldId = Fields.insert({
    name: 'name',
    type: 'text',
    label: 'Client Name',
    maxLength: 100
  })

  var ageFieldId = Fields.insert({
    name: 'age',
    type: 'number',
    label: 'Client Age'
  })

  var nameField = Fields.findOne({_id: nameFieldId})
  var ageField = Fields.findOne({_id: ageFieldId})

  var documentDefinitionId = DocumentDefinitions.insert(
    {
      schema: {
        fields: [
          nameField,
          ageField
        ]
      }
    }
  )

  Layouts.insert({
    name: "Client info",
    documentDefinitionId: documentDefinitionId,
    header: {
      rows: [
        {
          columns: [
            {
              fieldId: nameFieldId
            },
            {
              fieldId: ageFieldId
            }
          ]
        }
      ]
    },
    buttons: [
      'Save'
    ]
  })
})
