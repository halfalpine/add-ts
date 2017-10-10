import { Component } from "react";

import MenuBar from "./Menubar";
import AddressList from "../AddressList";
import AddressForm from "../AddressForm";

const AddressPage = props => (
  <div>
    <MenuBar />
    <AddressList />
    <AddressForm />
  </div>
);

export default AddressPage;
