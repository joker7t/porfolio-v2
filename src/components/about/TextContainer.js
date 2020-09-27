import React, { useEffect, useRef } from 'react';
import style from './scss/TextContainer.module.scss';
import { TweenMax } from 'gsap';
import Splitting from 'splitting';

const TextContainer = () => {
	const textRef = useRef(null);

	useEffect(() => {
		const chars = Splitting({
			target: textRef.current,
		});
		showText(chars);
		//eslint-disable-next-line
	}, []);

	const showText = (chars) => {
		textRef.current.style.opacity = 1;
		const randomPosition = 150;
		function random(min, max) {
			return Math.random() * (max - min) + min;
		}

		chars[0].chars.forEach((char, i) => {
			TweenMax.from(char, 1, {
				opacity: 0,
				x: random(-randomPosition, randomPosition),
				y: random(-randomPosition, randomPosition),
				z: random(-randomPosition, randomPosition),
				scale: 0.1,
				delay: i * 0.01,
				yoyo: true,
			});
		});
	};

	return (
		<div className={style.TextContainer}>
			<p ref={textRef} style={{ opacity: 0 }}>
				I’m Toan Nguyen - a Web developer in Axon Active Vietnam.
				<br />
				I have over 2 years of developing web applications. I am working as a Full-stack developer for projects
				about fintech and e-commerce. My experience includes MySql, Postgres, MongoDB, Java, JSF, Spring,
				Javascript, Node JS, React JS, Nginx, Docker. I love to make websites not only have an attractive and
				clear design but also have a high performance.
				<br />
				Besides technologies, I believe the way to create products also plays a major role in quality. that's
				why Kanban and Scrum process mean a lot to me. Familiar with them helps me bring the highest quality
				products with full requirements to customers.
				<br />
				Last but not least, I am a self-learner. Keep updating is the principle that I never forget. I am
				interested in learning new things to upgrade myself day by day. Facing and going over the impediments is
				my destination.
			</p>
		</div>
	);
};

export default TextContainer;
