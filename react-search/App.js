// This component is the core of your React program.
// This handles the overall state of the system, and is the parent of all components.

import React from 'react';
import './App.css';
import SearchForm from './SearchForm'
import ViewContainer from './View/ViewContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {resultInfo: []};
  }

  // This function handles the 
  handleChange(e){
    this.setState({resultInfo: e});
    console.log('change ');
  }

  // All React classes have a render() class.
  // In here you define how the component should look when being turned to HTML.
  render() {
    return (
      <div className="App">
        <SearchForm
          onChange={this.handleChange}
        />
        <ViewContainer resultInfo={this.state.resultInfo} />
      </div>
    );
  }
}

export default App;
