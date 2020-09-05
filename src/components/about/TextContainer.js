import React, { useEffect, useRef } from 'react';
import style from './scss/TextContainer.module.scss';
import { TweenMax } from 'gsap';
import Splitting from 'splitting';

const TextContainer = () => {
	const textRef = useRef(null);

	useEffect(() => {
		showText();
		//eslint-disable-next-line
	}, []);

	const showText = () => {
		const chars = Splitting({
			target: textRef.current,
		});

		function random(min, max) {
			return Math.random() * (max - min) + min;
		}

		chars[0].chars.forEach((char, i) => {
			TweenMax.from(char, 1.5, {
				opacity: 0,
				x: random(-500, 500),
				y: random(-500, 500),
				z: random(-500, 500),
				scale: 0.1,
				delay: i * 0.01,
				yoyo: true,
			});
		});
	};

	return (
		<div className={style.TextContainer}>
			<p ref={textRef}>
				I’m Toan Nguyen - a Web developer in Axon Active Vietnam. <br />
				I have over 2 years of developing web applications. I am working as a Full-stack developer for projects
				about fintech and e-commerce. My experience includes MySql, Postgres, MongoDB, Java, JSF, Spring,
				Javascript, Node JS, React JS, Nginx, Docker. I love to make websites not only have an attractive and
				clear design but also have a high performance.
				<br />
				Besides technologies, I believe the way to create products also plays a major role in quality.
				<br />
				Besides that, I am familiar with Kanban & Scrum process. More important, I’m confident, hard-working and
				interested in learning new things.
				<br />
				Last but not least, keep updating is the principle that I never forget. I am interested in learning new
				things
			</p>
		</div>
	);
};

export default TextContainer;
