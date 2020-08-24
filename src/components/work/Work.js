import React from 'react';
import style from './scss/Work.module.scss';
import './test.scss';

const Work = () => {
	return (
		<div className={style.WorkContainer}>
			<div className={style.Text}>
				<h1 className={style.Neon} data-text="work">
					work
				</h1>
				<div className={style.Gradient}></div>
				<div className={style.Spotlight}></div>
			</div>
		</div>
	);
};

export default Work;
