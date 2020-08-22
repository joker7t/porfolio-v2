import React, { useRef, useEffect, useState } from 'react';
import style from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import NavigationBar from './util/components/NavigationBar';

function App() {
	const cursorRef = useRef(null);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const editCursor = (e) => {
			const { clientX: x, clientY: y } = e;
			cursorRef.current.style.left = x + 'px';
			cursorRef.current.style.top = y + 'px';
		};
		window.addEventListener('mousemove', editCursor);

		setTimeout(() => {
			setIsLoading(false);
		}, 4000);

		//eslint-disable-next-line
	}, []);

	return (
		<div style={{ cursor: 'none' }}>
			<div class="splash">
				<div class="splash_logo">TN</div>
				<div class="splash_svg">
					<svg width="100%" height="100%">
						<rect width="100%" height="100%" />
					</svg>
				</div>
				<div class="splash_minimize">
					<svg width="100%" height="100%">
						<rect width="100%" height="100%" />
					</svg>
				</div>
			</div>
			<div class="text">
				{isLoading ? null : (
					<div>
						<Router>
							<NavigationBar />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/skill" component={Skill} />
								<Route exact path="/work" component={Work} />
								<Route exact path="/contact" component={Contact} />
								<Redirect from="*" to="/" />
							</Switch>
						</Router>
					</div>
				)}
			</div>
			<div className={style.Cursor} ref={cursorRef}></div>
		</div>
	);
}

export default App;
