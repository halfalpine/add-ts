import * as React from "react";

import AddressPage from "../components/AddressPage";

class AddressBook extends React.Component {
  constructor() {
    super();
    this.state = {
      addresses: []
    };

    this.addAddress = this.addAddress.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.removeAddress = this.removeAddress.bind(this);
  }

  addAddress() {}

  editAddress() {}

  removeAddress() {}

  render() {
    return (
      <AddressPage
        addAddress={this.addAddress}
        editAddress={this.editAddress}
        removeAddress={this.removeAddress}
        address={this.state.addresses}
      />
    );
  }
}

export default AddressBook;
