import React, { useEffect, useState } from 'react';
import style from './scss/NameCard.module.scss';

const NameCard = () => {
	const [isAnimate, setIsAnimate] = useState(false);

	useEffect(() => {
		function animate() {
			setIsAnimate(true);
		}
		animate();
	}, []);

	return (
		<div>
			<div className={`${isAnimate ? style.Animate : ''}`} style={{ display: 'inline-block' }}>
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
