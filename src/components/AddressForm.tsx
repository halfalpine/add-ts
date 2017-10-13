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

  handleInputChange(e: React.SyntheticEvent<HTMLInputElement>) {
    interface Obj {
      [key: string]: string;
    }
    let target = e.target as HTMLInputElement;
    let stateObj = function(): Obj {
      let obj = {};
      obj[target.name] = target.value;
      return obj;
    };
    this.setState(stateObj);
  }

  handleSubmitForm(e: React.FormEvent<HTMLFormElement>): void {
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
      <form onSubmit={this.handleSubmitForm}>
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
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default AddressForm;
