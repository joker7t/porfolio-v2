import React, { useEffect, useState } from 'react';
import style from './scss/NameCard.module.scss';

const NameCard = () => {
	const [isAnimate, setIsAnimate] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsAnimate(true);
		}, 500);
		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.NameCard}>
			<div className={`${isAnimate ? style.Animate : ''}`}>
				<div className={style.Container}>
					<span className={style.Line1}>I'M</span>
					<span className={style.LineAdditional}>A</span>
					<span className={style.Line2}>WEB</span>
					<span className={style.Line3}>DEVELOPER</span>
				</div>
				<div className={style.Name}>TOAN NGUYEN</div>
			</div>
		</div>
	);
};

export default NameCard;
