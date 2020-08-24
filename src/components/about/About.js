import React, { useEffect, useRef } from 'react';
import style from './scss/About.module.scss';
import { TweenMax } from 'gsap';
import './test.scss';

const About = () => {
	return (
		<div className={style.AboutContainer}>
			<div class="big-circles">
				<div class="big-circle"></div>
				<div class="big-circle"></div>
				<div class="big-circle"></div>
			</div>
			<section id="home">
				<div class="slide-wrapper">
					<div class="smallcircles">
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
						<div class="small-circle"></div>
					</div>
					<div class="cover-wrapper text-center" id="home-content">
						<div class="cover-wrapper__inner">
							<div class="cover-wrapper__container">
								<h1>Maciej Siwanowicz</h1>
								<p>
									<button
										class="btn btn-cta btn-cta__green text-uppercase trigger"
										data-toggle="closed"
									>
										View portfolio
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
				<section class="portfolio-wrapper" id="portfolio">
					<div class="cover-wrapper text-center" id="home">
						<div class="cover-wrapper__inner">
							<div class="cover-wrapper__container">
								<div class="container">
									<div class="row">
										<div class="col-sm-12">
											<h1 class="test-uppercase">Portfolio</h1>
											<p>
												<button
													class="btn btn-cta btn-cta__green text-uppercase trigger"
													data-toggle="opened"
												>
													Back home
												</button>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
};

export default About;
