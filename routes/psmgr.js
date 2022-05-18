import { Router } from "express";

import { getList, addNew, editItem, deleteItem } from "../controller/psmgr.js";

const psmgr = Router();

psmgr.route("/").get(getList).post(addNew);
psmgr.route("/:id").patch(editItem).delete(deleteItem);

export default psmgr;
