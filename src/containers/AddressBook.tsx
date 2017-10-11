import * as React from "react";

import Entry from "../models/model";
import AddressPage from "../components/AddressPage";

interface Entry {
  firstName: string;
  lastName: string;
  mobilePhone: number;
  nickName: string;
}

interface State {
  addresses: Entry[];
}

class AddressBook extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      addresses: []
    };

    this.addAddress = this.addAddress.bind(this);
    // this.editAddress = this.editAddress.bind(this);
    // this.removeAddress = this.removeAddress.bind(this);
  }

  private addAddress(entry: Entry): void {
    this.setState({
      addresses: this.state.addresses.concat(entry)
    });
  }

  //   editAddress(): void {
  //     this.setState({});
  //   }

  //   removeAddress(): void {
  //     this.setState({});
  //   }

  render() {
    return <AddressPage addAddress={this.addAddress} />;
  }
}

export default AddressBook;
