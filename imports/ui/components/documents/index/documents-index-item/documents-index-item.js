import { Template } from "meteor/templating";

import { deleteDocument } from "/imports/api/documents/both/document-methods.js"
import { notify } from "/imports/modules/notifier"

import "./documents-index-item.html"

Template.documentsIndexItem.onCreated(function() {
  this.getDocumentId = () => Template.instance().data.document._id
})

Template.documentsIndexItem.onRendered(function() {})

Template.documentsIndexItem.onDestroyed(function() {})

Template.documentsIndexItem.helpers({})

Template.documentsIndexItem.events({
  "click .js-delete-document"(event, instance) {
    event.preventDefault()

    if (confirm("Are you sure?")) {
      let documentId = Template.instance().getDocumentId()

      deleteDocument.call(
        {
          documentId: documentId
        },
        (error, result) => {
          if (error) {
            console.log(error.error)
          } else {
            notify("Document deleted!", "error")
          }
        }
      )
    }
  }
})
