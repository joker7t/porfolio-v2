import React from 'react';
import style from './scss/About.module.scss';
import Title from './Title';
import AboutContainer from './AboutContainer';
import ScrollBar from '../../util/components/ScrollBar';

const About = () => {
	return (
		<div className={style.About}>
			<ScrollBar />
			<div className={style.AboutContainer}>
				<Title />
				<AboutContainer />
			</div>
		</div>
	);
};

export default About;
