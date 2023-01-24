import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      nameError: '',
      passError: '',
    };
  }
  valid() {
    if (! this.state.name.includes('@') && this.state.password.length < 5) {
      this.setState({ nameError: 'Invalid Name', passError: 'Password should be more than 5 character'});
       
    }
    else if (! this.state.name.includes('@')) {
      this.setState({ nameError: 'Invalid Name'});
       
    }
    else if (this.state.password.length < 5) {
      this.setState({passError: 'Password should be more than 5 character'});
       
    }
    else{
      return true;
    }
  }
  submit() {
    this.setState({ nameError: '', passError: ''})
    if (this.valid()) {
      alert('Form has been submitted');
    }
  }
  render() {
    return (
      <div>
        <h1>Form Validation</h1>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <p style={{ color: 'red', fontsize: '14px' }}>{this.state.nameError}</p>
        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <p style={{ color: 'red', fontsize: '14px' }}>{this.state.passError}</p>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}
export default App;
