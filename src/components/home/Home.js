import React from 'react';
import style from './scss/Home.module.scss';
import { Row, Col } from 'react-bootstrap';
import NameCard from './NameCard';

const Home = () => {
	return (
		<div className={style.Home}>
			<Row style={{ height: '100%' }}>
				<Col></Col>
				<Col>
					<NameCard />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
