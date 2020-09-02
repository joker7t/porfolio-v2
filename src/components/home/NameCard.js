import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMouseClass } from '../../actions/mouseAction';
import style from './scss/NameCard.module.scss';

const NameCard = ({ setMouseClass }) => {
	const nameCardRef = useRef(null);
	const [isAnimate, setIsAnimate] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsAnimate(true);
		}, 500);

		nameCardRef.current.onmouseover = (e) => {
			setMouseClass('welcome');
		};
		nameCardRef.current.onmouseleave = (e) => {
			setMouseClass();
		};
		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.NameCard} ref={nameCardRef}>
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

NameCard.propTypes = {
	setMouseClass: PropTypes.func.isRequired,
};

export default connect(null, { setMouseClass })(NameCard);
