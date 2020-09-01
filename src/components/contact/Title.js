import React, { useEffect, useRef } from 'react';
import { TimelineMax, Bounce, Power3 } from 'gsap';
import style from './scss/Title.module.scss';

const Title = () => {
	const titleTextLeftRef = useRef(null);
	const titleTextRightRef = useRef(null);
	const titleEmailRefs = useRef([]);

	useEffect(() => {
		const tl = new TimelineMax();
		tl.from(titleTextLeftRef.current, 1, { marginRight: '50%', opacity: 0, ease: Bounce.easeOut }, 0)
			.from(
				titleTextRightRef.current,
				1,
				{
					marginLeft: '50%',
					opacity: 0,
					ease: Bounce.easeOut,
				},
				0
			)
			.staggerFrom(
				titleEmailRefs.current,
				0.5,
				{
					transform: 'translateY(-200%',
					opacity: 0,
					ease: Power3.easeIn,
				},
				0.1
			);

		//eslint-disable-next-line
	}, []);
	return (
		<div className={style.Title}>
			<span className={style.Text} ref={titleTextLeftRef}>
				CON
			</span>
			<span className={style.Text} ref={titleTextRightRef}>
				TACT
			</span>

			<span className={style.Email}>
				<span ref={(el) => (titleEmailRefs.current[0] = el)}>j</span>
				<span ref={(el) => (titleEmailRefs.current[1] = el)}>o</span>
				<span ref={(el) => (titleEmailRefs.current[2] = el)}>k</span>
				<span ref={(el) => (titleEmailRefs.current[3] = el)}>e</span>
				<span ref={(el) => (titleEmailRefs.current[4] = el)}>r</span>
				<span ref={(el) => (titleEmailRefs.current[5] = el)}>7</span>
				<span ref={(el) => (titleEmailRefs.current[6] = el)}>n</span>
				<span ref={(el) => (titleEmailRefs.current[7] = el)}>b</span>
				<span ref={(el) => (titleEmailRefs.current[8] = el)}>t</span>
				<span ref={(el) => (titleEmailRefs.current[9] = el)}>@</span>
				<span ref={(el) => (titleEmailRefs.current[10] = el)}>g</span>
				<span ref={(el) => (titleEmailRefs.current[11] = el)}>m</span>
				<span ref={(el) => (titleEmailRefs.current[12] = el)}>a</span>
				<span ref={(el) => (titleEmailRefs.current[13] = el)}>i</span>
				<span ref={(el) => (titleEmailRefs.current[14] = el)}>l</span>
				<span ref={(el) => (titleEmailRefs.current[15] = el)}>.</span>
				<span ref={(el) => (titleEmailRefs.current[16] = el)}>c</span>
				<span ref={(el) => (titleEmailRefs.current[17] = el)}>o</span>
				<span ref={(el) => (titleEmailRefs.current[18] = el)}>m</span>
			</span>
		</div>
	);
};

export default Title;
