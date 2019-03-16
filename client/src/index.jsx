import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      assets: []
    }
  }

  componentDidMount() {
  axios.get('/assets')
    .then((data) => {
      console.log(data)
      this.setState({
        assets: data.data
      })
    })
    .catch((err) => {
      console.log('err', err);
    });
  }

  render () {
    return (<div>
      <h1 style={{color: 'mediumseagreen'}}>Tokenize</h1>
      <List assets={this.state.assets}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));