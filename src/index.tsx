import * as React from "react";
import * as ReactDOM from "react-dom";

import AddressBook from "./containers/AddressBook";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<AddressBook />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
