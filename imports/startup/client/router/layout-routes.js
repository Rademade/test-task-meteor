import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"

import "/imports/ui/components/layouts/index/layout-index.js"

FlowRouter.route("/layouts", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "layoutsIndex",
      footer: "footer"
    })
  },
  name: "layoutsIndex"
})
