import React, { useEffect } from 'react';
import style from './scss/ProjectContainer.module.scss';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import './test.scss';

const ProjectContainer = () => {
	useEffect(() => {
		Splitting({
			target: '[data-rows], [data-columns], [data-image]',
			by: 'cells',
			image: true,
		});
		//eslint-disable-next-line
	}, []);

	return (
		<div className="test">
			<section>
				<h4 class="title">Slant &amp; Slide</h4>
				<div class="splitting--slant-slide" data-columns="5">
					<div class="splitting__text">Hello 👋</div>
					<img src="https://images.unsplash.com/photo-1562263588-35193ae8ecbb" />
				</div>
			</section>
			<section>
				<h4 class="title">Slant &amp; Slide 2</h4>
				<div class="splitting--slant-slide-2" data-columns="5">
					<div class="splitting__text">Hello 👋</div>
					<img src="https://images.unsplash.com/photo-1562263588-35193ae8ecbb" />
				</div>
			</section>
			<section>
				<h4 class="title">Slanted Blinds</h4>
				<div class="splitting--slant-blinds" data-columns="6">
					<div class="splitting__text">Hello 👋</div>
					<img src="https://images.unsplash.com/photo-1562263588-35193ae8ecbb" />
				</div>
			</section>
			<section>
				<h4 class="title">Show Border</h4>
				<div class="splitting--show-border" data-columns="5" data-rows="5">
					<div class="splitting__text">Hello 👋</div>
					<img src="https://images.unsplash.com/photo-1562263588-35193ae8ecbb" />
				</div>
			</section>
			<section>
				<h4 class="title">Slide Over</h4>
				<div class="splitting--slide-over" data-columns="2" data-rows="5">
					<div class="splitting__text">Hello 👋</div>
					<img src="https://images.unsplash.com/photo-1562263588-35193ae8ecbb" />
				</div>
			</section>
		</div>
	);
};

export default ProjectContainer;
