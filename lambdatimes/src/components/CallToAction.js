import React, { Component } from 'react'
import styled from 'styled-components';

const CallToActionWrapper = styled.div`
  height: 80vh;
`;

export default class CallToAction extends Component {
  render() {
    return (
      <CallToActionWrapper>
        <h2>Log in above to read our great articles!!!</h2>
      </CallToActionWrapper>
    )
  }
}