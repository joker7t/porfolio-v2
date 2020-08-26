import React from 'react';
import style from './scss/Intro.module.scss';

export default function Intro() {
	return (
		<div className={style.Text}>
			<h1 className={style.Neon} data-text="work">
				work
			</h1>
			<div className={style.Gradient}></div>
			<div className={style.Spotlight}></div>
		</div>
	);
}
