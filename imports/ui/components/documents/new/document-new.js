import {Template} from "meteor/templating"

import "./document-new.html"
import "./document-new-hooks.js"
import {Layouts} from "../../../../api/layouts/both/layout-collection";
import {Views} from "../../../../api/views/both/view-collection";
import {EventFieldsValuesExtractor} from "./event-fields-values-extractor";

import { notify } from "/imports/modules/notifier"

Template.documentNew.onCreated(function() {
  this.getLayoutId = () => FlowRouter.getParam('layoutId');
  this.autorun(() => {
    this.subscribe("layouts.single", this.getLayoutId());
    this.subscribe("views.single", this.getLayoutId());
  })
})

Template.documentNew.onRendered(function() {})

Template.documentNew.onDestroyed(function() {})

Template.documentNew.helpers({
  layout(){
    let layout = Layouts.findOne({ _id: Template.instance().getLayoutId() });
    return layout
  },
  view(){
    let view = Views.findOne({_id: Template.instance().getLayoutId()})
    return view;
  }
})

Template.documentNew.events({
  "submit #documentForm": function (event) {
    let fields = new EventFieldsValuesExtractor(event).fields();
    let filledDocument = {
      layoutId: Template.instance().getLayoutId(),
      fields: fields
    }
    event.preventDefault();
    Meteor.call("documents.create", filledDocument, function (res) {
      notify("Document added!", "success");
      FlowRouter.go('documentsIndex');
    });
  }
})
