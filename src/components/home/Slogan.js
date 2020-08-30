import React, { useRef, useEffect } from 'react';
import style from './scss/Slogan.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMouseClass } from '../../actions/mouseAction';

const Slogan = ({ setMouseClass }) => {
	const sloganRef = useRef(null);

	useEffect(() => {
		sloganRef.current.onmouseover = (e) => {
			setMouseClass('zoom');
		};
		sloganRef.current.onmouseleave = (e) => {
			setMouseClass();
		};

		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.Wrapper} ref={sloganRef}>
			<h1>
				<span style={{ whiteSpace: 'nowrap' }}>It's time to</span> create{' '}
				<span style={{ whiteSpace: 'nowrap' }}>something new</span>
			</h1>
		</div>
	);
};

Slogan.propTypes = {
	setMouseClass: PropTypes.func.isRequired,
};

export default connect(null, { setMouseClass })(Slogan);
