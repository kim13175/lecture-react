import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFromView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");

  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView()
  };

  new Controller(store, views);
}
