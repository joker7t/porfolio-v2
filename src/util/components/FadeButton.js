import React from 'react';
import style from './scss/FadeButton.module.scss';

const FadeButton = ({ content, onClick }) => {
	return (
		<button className={style.FadeButton} onClick={onClick}>
			<div>{content}</div>
		</button>
	);
};

export default FadeButton;
