import * as React from "react";

import { Entry } from "../models/model";
import AddressPage from "../components/AddressPage";

interface State {
  addresses: Entry[];
}

class AddressBook extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      addresses: [
        {
          firstName: "Dirk",
          lastName: "Peters",
          mobilePhone: 5093921618,
          nickName: "Moose"
        }
      ]
    };

    this.addAddress = this.addAddress.bind(this);
    this.removeAddress = this.removeAddress.bind(this);
  }

  addAddress(entry: Entry): void {
    this.setState({
      addresses: this.state.addresses.concat(entry)
    });
  }

  removeAddress(): void {
    this.setState({});
  }

  render() {
    return (
      <AddressPage
        addresses={this.state.addresses}
        addAddress={this.addAddress}
        removeAddress={this.removeAddress}
      />
    );
  }
}

export default AddressBook;
