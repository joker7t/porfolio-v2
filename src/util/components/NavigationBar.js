import React, { useRef, useEffect, useState } from 'react';
import style from './scss/NavigationBar.module.scss';
import { TimelineMax, TweenMax } from 'gsap';

const NavigationBar = () => {
	const line1Ref = useRef(null);
	const line2Ref = useRef(null);
	const line3Ref = useRef(null);
	const line4Ref = useRef(null);
	const [isPowerActive, setIsPowerActive] = useState(false);

	const data = [
		{
			url: 'aa',
			icon: {},
		},
		{
			url: 'bb',
			icon: {},
		},
		{
			url: 'cc',
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
				<a class={style.Item} href="">
					<i class="icon-reorder"></i> {item.url}
				</a>
			</li>
		));

	return (
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
	);
};

export default NavigationBar;
