// import React from 'react';
import React from 'react';
import Style from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
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
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputELe = React.createRef();
  }
  // special value by React
  static contextType = AuthContext;

  componentDidMount() {
    // document.querySelector('input').focus();
    this.inputELe.current.focus();
    console.log('Authenticated value from context:', this.context.isAuthenticated);
  }
  render () {
    return (
      <StyleDiv>
        <AuthContext.Consumer>
            { (context) => <p>{ context.isAuthenticated ? 'Authenticated..': 'Please log in'}</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.deleteUserHandler}>Hi I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(ele) => { this.inputELe = ele }}
          ref={this.inputELe}
          onChange={this.props.updateValue}
          value={this.props.name}/>
      </StyleDiv>
    )
  }
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  deleteUserHandler: PropTypes.func,
}
export default Person;