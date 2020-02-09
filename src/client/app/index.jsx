import React from 'react';
import {render} from 'react-dom';
import InitiativeTracker from './components/InitiativeTracker'

class App extends React.Component {
  render () {
    return (
        <div>
            <InitiativeTracker/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));