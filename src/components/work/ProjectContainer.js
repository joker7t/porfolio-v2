import React, { useEffect } from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import Manc1 from '../../resources/images/works/man-city/image-1.png';
import Waves1 from '../../resources/images/works/the-waves/image-1.png';
import Venue1 from '../../resources/images/works/the-venue/image-1.png';
import Natours1 from '../../resources/images/works/natours/image-1.png';
import Trillo1 from '../../resources/images/works/trillo/image-1.png';
import Slack1 from '../../resources/images/works/slack-chat/image-1.png';
import Shopping1 from '../../resources/images/works/shopping/image-1.png';
import './scss/project-container.scss';
import style from './scss/ProjectContainer.module.scss';

const ProjectContainer = () => {
	useEffect(() => {
		Splitting({
			target: '[data-rows], [data-columns], [data-image]',
			by: 'cells',
			image: true,
		});
		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.ProjectContainer} id="project-container">
			<div style={style.Project}>
				<h4 className="title">man city</h4>
				<div className="splitting--slant-slide" data-columns="5">
					<a href="#" target="_blank">
						<div className="splitting__text">View</div>
					</a>
					<img src={Manc1} alt="man city" />
				</div>
			</div>
			<div style={style.Project}>
				<h4 className="title">waves</h4>
				<div className="splitting--slant-slide-2" data-columns="5">
					<a href="#" target="_blank">
						<div className="splitting__text">View</div>
					</a>
					<img src={Waves1} alt="waves" />
				</div>
			</div>
			<div style={style.Project}>
				<h4 className="title">the venue</h4>
				<div className="splitting--slant-blinds" data-columns="6">
					<a href="#" target="_blank">
						<div className="splitting__text">View</div>
					</a>
					<img src={Venue1} alt="the venue" />
				</div>
			</div>
			<div style={style.Project}>
				<h4 className="title">natours</h4>
				<div className="splitting--show-border" data-columns="5" data-rows="5">
					<a href="#" target="_blank">
						<div className="splitting__text">View</div>
					</a>
					<img src={Natours1} alt="natours" />
				</div>
			</div>
			<div style={style.Project}>
				<h4 className="title">trillo</h4>
				<div className="splitting--slide-over" data-columns="2" data-rows="5">
					<a href="#" target="_blank">
						<div className="splitting__text">View</div>
					</a>
					<img src={Trillo1} alt="trillo" />
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
