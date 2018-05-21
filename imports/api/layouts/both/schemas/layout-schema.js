import SimpleSchema from "simpl-schema"
import {HeaderSchema} from "./header-schema";

const LayoutSchema = new SimpleSchema({
  name: {
    type: String
  },
  documentDefinitionId: {
    type: String,
  },
  header: {
    type: HeaderSchema
  },
  buttons: [
    String
  ],
  createdAt: {
    type: Date,
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date()
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date()
      }
    }
  }
})

export default LayoutSchema
