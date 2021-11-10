import React from 'react';
import Person from './Person/Person';

class Persons extends React.PureComponent {
  // constructor() {
  //   console.log('[Persons.js] constructor');
  // }
  // static  getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons) return true;
  //   else return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }
  
  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }
   
  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map((person, index) => 
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          deleteUserHandler={() => this.props.deleteUserHandler(index)}
          updateValue={(event) => this.props.updateValue(event, person.id)}
          switchHandler={() => this.props.switchHandler(person.name)}
          isAuth = { this.props.isAuthenticated }/>
      )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Persons.js] componentDidUpdate');
  }
}

export default Persons;