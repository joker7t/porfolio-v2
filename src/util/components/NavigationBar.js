import React from 'react';
import style from './scss/NavigationBar.module.scss';

const NavigationBar = () => {
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
					<i class="icon-reorder"></i> nguon
				</li>
				{showItems()}
				<li className={style.Black}></li>
			</ul>
		</div>
	);
};

export default NavigationBar;
