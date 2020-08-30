import React, { useEffect } from 'react';
import style from './scss/ProjectContainer.module.scss';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import './test.scss';
import Manc1 from '../../resources/images/works/man-city/image-1.png';
import Waves1 from '../../resources/images/works/the-waves/image-1.png';
import Venue1 from '../../resources/images/works/the-venue/image-1.png';
import Natours1 from '../../resources/images/works/natours/image-1.png';
import Trillo1 from '../../resources/images/works/trillo/image-1.png';
import Slack1 from '../../resources/images/works/slack-chat/image-1.png';
import Shopping1 from '../../resources/images/works/shopping/image-1.png';

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
		<div className="test">
			<section>
				<h4 className="title">man city</h4>
				<div className="splitting--slant-slide" data-columns="5">
					<div className="splitting__text">View</div>
					<img src={Manc1} alt="man city" />
				</div>
			</section>
			<section>
				<h4 className="title">waves</h4>
				<div className="splitting--slant-slide-2" data-columns="5">
					<div className="splitting__text">View</div>
					<img src={Waves1} alt="waves" />
				</div>
			</section>
			<section>
				<h4 className="title">the venue</h4>
				<div className="splitting--slant-blinds" data-columns="6">
					<div className="splitting__text">View</div>
					<img src={Venue1} alt="the venue" />
				</div>
			</section>
			<section>
				<h4 className="title">natours</h4>
				<div className="splitting--show-border" data-columns="5" data-rows="5">
					<div className="splitting__text">View</div>
					<img src={Natours1} alt="natours" />
				</div>
			</section>
			<section>
				<h4 className="title">trillo</h4>
				<div className="splitting--slide-over" data-columns="2" data-rows="5">
					<div className="splitting__text">View</div>
					<img src={Trillo1} alt="trillo" />
				</div>
			</section>
		</div>
	);
};

export default ProjectContainer;
