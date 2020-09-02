import React from 'react';
import style from './scss/Title.module.scss';

const Title = () => {
	return (
		<h1 className={style.Title}>
			<span className={`${style.Letter} ${style.LetterSpecial}`}>A</span>
			<span className={style.Letter}>B</span>
			<span className={style.Letter}>O</span>
			<span className={style.Letter}>U</span>
			<span className={style.Letter}>T</span>
			<span className={style.Space}></span>
			<span className={style.Letter}>M</span>
			<span className={style.Letter}>E</span>
		</h1>
	);
};

export default Title;
