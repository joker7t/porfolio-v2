import React, { useRef, useEffect, useState } from 'react';
import style from './scss/NavigationBar.module.scss';
import DelayLink from '../DelayLink';
import { TweenMax } from 'gsap';
import './test.scss';

const NavigationBar = ({ transition }) => {
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
		TweenMax.to(line1Ref.current, 1, { left: '100%', opacity: 1, repeat: -1 });
		TweenMax.to(line2Ref.current, 1, { top: '100%', delay: 0.25, opacity: 1, repeat: -1 });
		TweenMax.to(line3Ref.current, 1, { right: '100%', delay: 0.5, opacity: 1, repeat: -1 });
		TweenMax.to(line4Ref.current, 1, { bottom: '100%', delay: 0.75, opacity: 1, repeat: -1 });
		setTimeout(() => {
			setIsPowerActive(true);
		}, 1000);
		//eslint-disable-next-line
	}, []);

	const showItems = () =>
		data.map((item, i) => (
			<li>
				<DelayLink key={i} delay={1700} className={style.Item} to={item.url} onDelayStart={transition}>
					<i class="icon-reorder"></i> {item.name}
				</DelayLink>
			</li>
		));

	return (
		<div className={style.NavigationBar}>
			<div className={style.PowerButton}>
				<div className={`${style.Power} ${isPowerActive ? style.Active : ''}`}>
					<span ref={line1Ref}></span>
					<span ref={line2Ref}></span>
					<span ref={line3Ref}></span>
					<span ref={line4Ref}></span>
					<div className={style.Logo}>TN</div>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<div class="home-icon">
							<div class="roof">
								<div class="roof-edge"></div>
							</div>
							<div class="front"></div>
						</div>
					</li>
					<li>
						<div class="about-icon">
							<div class="head">
								<div class="eyes"></div>
								<div class="beard"></div>
							</div>
						</div>
					</li>
					<li>
						<div class="work-icon">
							<div class="paper"></div>
							<div class="lines"></div>
							<div class="lines"></div>
							<div class="lines"></div>
						</div>
					</li>
					<li>
						<div class="mail-icon">
							<div class="mail-base">
								<div class="mail-top"></div>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavigationBar;
