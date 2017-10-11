import * as React from "react";

import { Entry } from "../models/model";

interface Props {
  addAddress: (entry: Entry) => void;
}

interface State {
  firstName: string;
  lastName: string;
  mobilePhone: number;
  nickName: string;
}

class AddressForm extends React.Component<Props, State> {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleInputChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitForm() {
    const { firstName, lastName, mobilePhone, nickName } = this.state;
    const entry = {
      firstName,
      lastName,
      mobilePhone,
      nickName
    };
    this.props.addAddress(entry);
  }

  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
        <label htmlFor="mobilePhone">Cell Number: </label>
        <input
          type="text"
          id="mobilePhone"
          value={this.state.mobilePhone}
          onChange={this.handleInputChange}
        />
        <label htmlFor="nickName">Nickname: </label>
        <input
          type="text"
          id="nickName"
          value={this.state.nickName}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmitForm}>Submit</button>
      </form>
    );
  }
}

export default AddressForm;
