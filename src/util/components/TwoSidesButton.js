import React from 'react';
import style from './scss/TwoSidesButton.module.scss';

const TwoSidesButton = ({ firstSide, secondSide, onClick }) => {
	return (
		<button className={style.TwoSidesButton} data-hover={secondSide} onClick={onClick}>
			<div>{firstSide}</div>
		</button>
	);
};

export default TwoSidesButton;
