import React from 'react';
import style from './scss/FadeButton.module.scss';

const FadeButton = ({ content, onClick, type }) => {
	return (
		<div>
			{type === 'submit' ? (
				<button className={style.FadeButton} onClick={onClick} type="submit">
					<div>{content}</div>
				</button>
			) : (
				<button className={style.FadeButton} onClick={onClick}>
					<div>{content}</div>
				</button>
			)}
		</div>
	);
};

export default FadeButton;
