import React, { useState, useEffect, useRef } from 'react';
import style from './scss/ContactContent.module.scss';
import { Row, Col, Form, Button } from 'react-bootstrap';
import FadeButton from '../../util/components/FadeButton';
import axios from 'axios';

const ContactContent = () => {
	const EMAIL_HOST_API =
		'https://cors-anywhere.herokuapp.com/https://waves-joker7nbt.herokuapp.com/api/porfolio/send-message';

	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [notifyMessage, setNotifyMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const handleChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
		setErrorMessage(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(EMAIL_HOST_API, {
				name: contact.name,
				email: contact.email,
				message: contact.message,
			});
			setContact({
				name: '',
				email: '',
				message: '',
			});
			setNotifyMessage(true);
			setTimeout(() => {
				setNotifyMessage(false);
			}, 3000);
		} catch (error) {
			setErrorMessage(true);
		}
	};

	return (
		<div className={style.ContactContent}>
			<div className={style.ContactForm}>
				<Form className="mx-auto" onSubmit={handleSubmit}>
					<Form.Control
						type="name"
						required
						placeholder="Your name"
						name="name"
						value={contact.name}
						onChange={handleChange}
					/>
					<Form.Control
						type="email"
						required
						placeholder="Enter email"
						name="email"
						value={contact.email}
						onChange={handleChange}
					/>
					<Form.Control
						as="textarea"
						required
						placeholder="Enter message"
						rows="5"
						name="message"
						value={contact.message}
						onChange={handleChange}
					/>
					{notifyMessage ? <div className={style.NotifyMessage}>Send successfully</div> : null}
					{errorMessage ? <div className={style.ErrorMessage}>Send failed</div> : null}
					<FadeButton content="SEND" type="submit" />
				</Form>
			</div>
			<div className={style.ContactMap}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6062971.908096524!2d103.24658773287804!3d15.542648774724496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1597077948186!5m2!1svi!2s"
					width="100%"
					height="100%"
					frameBorder="0"
					allowFullScreen={true}
					aria-hidden={false}
					tabIndex="0"
					title="map"
					style={{ filter: 'brightness(70%)' }}
					className="d-none d-md-block"
				></iframe>
			</div>
		</div>
	);
};

export default ContactContent;
