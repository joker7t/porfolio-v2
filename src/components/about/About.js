import React, { useEffect, useRef } from 'react';
import style from './scss/About.module.scss';
import './test.scss';

const About = () => {
	return (
		<div className={style.AboutContainer}>
			<div className={style.Wrapper}>
				<div className={style.Text}>ABOUT ME</div>
			</div>
		</div>
	);
};

export default About;
