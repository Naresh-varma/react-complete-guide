// import logo from './logo.svg';
import React from 'react';
import Persons from '../Components/Persons/Persons'
import CockPit from '../Components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'
import './App.css';

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
    showCockpit: true,
    isAuthenticated: false,
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
  loginHandler = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return { msg: 'Hi this a snapshot'};
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
    console.log(snapshot.msg);
  }
  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons = { this.state.persons }
          deleteUserHandler = { this.deleteUserHandler }
          updateValue = { this.updateValue }
          switchHandler = { this.switchHandler }
          isAuthenticated = { this.state.isAuthenticated }/>
      )
    }
    return (
        <div className="App">
          <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit })}}>Toggle cockPit</button>
          <AuthContext.Provider value={{
            isAuthenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }}>
            { this.state.showCockpit ? (<CockPit
              title = { this.props.title }
              personLength = { this.state.persons.length }
              showPersons = { this.state.showPersons }
              toggleHandler = { this.toggleHandler }
              logThePersonState = { this.logThePersonState }
              login={this.loginHandler}
              isAuthenticated = { this.state.isAuthenticated}
            />) : null }
            {persons} 
          </AuthContext.Provider>
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
