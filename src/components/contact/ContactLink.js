import React from 'react';
import style from './scss/ContactLink.module.scss';

const ContactLink = () => {
	return (
		<div className={style.ContactLink}>
			<div className={style.ContactIconContainer}>
				<div className={style.ContactIcon}>
					<a target="blank" href="https://www.linkedin.com/in/toan-nguyen-0b2aa41aa/">
						<i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
					</a>
				</div>
				<div className={style.ContactIcon}>
					<a target="blank" href="https://www.facebook.com/toan.nguyen131196">
						<i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
					</a>
				</div>
				<div className={style.ContactIcon}>
					<a target="blank" href="https://www.instagram.com/toan.ng96/?hl=vi">
						<i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
					</a>
				</div>
			</div>

			<div className={style.ContactText}>
				<span style={{ letterSpacing: '3px' }}>TOAN NGUYEN </span>
				<span className={style.ContactTextHighlight}>@ 2020</span>
			</div>
		</div>
	);
};

export default ContactLink;
