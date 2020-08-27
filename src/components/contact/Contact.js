import React, { useEffect } from 'react';
import style from './scss/Contact.module.scss';
import Intro from './Intro';
// import ContactPicture from './ContactPicture';
// <ContactPicture />

const Contact = () => {
	return (
		<div className={style.ContactContainer}>
			<Intro />
		</div>
	);
};

export default Contact;
