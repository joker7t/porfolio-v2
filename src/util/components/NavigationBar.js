import React, { useRef, useEffect, useState } from 'react';
import style from './scss/NavigationBar.module.scss';
import { TimelineMax } from 'gsap';

const NavigationBar = () => {
	const line1Ref = useRef(null);
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
		const tl = new TimelineMax();
		// tl.to(line1Ref.current, 1, { left: '100%' });

		// setTimeout(() => {
		// 	setIsPowerActive(true);
		// }, 1000);
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
						<span></span>
						<span></span>
						<span></span>
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
