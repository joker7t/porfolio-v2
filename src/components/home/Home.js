import React from 'react';
import style from './scss/Home.module.scss';
import { Row, Col } from 'react-bootstrap';
import NameCard from './NameCard';
import Intro from './Intro';
import Loading from '../loading/Loading';

const Home = () => {
	return (
		<div className={style.Home}>
			<Row style={{ height: '100%' }}>
				<Col>
					<Intro />
				</Col>
				<Col>
					<NameCard />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
