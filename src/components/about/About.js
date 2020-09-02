import React, { useEffect } from 'react';
import style from './scss/About.module.scss';
import { TweenMax, Power1 } from 'gsap';
import Avatar from '../../resources/images/avatar2.JPG';
import './test.scss';
import Title from './Title';

const About = () => {
	useEffect(() => {}, []);

	return (
		<div className={style.AboutContainer}>
			<Title />
		</div>
	);
};

export default About;
