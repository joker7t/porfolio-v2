import React, { useEffect } from 'react';
import style from './scss/Background.module.scss';

const Background = () => {
	useEffect(() => {}, []);

	return (
		<div className={style.Background}>
			<div className={style.Lines}>
				<div className={style.Line}></div>
				<div className={style.Line}></div>
				<div className={style.Line}></div>
			</div>
		</div>
	);
};

export default Background;
