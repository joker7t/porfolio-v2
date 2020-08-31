import React from 'react';
import style from './scss/Skill.module.scss';
import Intro from './Intro';
import TwoSidesButton from '../../util/components/TwoSidesButton';

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
						<div>
							<Intro />
							<TwoSidesButton firstSide="my skill map" secondSide="view" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skill;
