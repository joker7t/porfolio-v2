import React, { useRef, useEffect, useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import style from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import NavigationBar from './util/components/NavigationBar';
import Loading from './util/components/Loading';
import { TimelineMax, Power2 } from 'gsap';
import Mouse from './util/components/Mouse';
import Manc1 from './resources/images/works/man-city/image-1.png';
import Waves1 from './resources/images/works/the-waves/image-1.png';
import Venue1 from './resources/images/works/the-venue/image-1.png';
import Natours1 from './resources/images/works/natours/image-1.png';
import Trillo1 from './resources/images/works/trillo/image-1.png';
import Slack1 from './resources/images/works/slack-chat/image-1.png';
import Shopping1 from './resources/images/works/shopping/image-1.png';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

function App() {
	const loaderRef = useRef(null);
	const contentRef = useRef(null);
	const coverAboveRef = useRef(null);
	const coverUnderRef = useRef(null);

	const workImages = {
		manc: Manc1,
		waves: Waves1,
		venue: Venue1,
		natours: Natours1,
		trillo: Trillo1,
		slack: Slack1,
		shopping: Shopping1,
	};

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 4000);

		//eslint-disable-next-line
	}, []);

	const transition = () => {
		var tl = new TimelineMax();

		tl.to(loaderRef.current, 0.2, { opacity: 1 })
			.to(coverAboveRef.current, 0.2, { top: '51%', ease: Power2.easeOut }, 'close')
			.to(coverUnderRef.current, 0.2, { bottom: '51%', ease: Power2.easeOut }, 'close')
			.to(coverAboveRef.current, 0.2, { top: '0%', ease: Power2.easeOut }, '+=1.5', 'open')
			.to(coverUnderRef.current, 0.2, { bottom: '0%', ease: Power2.easeOut }, '-=0.2', 'open')
			.to(loaderRef.current, 0.2, { opacity: 0 }, '-=0.2');
	};

	return (
		<Provider store={store}>
			<div>
				<div className={style.Splash}>
					<div className={style.SplashLogo}>TN</div>
					<div className={style.SplashSvg}>
						<svg width="100%" height="100%">
							<rect width="100%" height="100%" />
						</svg>
					</div>
					<div className={style.SplashMinimize}>
						<svg width="100%" height="100%">
							<rect width="100%" height="100%" />
						</svg>
					</div>
				</div>
				<div className={style.Container}>
					<div className={style.CoverAbove} ref={coverAboveRef} />
					<div className={style.CoverUnder} ref={coverUnderRef} />

					{isLoading ? null : (
						<div>
							<Router>
								<Loading loaderRef={loaderRef} />
								<NavigationBar transition={transition} />
								<div className={style.App}>
									<div className={style.AppContent} ref={contentRef}>
										<Switch>
											<Route exact path="/" component={Home} delay={200} />
											<Route exact path="/about" component={About} />
											<Route exact path="/skill" component={Skill} />
											<Route
												exact
												path="/work"
												component={() => <Work workImages={workImages} />}
											/>
											<Route exact path="/contact" component={Contact} />
											<Redirect from="*" to="/" />
										</Switch>
									</div>
								</div>
							</Router>
						</div>
					)}
				</div>
				<Mouse />
			</div>
		</Provider>
	);
}

export default App;
