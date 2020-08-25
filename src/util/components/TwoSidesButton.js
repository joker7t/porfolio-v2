import React from 'react';
import style from './scss/TwoSidesButton.module.scss';

const TwoSidesButton = ({ firstSide, secondSide }) => {
	return (
		<button className={style.TwoSidesButton} data-hover={secondSide}>
			<div>{firstSide}</div>
		</button>
	);
};

export default TwoSidesButton;
