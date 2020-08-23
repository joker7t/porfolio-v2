import React from 'react';
import style from './scss/Contact.module.scss';
import './test.scss';

const Contact = () => {
	return (
		<div className={style.ContactContainer}>
			<div class="mhn-switch">
				<label for="switch" class="label">
					My Screen
				</label>
				<input id="switch" type="checkbox" class="toggle" />
				<label for="switch" class="switch">
					&nbsp;
				</label>

				<div class="social-media-wrap">
					<div class="social-media">
						<div class="social-dot-wrap">
							<span class="social-dot"></span>
							<span class="social-dot"></span>
							<span class="social-dot"></span>
							<span class="social-dot"></span>
						</div>
						<div class="social-media-lnk-wrap">
							<a href="https://pinterest.com/khadkamhn/" target="_blank" class="social-media-lnk">
								<i class="fa fa-pinterest"></i>
							</a>
							<a href="https://facebook.com/khadkamhn/" target="_blank" class="social-media-lnk">
								<i class="fa fa-facebook"></i>
							</a>
							<a href="https://twitter.com/khadkamhn/" target="_blank" class="social-media-lnk">
								<i class="fa fa-twitter"></i>
							</a>
							<a href="https://youtube.com/" target="_blank" class="social-media-lnk">
								<i class="fa fa-youtube"></i>
							</a>
						</div>
					</div>
					<div class="lamp">
						<div class="lamp-top">
							<div class="back"></div>
							<div class="light"></div>
						</div>
						<div class="lamp-stand"></div>
						<div class="lamp-bottom"></div>
					</div>
					<div class="designer">
						<div class="head">
							<div class="hair">
								<div class="hair-dtl"></div>
							</div>
							<div class="face">
								<div class="face-dtl">
									<div class="eye lt"></div>
									<div class="eye rt"></div>
								</div>
							</div>
							<div class="ears"></div>
							<div class="neck"></div>
						</div>
						<div class="head-phone"></div>
						<div class="laptop">
							<a href="https://codepen.io/khadkamhn/" target="_blank">
								<i class="fa fa-codepen"></i>
							</a>
							<div class="fingers">
								<div class="figers-dtl"></div>
								<div class="figers-dtl"></div>
								<div class="figers-dtl"></div>
								<div class="figers-dtl"></div>
							</div>
							<div class="screen">
								<div class="browser">
									<div class="browser-head clearfix">
										<div class="pull-left">
											<span class="win-btn win-red"></span>
											<span class="win-btn win-yel"></span>
											<span class="win-btn win-gre"></span>
										</div>
									</div>
									<div class="browser-body">
										<div class="codepen-head clearfix">
											<div class="codepen-logo pull-left">
												C <i class="fa fa-codepen"></i> DEPEN
											</div>
											<div class="pull-right">
												<form
													class="codepen-btn"
													action="https://codepen.io/pen/define"
													method="POST"
													target="_blank"
													onclick="this.submit()"
												>
													<i class="fa fa-cloud"></i> Save
													<input
														type="hidden"
														name="data"
														value='{"title":"Mohan Khadka","html":"<img src=\"http://s.gravatar.com/avatar/d20a97c43d5b71cae939da56a5cc8c59?s=128\">\n Hi, It&#39;s me Mohan from Kapilvastu. I&#39;m a web and graphics designer. Designing is my passion and I am still learning and developing my skills on graphics designing and coding. I have been working on various designing projects.","css":"body{\n margin:0;\n padding:50px;\n text-align:center;\n color:#eee;\n background:teal;\n font:300 18px/24px Roboto, sans-serif;\n}\n img{\n margin:auto;\n display:block;\n border-radius:50%;\n border:1px solid #eee;\n padding:10px;\n }","js":" "}'
													/>
												</form>
												<span class="codepen-btn">
													<i class="fa fa-cog"></i> Setting
												</span>
											</div>
										</div>
										<div class="codepen-new-pen clearfix">
											<div class="col">
												<div class="sec">
													<div class="title clearfix">
														<div class="pull-left">
															<span class="codepen-btn">
																<i class="fa fa-cog"></i>
															</span>{' '}
															HTML
														</div>
														<div class="pull-right">
															<span class="codepen-btn">Tidy</span>{' '}
															<span class="codepen-btn">
																<i class="fa fa-times"></i>
															</span>
														</div>
													</div>
												</div>
												<div class="sec">
													<div class="title clearfix">
														<div class="pull-left">
															<span class="codepen-btn">
																<i class="fa fa-cog"></i>
															</span>{' '}
															CSS
														</div>
														<div class="pull-right">
															<span class="codepen-btn">Tidy</span>{' '}
															<span class="codepen-btn">
																<i class="fa fa-times"></i>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col">
												<span class="text">This is my new pen :D</span>
												<img
													src="http://s.gravatar.com/avatar/d20a97c43d5b71cae939da56a5cc8c59?s=50"
													alt="@khadkamhn"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="coffee">
						<div class="vapour">
							<div class="vapour-dtl">
								<div class="line"></div>
								<div class="line"></div>
								<div class="line"></div>
							</div>
							<div class="vapour-dtl">
								<div class="line"></div>
								<div class="line"></div>
								<div class="line"></div>
								<div class="line"></div>
							</div>
							<div class="vapour-dtl">
								<div class="line"></div>
								<div class="line"></div>
								<div class="line"></div>
								<div class="line"></div>
							</div>
						</div>
						<div class="cup"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
