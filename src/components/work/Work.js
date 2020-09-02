import React, { useRef, useEffect } from 'react';
import style from './scss/Work.module.scss';
import Intro from './Intro';
import ProjectContainer from './ProjectContainer';

const Work = ({ workImages }) => {
	const workRef = useRef(null);
	const progressBarRef = useRef(null);

	useEffect(() => {
		workRef.current.onscroll = () => {
			const scroll = workRef.current.scrollTop;
			const dh = workRef.current.scrollHeight;
			const wh = window.innerHeight;
			//maximum is 85% because of header
			const scrollPercent = (scroll / (dh - wh)) * 90;
			progressBarRef.current.style.height = `${scrollPercent}%`;
		};
		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.WorkContainer} ref={workRef}>
			<div className={style.ProgressBar} ref={progressBarRef}></div>
			<Intro />
			<ProjectContainer workImages={workImages} />
		</div>
	);
};

export default Work;
