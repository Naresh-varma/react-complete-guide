// import logo from './logo.svg';
import React from 'react';
import Person from './Person/Person';
import Styled from 'styled-components';
import './App.css';

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

class App extends React.Component {
  state = {
    persons: [
      { id: 'adaa', name: 'Abhilash', age: 23 },
      { id: 'afwrgwr', name: 'Naresh', age: 24 },
      { id: 'wfwrgw', name: 'Sandeep', age: 25 },
      { id: 'efwrfw', name: 'Pavan', age: 26 }
    ],
    counter: 0,
    showPersons: false,
  };
  logThePersonState = () => {
    console.log(this.state);
  }
  switchHandler = (newName) => {
    console.log('Button clicked');
    // const person = this.state.persons.find((person) => person.name === newName);
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Naresh Varma', age: 24 },
        { name: 'Sandeep Varma', age: 25 },
        { name: 'Pavan Varma', age: 26 }
      ]
    });
  }
  updateValue = (event, id) => {
    const persons = [...this.state.persons];
    const person = persons.find((person) => person.id === id);
    person.name = event.target.value;
    this.setState({
      persons
    })
  }
  deleteUserHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons } );
  }
  toggleHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (<Person
                key={person.id}
                name={person.name}
                age={person.age}
                deleteUserHandler={this.deleteUserHandler.bind(this, index)}
                updateValue={(event) => this.updateValue(event, person.id)}
                switchHandler={this.switchHandler.bind(this, person.name)}/>)
            })
          } 
        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }
    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');
    return (
        <div className="App">
          <h1>Hi I am a react learner</h1>
          <p className={classes.join(' ')}>Yeah this is working</p>
          <StyledButton
            alt= {this.state.showPersons}
            key='1'
            onClick={this.toggleHandler}>Toggle
          </StyledButton>
          <StyledButton onClick={this.logThePersonState}>Get the State</StyledButton>
          {persons} 
        </div>
    );
  }
}



// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Abhilash', age: 23 },
//       { name: 'Naresh', age: 24 },
//       { name: 'Sandeep', age: 25 },
//       { name: 'Pavan', age: 26 }
//     ],
//     counter: 0,
//   })
//   const [state2, set2ndState] = useState({
//     islogedIn: true,
//     counter: 0,
//   })
//   const logThePersonState = () => {
//     console.log(personState, state2);
//   }
//   const switchHandler = () => {
//     console.log('Button clicked');
//     setPersonState({
//       persons: [
//         { name: 'Abhilash Varma', age: 23 },
//         { name: 'Naresh Varma', age: 24 },
//         { name: 'Sandeep Varma', age: 25 },
//         { name: 'Pavan Varma', age: 26 }
//       ]
//     });
//   }
//   return (
//     <div className="App">
//       <h1>Hi I am a react leaner</h1>
//       <p>Yeah this is working</p>
//       <button onClick={switchHandler}>Switch</button>
//       <button onClick={logThePersonState}>Get the State</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} ><Person name={personState.persons[3].name} age={personState.persons[3].age}>Check this</Person></Person>
//     </div>
//   )
// }

export default App;
