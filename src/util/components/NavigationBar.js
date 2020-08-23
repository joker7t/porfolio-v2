import React, { useRef, useEffect, useState } from 'react';
import style from './scss/NavigationBar.module.scss';
import { TweenMax } from 'gsap';
import { Link, Redirect } from 'react-router-dom';
import DelayLink from '../DelayLink';
import { TimelineMax, Power2, gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const NavigationBar = (props) => {
	const loaderRef = useRef(null);
	const line1Ref = useRef(null);
	const line2Ref = useRef(null);
	const line3Ref = useRef(null);
	const line4Ref = useRef(null);
	const [isPowerActive, setIsPowerActive] = useState(false);

	const data = [
		{
			name: 'Home',
			url: '/',
			icon: {},
		},
		{
			name: 'About',
			url: '/about',
			icon: {},
		},
		{
			name: 'Skill',
			url: '/skill',
			icon: {},
		},
		{
			name: 'Work',
			url: '/work',
			icon: {},
		},
		{
			name: 'Contact',
			url: '/contact',
			icon: {},
		},
	];

	useEffect(() => {
		TweenMax.to(line1Ref.current, 1, { left: '100%' });
		TweenMax.to(line2Ref.current, 1, { top: '100%', delay: 0.25 });
		TweenMax.to(line3Ref.current, 1, { right: '100%', delay: 0.5 });
		TweenMax.to(line4Ref.current, 1, { bottom: '100%', delay: 0.75 });
		setIsPowerActive(true);
	}, []);

	const showItems = () =>
		data.map((item, i) => (
			<li>
				<DelayLink
					key={i}
					delay={400}
					className={style.Item}
					to={item.url}
					onDelayStart={(e) => handleClick(e, item)}
				>
					<i class="icon-reorder"></i> {item.name}
				</DelayLink>
			</li>
		));

	const transition = () => {
		var tl = new TimelineMax();

		tl.to(loaderRef.current, 0.2, { opacity: 1 })
			.to(CSSRulePlugin.getRule('.app:before'), 0.2, { cssRule: { top: '50%' }, ease: Power2.easeOut }, 'close')
			.to(CSSRulePlugin.getRule('.app:after'), 0.2, { cssRule: { bottom: '50%' }, ease: Power2.easeOut }, 'close')

			.to(
				CSSRulePlugin.getRule('.app:before'),
				0.2,
				{ cssRule: { top: '0%' }, ease: Power2.easeOut },
				'+=1.5',
				'open'
			)
			.to(
				CSSRulePlugin.getRule('.app:after'),
				0.2,
				{ cssRule: { bottom: '0%' }, ease: Power2.easeOut },
				'-=0.2',
				'open'
			)
			.to(loaderRef.current, 0.2, { opacity: 0 }, '-=0.2');

		//eslint-disable-next-line
	};

	const handleClick = (e, item) => {
		transition();

		// setTimeout(function () {
		// 	window.location = item.url;
		// }, 500);
		console.log(props);
	};

	return (
		<div>
			<div class="loader" ref={loaderRef}>
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
				<div class="bar4"></div>
				<div class="bar5"></div>
				<div class="bar6"></div>
			</div>
			<div className={style.NavigationBar}>
				<ul className={style.Container}>
					<li className={style.PowerButton}>
						<div className={`${style.Power} ${isPowerActive ? style.Active : ''}`}>
							<span ref={line1Ref}></span>
							<span ref={line2Ref}></span>
							<span ref={line3Ref}></span>
							<span ref={line4Ref}></span>
							Neon button
						</div>
					</li>
					{showItems()}
					<li className={style.Black}></li>
				</ul>
			</div>
		</div>
	);
};

export default NavigationBar;
