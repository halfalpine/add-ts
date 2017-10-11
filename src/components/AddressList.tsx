import * as React from "react";

import { Entry } from "../models/model";

interface Props {
  addresses: Entry[];
  removeAddress: (entry: Entry) => void;
}

const AddressList: React.StatelessComponent<Props> = props => (
  <div>
    <div>This is the address list:</div>
    {props.addresses.map((entry: Entry, index: number) => (
      <div key={index}>
        {index + 1}. {entry.firstName} {entry.lastName} aka "{entry.nickName}"
      </div>
    ))}
  </div>
);

export default AddressList;
