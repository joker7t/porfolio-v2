import React, { useEffect } from 'react';
import style from './scss/Contact.module.scss';
import Intro from './Intro';
import Title from './Title';
// import ContactPicture from './ContactPicture';
// <ContactPicture />

const Contact = () => {


	useEffect(() => {
	}, []);

	return (
		<div className={style.ContactContainer}>
			<Title />
			<Intro />
		</div>
	);
};

export default Contact;
