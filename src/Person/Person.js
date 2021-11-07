// import React from 'react';
import Style from 'styled-components';
import './Person.css'

const StyleDiv = Style.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0px 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (max-width: 250px) {
    width: 60%;
  }
`;

const Person = (props) => {
  return (
    <StyleDiv>
      <p onClick={props.deleteUserHandler}>Hi I am {props.name} and I am {props.age} years old</p>
      <input type="text" onChange={props.updateValue} value={props.name}/>
      <p>{props.children}</p>
    </StyleDiv>
  )
}

export default Person;