import SimpleSchema from "simpl-schema";
import {RowSchema} from "./row-schema";

export const HeaderSchema = new SimpleSchema({
  rows: [
    RowSchema
  ]
});
