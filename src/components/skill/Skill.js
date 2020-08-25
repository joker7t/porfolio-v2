import React from 'react';
import style from './scss/Skill.module.scss';
import './test.scss';

const Skill = () => {
	return (
		<div className={style.SkillContainer}>
			<div class="big-circles">
				<div class="big-circle"></div>
				<div class="big-circle"></div>
				<div class="big-circle"></div>
			</div>
			<section>
				<div class="slide-wrapper">
					<div class="smallcircles">
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
					</div>
					<div class="cover-wrapper">
						<h1>Toan Nguyen</h1>
						<p>
							<button class="btn">View portfolio</button>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skill;
