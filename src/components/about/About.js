import React, { useEffect, useRef } from 'react';
import style from './scss/About.module.scss';
import Title from './Title';
import AboutContainer from './AboutContainer';

const About = () => {
	const aboutRef = useRef(null);
	const progressBarRef = useRef(null);

	useEffect(() => {
		aboutRef.current.onscroll = () => {
			const scroll = aboutRef.current.scrollTop;
			const dh = aboutRef.current.scrollHeight;
			const wh = window.innerHeight;
			//maximum is 85% because of header
			const scrollPercent = (scroll / (dh - wh)) * 90;
			progressBarRef.current.style.height = `${scrollPercent}%`;
		};
		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.AboutContainer} ref={aboutRef}>
			<div className={style.ProgressBar} ref={progressBarRef}></div>
			<Title />
			<AboutContainer />
		</div>
	);
};

export default About;
