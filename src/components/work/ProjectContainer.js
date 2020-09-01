import React, { useEffect, useRef } from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import './scss/project-container.scss';
import style from './scss/ProjectContainer.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMouseClass } from '../../actions/mouseAction';

const ProjectContainer = ({ setMouseClass, workImages }) => {
	const projectRefs = useRef([]);
	const linkRefs = useRef([]);

	useEffect(() => {
		Splitting({
			target: '[data-rows], [data-columns], [data-image]',
			by: 'cells',
			image: true,
		});

		projectRefs.current.forEach((projectRef, i) => {
			projectRef.onmouseover = (e) => {
				setMouseClass('preview');
			};
			projectRef.onmouseleave = (e) => {
				setMouseClass();
			};
		});

		linkRefs.current.forEach((linkRef, i) => {
			linkRef.onmouseover = (e) => {
				e.stopPropagation();
				setMouseClass('click');
			};
			linkRef.onmouseleave = (e) => {
				e.stopPropagation();
				setMouseClass();
			};
		});
		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.ProjectContainer} id="project-container">
			<div className={style.Project} ref={(el) => (projectRefs.current[0] = el)}>
				<div className="splitting--slant-slide" data-columns="5">
					<a href="https://mcfc-joker7nbt.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="splitting__text" ref={(el) => (linkRefs.current[0] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.manc} alt="man city" />
				</div>
			</div>
			<div className={style.Project} ref={(el) => (projectRefs.current[1] = el)}>
				<div className="splitting--slant-slide-2" data-columns="5">
					<a href="https://waves-joker7nbt.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<div className="splitting__text" ref={(el) => (linkRefs.current[1] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.waves} alt="waves" />
				</div>
			</div>
			<div className={style.Project} ref={(el) => (projectRefs.current[2] = el)}>
				<div className="splitting--slant-blinds" data-columns="6">
					<a href="https://thevenue-joker7nbt.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="splitting__text" ref={(el) => (linkRefs.current[2] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.venue} alt="the venue" />
				</div>
			</div>
			<div className={style.Project} ref={(el) => (projectRefs.current[3] = el)}>
				<div className="splitting--show-border" data-columns="5" data-rows="5">
					<a href="https://natours-joker7nbt.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="splitting__text" ref={(el) => (linkRefs.current[3] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.natours} alt="natours" />
				</div>
			</div>
			<div className={style.Project} ref={(el) => (projectRefs.current[4] = el)}>
				<div className="splitting--slide-over" data-columns="2" data-rows="5">
					<a href="https://trillo-joker7nbt.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="splitting__text" ref={(el) => (linkRefs.current[4] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.trillo} alt="trillo" />
				</div>
			</div>
			<div className={style.Project} ref={(el) => (projectRefs.current[5] = el)}>
				<div className="splitting--slide-over-2" data-columns="5" data-rows="2">
					<a href="https://slackchat-joker7nbt.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="splitting__text" ref={(el) => (linkRefs.current[5] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.slack} alt="slack chat" />
				</div>
			</div>
			<div className={style.Project} ref={(el) => (projectRefs.current[6] = el)}>
				<div className="splitting--rotate" data-rows="5">
					<a
						href="https://shoppingwebsite-template-joker7nbt.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="splitting__text" ref={(el) => (linkRefs.current[6] = el)}>
							VIEW
						</div>
					</a>
					<img src={workImages.shopping} alt="shopping" />
				</div>
			</div>
		</div>
	);
};

ProjectContainer.propTypes = {
	setMouseClass: PropTypes.func.isRequired,
};

export default connect(null, { setMouseClass })(ProjectContainer);
