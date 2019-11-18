// This component is responsible for showing the search results
// In a future version it will be responsible for changing between the results overview
// and a detailed view. 

import React, { Component } from 'react'
import './view.css'
import SearchView from './SearchView'

class ViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { resultInfo : []}
  }

  render() {
    return (
      <div className={'view-container'}>
        <SearchView resultInfo={this.props.resultInfo} />
      </div>
    )
  }
}

export default ViewContainer;
