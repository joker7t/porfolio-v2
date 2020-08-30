import React, { useRef, useEffect, useState } from 'react';
import style from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import NavigationBar from './util/components/NavigationBar';
import Loading from './util/components/Loading';
import { TimelineMax, Power2, gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import Mouse from './util/components/Mouse';

gsap.registerPlugin(CSSRulePlugin);

function App() {
	const loaderRef = useRef(null);

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
			.to(
				CSSRulePlugin.getRule(`#appContent:before`),
				0.2,
				{ cssRule: { top: '50%' }, ease: Power2.easeOut },
				'close'
			)
			.to(
				CSSRulePlugin.getRule(`#appContent:after`),
				0.2,
				{ cssRule: { bottom: '50%' }, ease: Power2.easeOut },
				'close'
			)

			.to(
				CSSRulePlugin.getRule(`#appContent:before`),
				0.2,
				{ cssRule: { top: '0%' }, ease: Power2.easeOut },
				'+=1.5',
				'open'
			)
			.to(
				CSSRulePlugin.getRule(`#appContent:after`),
				0.2,
				{ cssRule: { bottom: '0%' }, ease: Power2.easeOut },
				'-=0.2',
				'open'
			)
			.to(loaderRef.current, 0.2, { opacity: 0 }, '-=0.2');
	};

	return (
		<div style={{ cursor: 'none' }}>
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
				{isLoading ? null : (
					<div>
						<Router>
							<div className={style.App}>
								<div className={style.NavBar}>
									<NavigationBar transition={transition} />
								</div>
								<div className={style.AppContent} id="appContent">
									<Loading loaderRef={loaderRef} />
									<Switch>
										<Route exact path="/" component={Home} delay={200} />
										<Route exact path="/about" component={About} />
										<Route exact path="/skill" component={Skill} />
										<Route exact path="/work" component={Work} />
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
	);
}

export default App;
