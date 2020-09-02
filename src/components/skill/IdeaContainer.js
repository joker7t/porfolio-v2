import React, { useRef, useEffect } from 'react';
import { ReactComponent as SpeedDesign } from '../../resources/images/skill/speed.svg';
import { ReactComponent as ResponsiveDesign } from '../../resources/images/skill/computer.svg';
import { ReactComponent as Design } from '../../resources/images/skill/data.svg';
import { ReactComponent as PowerDeisgn } from '../../resources/images/skill/startup.svg';
import { Row, Col } from 'react-bootstrap';
import style from './scss/IdeaContainer.module.scss';

const IdeaContainer = ({ setMouseClass }) => {
	const ideaRefs = useRef([]);

	useEffect(() => {
		ideaRefs.current.forEach((ideaRef, i) => {
			ideaRef.onmouseover = (e) => {
				setMouseClass('preview');
			};
			ideaRef.onmouseleave = (e) => {
				setMouseClass();
			};
		});

		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.IdeaContainer}>
			<Row>
				<Col xs={6} sm={3} className={style.Idea} ref={(el) => (ideaRefs.current[0] = el)}>
					<SpeedDesign />
					<div>I love to make website with a high performance</div>
				</Col>
				<Col xs={6} sm={3} className={style.Idea} ref={(el) => (ideaRefs.current[1] = el)}>
					<ResponsiveDesign />
					<div>My websites render on various resolutions, screen sizes, and browsers</div>
				</Col>
				<Col xs={6} sm={3} className={style.Idea} ref={(el) => (ideaRefs.current[2] = el)}>
					<Design />
					<div>Clear, user-friendly design and navigation are the main things in my websites</div>
				</Col>
				<Col xs={6} sm={3} className={style.Idea} ref={(el) => (ideaRefs.current[3] = el)}>
					<PowerDeisgn />
					<div>Dynamic wesite is one of my highest priorities</div>
				</Col>
			</Row>
		</div>
	);
};

export default IdeaContainer;
