import get from "./get";
import search from "./search";
import create from "./create";
import update from "./update";
import del from "./delete";

export const prices = {
  get,
  search,
  create,
  update,
  delete: del,
};
