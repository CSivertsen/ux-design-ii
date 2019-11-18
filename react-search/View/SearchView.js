// This component produced the view of the search results.

import React, { Component } from 'react'
import './view.css'

class SearchView extends Component {

  // The
  constructor(props) {
    super(props)
    this.state = {
      resultInfo: []
    }
  }

  // This component does do much more than just showing the search results
  // Notice that some of the search results might not have images. That is why they don't render.
  render() {
    if(!this.props.resultInfo){
      this.props.resultInfo = []
    }
    console.log(this.props.resultInfo)
    return (
      <div className={'search-results'}>
      <ul>
      {this.props.resultInfo.map(element => (
        <li className="imgContainer">
              {element.has_image && <img src={element.image_thumbnail} width="400" alt="something" className="thumbnail"/>}
        </li>
       ))}
      </ul>
      </div>
    )
  }
}

export default SearchView;
