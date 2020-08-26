import React from 'react';
import style from './scss/Skill.module.scss';
import TwoSidesButton from '../../util/components/TwoSidesButton';
import Intro from './Intro';

const Skill = () => {
	return (
		<div className={style.SkillContainer}>
			<div className={style.BigCircles}>
				<div className={style.BigCircle}></div>
				<div className={style.BigCircle}></div>
				<div className={style.BigCircle}></div>
			</div>
			<section>
				<div className={style.SlideWrapper}>
					<div className={style.SmallCircles}>
						<div className={style.SmallCircle}></div>
						<div className={style.SmallCircle}></div>
						<div className={style.SmallCircle}></div>
						<div className={style.SmallCircle}></div>
						<div className={style.SmallCircle}></div>
						<div className={style.SmallCircle}></div>
					</div>
					<div className={style.CoverWrapper}>
						<Intro />
						<p>
							<TwoSidesButton firstSide="hover me" secondSide="click me" />
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skill;
