import { prices } from "./prices";
import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const products = {
  get,
  search,
  create,
  update,
  delete: del,
  prices,
};