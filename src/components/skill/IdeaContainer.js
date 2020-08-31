import React from 'react';
import { ReactComponent as SpeedDesign } from '../../resources/images/skill/speed.svg';
import { ReactComponent as ResponsiveDesign } from '../../resources/images/skill/computer.svg';
import { ReactComponent as Design } from '../../resources/images/skill/data.svg';
import { ReactComponent as PowerDeisgn } from '../../resources/images/skill/startup.svg';
import { Row, Col } from 'react-bootstrap';
import style from './scss/IdeaContainer.module.scss';

const IdeaContainer = () => {
	return (
		<Row className={style.IdeaContainer}>
			<Col xs={6} sm={3} className={style.Idea}>
				<SpeedDesign />
				<div>I love to make website with a high performance</div>
			</Col>
			<Col xs={6} sm={3} className={style.Idea}>
				<ResponsiveDesign />
				<div>My websites render on various resolutions, screen sizes, and browsers</div>
			</Col>
			<Col xs={6} sm={3} className={style.Idea}>
				<Design />
				<div>Clear, user-friendly design and navigation are the main things in my websites</div>
			</Col>
			<Col xs={6} sm={3} className={style.Idea}>
				<PowerDeisgn />
				<div>Dynamic wesite is one of my highest priorities</div>
			</Col>
		</Row>
	);
};

export default IdeaContainer;
