import React from 'react';
import style from './scss/Work.module.scss';
import Intro from './Intro';
import ProjectContainer from './ProjectContainer';
import ScrollBar from '../../util/components/ScrollBar';

const Work = ({ workImages }) => {
	return (
		<div className={style.WorkContainer}>
			<ScrollBar />
			<div className={style.ProgressBar}></div>
			<Intro />
			<ProjectContainer workImages={workImages} />
		</div>
	);
};

export default Work;
