import React from 'react';
import style from './scss/About.module.scss';
import Title from './Title';
import AboutContainer from './AboutContainer';

const About = () => {
	return (
		<div className={style.AboutContainer}>
			<div className={style.ProgressBar}></div>
			<Title />
			<AboutContainer />
		</div>
	);
};

export default About;
