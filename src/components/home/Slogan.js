import React from 'react';
import style from './scss/Slogan.module.scss';

const Slogan = () => {
	return (
		<div className={style.Wrapper}>
			<h1>
				<span style={{ whiteSpace: 'nowrap' }}>It's time to</span> create{' '}
				<span style={{ whiteSpace: 'nowrap' }}>something new</span>
			</h1>
		</div>
	);
};

export default Slogan;
