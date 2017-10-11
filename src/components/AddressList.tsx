import * as React from "react";

import { Entry } from "../models/model";

interface Props {
  addresses: Entry[];
  removeAddress: (entry: Entry) => void;
}

const AddressList: React.StatelessComponent<Props> = props => (
  <div>This is the address list.</div>
);

export default AddressList;
