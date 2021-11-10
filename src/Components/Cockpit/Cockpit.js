import React, { useEffect, useRef, useContext } from 'react';
import Styled from 'styled-components';
import AuthContext from '../../context/auth-context'
import './Cockpit.css'

const StyledButton = Styled.button`
  background-color: ${props => props.alt ? 'red': 'green' };
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('[cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Save data to cloud');
    // }, 1000)
    toggleBtnRef.current.click();

    return () => {
      console.log('[Cockpit.js]  cleanUp work in useEffect');
    }
  }, []) // empty array componentDidMount

  useEffect(() => {
    console.log('[cockpit.js] useEffect 2nd');
    return () => {
      console.log('[Cockpit.js] cleanUp work in 2nd useEffect');
    }
  })
  
  const classes = [];
    if (props.personLength <= 2) classes.push('red');
    if (props.personLength <= 1) classes.push('bold');
  return (
    <div>
      <h1>{ props.title }</h1>
      <p className={classes.join(' ')}>Yeah this is working</p>
      <StyledButton
        ref={toggleBtnRef}
        alt= {props.showPersons ? 'true': null }
        key='1'
        onClick={props.toggleHandler}>Toggle Person
      </StyledButton>
      <StyledButton onClick={props.logThePersonState}>Get the State</StyledButton>
      <StyledButton onClick={authContext.login}> { authContext.isAuthenticated ? 'Logout' : 'Login'}</StyledButton>
    </div>
  )
};

export default React.memo(Cockpit);