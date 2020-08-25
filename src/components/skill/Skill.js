import React from 'react';
import style from './scss/Skill.module.scss';
import './test.scss';

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
						<h1>Toan Nguyen</h1>
						<p>
							<button className="btn">View portfolio</button>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skill;
