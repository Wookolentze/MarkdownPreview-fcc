import React, { Component } from 'react';
import marked from 'marked';
//import doubleWave from '../doubleWave.png';

//const marked = require('marked');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown:''
    }
  this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      markdown: e.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>This is a markdown previewer</h1>
          <h3>by Victor Uni Kilo</h3>
        </header>

        <div className="plate">
            <h2>Markdown Input</h2>
            <br/>
            <form id="form" action="update">
              <label for="inputbox"></label>
              <textarea id="inputbox" type="textarea" onChange={this.handleChange} placeholder="Please Enter Markdown..."/>
            </form>
        </div>

        <div className="plate">
            <h2>Markdown Output</h2>
            <br/>
            <div id="outputbox" dangerouslySetInnerHTML={ {__html: marked(this.state.markdown)} }>
             
            </div>
        </div>
      </div>
    );
  }
}

export default App;

