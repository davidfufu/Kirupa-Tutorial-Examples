import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

// For this demo, we are using the UMD build of react-router-dom

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.


// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs

const Superhero = function() {
	return(
		<h1>Batman</h1>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			example: "exValue"
		}
	}
	render() {
		return(<Superhero/>);
	}

}

ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>
	), document.getElementById('container')
)


if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) });
}
