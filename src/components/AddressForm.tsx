import * as React from "react";
import styled from "styled-components";

import { Entry } from "../models/model";

const StyledEntryForm = styled.form`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const InputSection = styled.div`padding: 5px;`;

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
      <StyledEntryForm onSubmit={this.handleSubmitForm}>
        <h4>Create a new entry:</h4>
        <InputSection>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
        </InputSection>
        <InputSection>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
        </InputSection>
        <InputSection>
          <label htmlFor="nickName">Nickname: </label>
          <input
            type="text"
            id="nickName"
            name="nickName"
            value={nickName}
            onChange={this.handleInputChange}
          />
        </InputSection>
        <InputSection>
          <input type="submit" value="Submit" />
        </InputSection>
      </StyledEntryForm>
    );
  }
}

export default AddressForm;
