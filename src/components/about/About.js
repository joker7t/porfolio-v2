import React from 'react';
import style from './scss/About.module.scss';
import Title from './Title';
import AboutContainer from './AboutContainer';
import ScrollBar from '../../util/components/ScrollBar';

const About = () => {
	return (
		<div className={style.AboutContainer}>
			<ScrollBar />
			<Title />
			<AboutContainer />
		</div>
	);
};

export default About;
