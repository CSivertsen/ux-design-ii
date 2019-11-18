// This component generates a textfield and a submit button.
// When the submit button is pressed, it also handles the actual search in the API.
// It is usually based on this tutorial: https://reactjs.org/docs/forms.html

import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  resultInfo: []};
    // You need to "bind" the form inputs to the component.
    // This is explained in detail on the tutorial page mention above. 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This is called every time something is typed in the text field
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // This is called every time the submit button is pressed.
  handleSubmit(event) {
    this.doSearch(this.state.value)
    //console.log(event)
    //alert('A search term was submitted: ' + this.state.value);
    //this.setState({value: event.target.value});
    event.preventDefault();
  }

  // This function does the actual call to the SMK API
  doSearch = (searchTerm) => {
    console.log("Searching")
    fetch('https://api.smk.dk/api/v1/art/search/?keys=' + searchTerm)
     .then(response => response.json())
     .then(data => {
       console.log('img', data);
       if (data.items[0]){
          this.setState({
            resultInfo: Object.values(data.items)
          })
            this.props.onChange(this.state.resultInfo)
        }
      })
    }

  //Decides how the field and button looks in the HTML
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
