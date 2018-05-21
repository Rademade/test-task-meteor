import SimpleSchema from "simpl-schema";
import {ColumnSchema} from "./column-schema";

export const RowSchema = new SimpleSchema({
  columns: [
    ColumnSchema
  ]
});
