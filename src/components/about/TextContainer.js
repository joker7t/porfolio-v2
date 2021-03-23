import React from 'react';
import style from './scss/TextContainer.module.scss';

const TextContainer = () => {
	return (
		<div className={style.TextContainer}>
			<p>
				I’m Toan Nguyen - a software developer in HitaTek.
				<br />
				I have 3 years of developing web applications. I am working as a Full-stack developer for project
				about crawling data system base on microservices. My experience includes MySql, MongoDB, Java, Spring,
				Javascript, Node JS, React JS, Vue JS, Docker, Kubernetes. I love to make products not only have an attractive and
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
