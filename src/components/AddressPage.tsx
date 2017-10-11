import * as React from "react";

import { Entry } from "../models/model";
import MenuBar from "./MenuBar";
import AddressList from "./AddressList";
import AddressForm from "./AddressForm";

interface Props {
  addresses: Entry[];
  addAddress: (entry: Entry) => void;
  removeAddress: (entry: Entry) => void;
}

const AddressPage: React.StatelessComponent<Props> = props => (
  <div>
    <MenuBar />
    <AddressList
      addresses={props.addresses}
      removeAddress={props.removeAddress}
    />
    <AddressForm addAddress={props.addAddress} />
  </div>
);

export default AddressPage;
