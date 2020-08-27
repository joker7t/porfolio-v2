import React, { useRef, useEffect, useState } from 'react';
import style from './scss/NavigationBar.module.scss';
import DelayLink from '../DelayLink';
import { TimelineMax } from 'gsap';

const NavigationBar = ({ transition }) => {
	const line1Ref = useRef(null);
	const line2Ref = useRef(null);
	const line3Ref = useRef(null);
	const line4Ref = useRef(null);
	const [isPowerActive, setIsPowerActive] = useState(false);

	const data = [
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
		const tl = new TimelineMax();
		tl.to(line1Ref.current, 0.5, { left: '100%', opacity: 1, repeat: -1 }, 0)
			.to(line2Ref.current, 0.5, { top: '100%', opacity: 1, repeat: -1 }, 0)
			.to(line3Ref.current, 0.5, { right: '100%', opacity: 1, repeat: -1 }, 0)
			.to(line4Ref.current, 0.5, { bottom: '100%', opacity: 1, repeat: -1 }, 0);
		setTimeout(() => {
			tl.clear();
			setIsPowerActive(true);
		}, 2000);
		//eslint-disable-next-line
	}, []);

	const showItems = () =>
		data.map((item, i) => (
			<DelayLink key={i} delay={1700} className={style.Item} to={item.url} onDelayStart={transition}>
				<li data-text={item.name}>
					<div className={style.ItemIcon}></div>
				</li>
			</DelayLink>
		));

	return (
		<div className={style.NavigationBar}>
			<DelayLink delay={1700} to="/" onDelayStart={transition}>
				<div className={style.PowerButton}>
					<div className={`${style.Power} ${isPowerActive ? style.Active : ''}`}>
						<span ref={line1Ref}></span>
						<span ref={line2Ref}></span>
						<span ref={line3Ref}></span>
						<span ref={line4Ref}></span>

						<div className={style.Logo}>TN</div>
					</div>
				</div>
			</DelayLink>
			<nav className={style.NavigationBarItem}>
				<ul>{showItems()}</ul>
			</nav>
		</div>
	);
};

export default NavigationBar;
