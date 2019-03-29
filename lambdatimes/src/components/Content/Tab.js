import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabWrapper = styled.div `

  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  ${ ({
    tab,
    selectedTab}) => {
      return tab === selectedTab ? `
      background-color: #fff;
      color: #333;
      border: 2 px solid #333;
    ` : null
    }}
`;

    const Tab = props => {
        /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
        return (
            <TabWrapper
                tab={props.tab}
                selectedTab={props.selectedTab}
                onClick={() => {/* Replace this dummy click handler function with your selectTabHandler function from props you'll need to pass the `tab` in as an argument to this handler. */
                props.selectedTabHandler(props.tab)
            }}>
                {props
                    .tab
                    .toUpperCase()}
            </TabWrapper>
        );
    };

    // Make sure you include PropTypes on your props.

    export default Tab;

    Tab.propTypes = {
        tab: PropTypes.string,
        selectedTab: PropTypes.string,
        selectedTabHandler: PropTypes.func
    }