import React from 'react';
import style from './scss/Intro.module.scss';

const Intro = () => {
	return (
		<div className={style.Text}>
			<h1 className={style.Neon} data-text="my work">
				my work
			</h1>
			<div className={style.Gradient}></div>
			<div className={style.Spotlight}></div>
		</div>
	);
};

export default Intro;
