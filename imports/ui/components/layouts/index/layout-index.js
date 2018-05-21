import { Template } from "meteor/templating"

import { Layouts } from "/imports/api/layouts/both/layout-collection"

import "./layout-index.html"
import "./layout-index-item/layout-index-item.js"

Template.layoutsIndex.onCreated(function() {
  this.subscribe("layouts.all")
})

Template.layoutsIndex.onRendered(function() {})

Template.layoutsIndex.onDestroyed(function() {})

Template.layoutsIndex.helpers({
  layouts() {
    return Layouts.find({}, { sort: { createdAt: -1 } })
  }
})

Template.layoutsIndex.events({})
