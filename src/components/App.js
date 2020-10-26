import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'; // type version is there too
import Nav from './Nav';
import Timeline from './Timeline';
import About from './About';
import './styles/App.scss';

function App() {
	return (
		<BrowserRouter>
			<Nav/>
			<Route exact path="/zelda-timeline">
				<Redirect to="/zelda-timeline/home"/>
			</Route>
			<Switch>
				<Route
					exact path={"/zelda-timeline/home"}
					render={props => (
						<Timeline/>
					)}
				/>
				<Route
					exact path={"/zelda-timeline/about"}
					render={props => (
						<About/>
					)}
				/>
			</Switch>
			<footer>
				<a href="https://shawnyama.github.io/">Shawn Yama</a> - 2020 
			</footer>
   		 </BrowserRouter>
  	);
}

export default App;
