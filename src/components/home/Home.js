import React from 'react';
import style from './scss/Home.module.scss';
import NameCard from './NameCard';
import Slogan from './Slogan';
import Background from './Background';

const Home = () => {
	return (
		<div className={style.Home}>
			<Background />
			<Slogan />
			<NameCard />
		</div>
	);
};

export default Home;
