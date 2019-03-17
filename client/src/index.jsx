import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      assets: [],
      networth: 0
    }
  }

  componentDidMount() {
  axios.get('/assets')
    .then((data) => {
      console.log(data)
      this.setState({
        assets: data.data,
        networth: data.data.reduce((acc, curr) => {
          return acc + (curr.price * curr.quantity)
        }, 0)
      })
    })
    .catch((err) => {
      console.log('err', err);
    });
  }

  render () {
    return (<div>
      <h1 style={{color: '#46df98', display: 'flex', justifyContent: 'center'}}>Your Portfolio</h1>
      <List assets={this.state.assets}/>
      <h3 style={{color: '#46df98', display: 'flex', justifyContent: 'center'}}>Net current position: {'$' + this.state.networth}</h3>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));