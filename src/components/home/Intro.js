import React, { useEffect, useRef } from 'react';
import { TimelineMax, Back } from 'gsap';
import './test.scss';

const Intro = () => {
	const data = {
		line1: 'hello there!',
		line2: 'welcome to',
		line3: 'my site',
	};

	const line1Ref = useRef([]);
	const line2Ref = useRef([]);
	const line3Ref = useRef([]);

	useEffect(() => {
		var title1 = new TimelineMax();
		title1.to('.button', 0, { visibility: 'hidden', opacity: 0 });
		title1.staggerFromTo(
			line1Ref.current,
			0.5,
			{ ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
			{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
			0.05
		);
		title1.staggerFromTo(
			line2Ref.current,
			0.5,
			{ ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
			{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
			0.05
		);
		title1.staggerFromTo(
			line3Ref.current,
			0.5,
			{ ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
			{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
			0.05
		);
		// }
	}, []);

	const showLine1 = () =>
		[...data.line1].map((character, i) => (
			<span key={i} ref={(el) => (line1Ref.current[i] = el)}>
				{character}
			</span>
		));

	const showLine2 = () =>
		[...data.line2].map((character, i) => (
			<span key={i} ref={(el) => (line2Ref.current[i] = el)}>
				{character}
			</span>
		));

	const showLine3 = () =>
		[...data.line3].map((character, i) => (
			<span key={i} ref={(el) => (line3Ref.current[i] = el)}>
				{character}
			</span>
		));

	return (
		<div style={{ background: 'white' }}>
			<section class="container1">
				<h1>
					<span class="title">{showLine1()}</span>
					<span class="title">{showLine2()}</span>
					<span class="title">{showLine3()}</span>
				</h1>

				<div class="button">restart</div>
			</section>
		</div>
	);
};

export default Intro;
