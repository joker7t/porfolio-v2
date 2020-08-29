import React from 'react';
import style from './scss/Work.module.scss';
import Intro from './Intro';
import ProjectContainer from './ProjectContainer';

const Work = () => {
	return (
		<div className={style.WorkContainer}>
			<Intro />
			<ProjectContainer />
		</div>
	);
};

export default Work;
