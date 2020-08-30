import React, { useRef, useEffect } from 'react';
import style from './scss/Slogan.module.scss';

const Slogan = () => {
	const sloganRef = useRef(null);

	useEffect(() => {
		sloganRef.current.onmouseover = (e) => {
			// buildMouseClass('zoom');
		};
		sloganRef.current.onmouseleave = (e) => {
			// buildMouseClass();
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

export default Slogan;
