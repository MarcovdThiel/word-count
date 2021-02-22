import React from 'react';
import WordCount from './components/WordCount';
import {Route, Switch} from 'react-router-dom'

export interface AppProps {
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <WordCount/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
