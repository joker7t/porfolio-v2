import React from 'react';
import style from './scss/Home.module.scss';
import NameCard from './NameCard';
import Slogan from './Slogan';

const Home = () => {
	return (
		<div className={style.Home}>
			<Slogan />
			<NameCard />
		</div>
	);
};

export default Home;
