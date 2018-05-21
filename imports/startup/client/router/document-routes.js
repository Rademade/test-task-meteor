import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"

import "/imports/ui/components/documents/index/documents-index.js"
import "/imports/ui/components/documents/new/document-new.js"

FlowRouter.route("/documents", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentsIndex",
      footer: "footer"
    })
  },
  name: "documentsIndex"
})

FlowRouter.route("/layouts/:layoutId/documents/new", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentNew",
      footer: "footer"
    })
  },
  name: "documentNew"
})
