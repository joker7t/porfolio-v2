import React from 'react';
import './scss/ContactPicture.scss';

const ContactPicture = () => {
	return (
		<div className="contact-picture">
			<div class="social-media-wrap">
				<div class="social-media">
					<div class="social-dot-wrap">
						<span class="social-dot"></span>
						<span class="social-dot"></span>
						<span class="social-dot"></span>
						<span class="social-dot"></span>
					</div>
					<div class="social-media-lnk-wrap">
						<a href="https://pinterest.com/khadkamhn/" target="_blank" class="social-media-lnk">
							<i class="fa fa-pinterest"></i>
						</a>
						<a href="https://facebook.com/khadkamhn/" target="_blank" class="social-media-lnk">
							<i class="fa fa-facebook"></i>
						</a>
						<a href="https://twitter.com/khadkamhn/" target="_blank" class="social-media-lnk">
							<i class="fa fa-twitter"></i>
						</a>
						<a href="https://youtube.com/" target="_blank" class="social-media-lnk">
							<i class="fa fa-youtube"></i>
						</a>
					</div>
				</div>
				<div class="lamp">
					<div class="lamp-top">
						<div class="back"></div>
						<div class="light"></div>
					</div>
					<div class="lamp-stand"></div>
					<div class="lamp-bottom"></div>
				</div>
				<div class="designer">
					<div class="head">
						<div class="hair">
							<div class="hair-dtl"></div>
						</div>
						<div class="face">
							<div class="face-dtl">
								<div class="eye lt"></div>
								<div class="eye rt"></div>
							</div>
						</div>
						<div class="ears"></div>
						<div class="neck"></div>
					</div>
					<div class="head-phone"></div>
					<div class="laptop">
						<a href="https://codepen.io/khadkamhn/" target="_blank">
							<i class="fa fa-codepen"></i>
						</a>
						<div class="fingers">
							<div class="figers-dtl"></div>
							<div class="figers-dtl"></div>
							<div class="figers-dtl"></div>
							<div class="figers-dtl"></div>
						</div>
					</div>
				</div>
				<div class="coffee">
					<div class="vapour">
						<div class="vapour-dtl">
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
						</div>
						<div class="vapour-dtl">
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
						</div>
						<div class="vapour-dtl">
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
						</div>
					</div>
					<div class="cup"></div>
				</div>
			</div>
		</div>
	);
};

export default ContactPicture;
