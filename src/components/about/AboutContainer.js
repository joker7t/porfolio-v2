import React, { useEffect, useRef } from 'react';
import style from './scss/AboutContainer.module.scss';
import mouseAnimate from '../../util/function/mouseAnimate';
import Avatar from '../../resources/images/avatar2.JPG';
import TextContainer from './TextContainer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMouseClass } from '../../actions/mouseAction';

const AboutContainer = ({ setMouseClass }) => {
	const container = useRef(null);
	const inner = useRef(null);

	useEffect(() => {
		mouseAnimate(container.current, inner.current);

		container.current.onmouseover = (e) => {
			setMouseClass('default');
		};
		container.current.onmouseleave = (e) => {
			setMouseClass();
		};
	}, []);

	return (
		<div className={style.AboutContainer}>
			<div className={style.PictureContainer} ref={container}>
				<div className={style.PictureInner} ref={inner}>
					<figure>
						<img src={Avatar} alt="Toan Nguyen" />
					</figure>
				</div>
			</div>
			<div className={style.TextContainer}>
				<TextContainer />
			</div>
		</div>
	);
};

AboutContainer.propTypes = {
	setMouseClass: PropTypes.func.isRequired,
};

export default connect(null, { setMouseClass })(AboutContainer);
