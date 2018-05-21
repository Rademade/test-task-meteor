import {Layouts} from "../layouts/both/layout-collection";
import {Fields} from "../fields/both/field-collection";
import {Views} from "./both/view-collection";

export class ViewPublicationHelper {
  constructor(layoutId){
    this._layoutId = layoutId;
  }

  generate(){
    let {layoutId, viewData} = this._prepareViewData();
    this.cleanUpLayoutsView(layoutId);
    return this.viewFromLayout(viewData);
  }

  _prepareViewData() {
    let layoutId = this._layoutId;
    let layout = Layouts.findOne({_id: layoutId});
    let viewRows = this._extractViewRows(layout);

    let viewData = this._combineViewData(layoutId, viewRows, layout);
    return {layoutId, viewData};
  }

  _combineViewData(layoutId, viewRows, layout) {
    let viewData = {
      _id: layoutId,
      header: {
        rows: viewRows
      },
      buttons: layout.buttons
    }
    return viewData;
  }

  _extractViewRows(layout) {
    let viewRows = layout.header.rows.map((row) => {
      return {
        columns: row.columns.map(function (column) {
          let field = Fields.findOne({_id: column.fieldId});
          return field;
        })
      }
    })
    return viewRows;
  }

  viewFromLayout(viewData) {
    let viewId = Views.insert(viewData);
    let view = Views.find({_id: viewId});
    return view;
  }

  cleanUpLayoutsView(layoutId) {
    Views.remove({_id: layoutId});
  }
}
