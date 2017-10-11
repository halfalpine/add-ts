import * as React from "react";

import { Entry } from "../models/model";

interface Props {
  addAddress: (entry: Entry) => void;
}

interface State {
  firstName: string;
  lastName: string;
  nickName: string;
}

class AddressForm extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      nickName: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleInputChange(e: any) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitForm(e: any) {
    e.preventDefault();
    const { firstName, lastName, nickName } = this.state;
    const entry = {
      firstName,
      lastName,
      nickName
    };
    this.props.addAddress(entry);
    this.setState({
      firstName: "",
      lastName: "",
      nickName: ""
    });
  }

  render() {
    const { firstName, lastName, nickName } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="nickName">Nickname: </label>
          <input
            type="text"
            id="nickName"
            name="nickName"
            value={nickName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button onClick={this.handleSubmitForm}>Submit</button>
        </div>
      </form>
    );
  }
}

export default AddressForm;
