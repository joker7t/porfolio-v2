import React, { useEffect, useRef } from 'react';
import style from './scss/TextContainer.module.scss';
import './test.scss';
import { TweenMax, gsap } from 'gsap';
import SplitText from './splitting-text.js';

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
				delay: i * 0.02,
				yoyo: true,
				repeat: -1,
				repeatDelay: 10,
			});
		});
	}, []);

	return (
		<div className={style.TextContainer}>
			<div className="box">
				<p className="split" ref={textRef}>
					Animation is the process of creating the illusion of motion and shape change by means of the rapid
					display of a sequence of static images that minimally differ from each other. The illusion—as in
					motion pictures in general—is thought to rely on the phi phenomenon. Animators are artists who
					specialize in the creation of animation.
				</p>
			</div>
		</div>
	);
};

export default TextContainer;
