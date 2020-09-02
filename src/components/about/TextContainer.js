import React, { useEffect, useRef } from 'react';
import style from './scss/TextContainer.module.scss';
import { TweenMax, gsap } from 'gsap';
import SplitText from './SplitText.min.js';

gsap.registerPlugin(SplitText);
const TextContainer = () => {
	const textRef = useRef(null);

	useEffect(() => {
		var text = textRef.current;

		var split = new SplitText(text);

		function random(min, max) {
			return Math.random() * (max - min) + min;
		}

		split.chars.forEach((char, i) => {
			TweenMax.from(char, 2.5, {
				opacity: 0,
				x: random(-500, 500),
				y: random(-500, 500),
				z: random(-500, 500),
				scale: 0.1,
				delay: i * 0.015,
				yoyo: true
			});
		});
	}, []);

	return (
		<div className={style.TextContainer}>
			<p ref={textRef}>
				I’m Toan Nguyen - a Web developer in Axon Active Vietnam. <br />
					I have over 3 years of developing web applications. I am working as a Full-stack developer for projects about fintech and e-commerce. My experience includes MySql, Postgres, MongoDB, Java, JSF, Spring, Javascript, React, Nginx. I also have experience in testing.<br />
					Besides that, I am familiar with Kanban & Scrum process. More important, I’m confident, hard-working and interested in learning new things.
			</p>
		</div>
	);
};

export default TextContainer;
