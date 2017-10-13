import * as React from "react";
import styled from "styled-components";

import { Entry } from "../models/model";
import MenuBar from "./MenuBar";
import AddressList from "./AddressList";
import AddressForm from "./AddressForm";

const StyledPageContainer = styled.div`
  min-height: 100vh;
  background: #83a4d4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b6fbff,
    #83a4d4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b6fbff,
    #83a4d4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 15px;
`;

const StyledAddressPage = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
`;

interface Props {
  addresses: Entry[];
  addAddress: (entry: Entry) => void;
  removeAddress: (entry: Entry) => void;
}

const AddressPage: React.StatelessComponent<Props> = props => (
  <StyledPageContainer>
    <MenuBar />
    <StyledAddressPage>
      <AddressList
        addresses={props.addresses}
        removeAddress={props.removeAddress}
      />
      <AddressForm addAddress={props.addAddress} />
    </StyledAddressPage>
  </StyledPageContainer>
);

export default AddressPage;
