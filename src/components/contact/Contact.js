import React, { useEffect, useRef } from 'react';
import style from './scss/Contact.module.scss';
import Intro from './Intro';
import mouseAnimate from '../../util/function/mouseAnimate';
import './test.scss';
import Title from './Title';
// import ContactPicture from './ContactPicture';
// <ContactPicture />

const Contact = () => {
	const container = useRef(null);
	const inner = useRef(null);

	useEffect(() => {
		mouseAnimate(container.current, inner.current);
	}, []);

	return (
		<div className={style.ContactContainer}>
			<Title />
			<Intro />
			<div id="container" ref={container}>
				<div id="inner" ref={inner}></div>
			</div>
		</div>
	);
};

export default Contact;
