import React, { useEffect } from 'react';
import style from './scss/Contact.module.scss';
import Intro from './Intro';
import Title from './Title';
import ContactContent from './ContactContent';
import ScrollBar from '../../util/components/ScrollBar';

const Contact = () => {
	useEffect(() => {}, []);

	return (
		<div className={style.ContactContainer}>
			<ScrollBar />
			<Title />
			<Intro />
			<ContactContent />
		</div>
	);
};

export default Contact;
