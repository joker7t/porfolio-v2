import React from 'react';
import style from './scss/FadeButton.module.scss';

const FadeButton = ({ content, onClick, ref }) => {
	return (
		<button className={style.FadeButton} onClick={onClick} ref={ref}>
			<div>{content}</div>
		</button>
	);
};

export default FadeButton;
