import React, { useRef, useEffect, useState } from 'react';
import style from './scss/NavigationBar.module.scss';
import DelayLink from '../DelayLink';
import { TimelineMax } from 'gsap';
import { ReactComponent as AboutIcon } from '../../resources/images/nav-bar/about.svg';
import { ReactComponent as ContactIcon } from '../../resources/images/nav-bar/contact.svg';
import { ReactComponent as SkillIcon } from '../../resources/images/nav-bar/skill.svg';
import { ReactComponent as WorkIcon } from '../../resources/images/nav-bar/work.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMouseClass } from '../../actions/mouseAction';

const NavigationBar = ({ transition, setMouseClass }) => {
	const line1Ref = useRef(null);
	const line2Ref = useRef(null);
	const line3Ref = useRef(null);
	const line4Ref = useRef(null);
	const powerButtonRef = useRef(null);
	const linkRefs = useRef([]);
	const [isPowerActive, setIsPowerActive] = useState(false);
	const [url, setUrl] = useState('');

	useEffect(() => {
		const currentUrl = window.location.href;
		if (currentUrl.indexOf('about') !== -1) {
			setUrl('about');
		} else if (currentUrl.indexOf('skill') !== -1) {
			setUrl('skill');
		} else if (currentUrl.indexOf('work') !== -1) {
			setUrl('work');
		} else if (currentUrl.indexOf('contact') !== -1) {
			setUrl('contact');
		}

		const tl = new TimelineMax();
		tl.to(line1Ref.current, 0.5, { left: '100%', opacity: 1, repeat: -1 }, 0)
			.to(line2Ref.current, 0.5, { top: '100%', opacity: 1, repeat: -1 }, 0)
			.to(line3Ref.current, 0.5, { right: '100%', opacity: 1, repeat: -1 }, 0)
			.to(line4Ref.current, 0.5, { bottom: '100%', opacity: 1, repeat: -1 }, 0);
		setTimeout(() => {
			tl.clear();
			setIsPowerActive(true);
		}, 2000);

		powerButtonRef.current.onmouseover = (e) => {
			setMouseClass('home');
		};
		powerButtonRef.current.onmouseleave = (e) => {
			setMouseClass();
		};

		linkRefs.current.forEach((linkRef, i) => {
			linkRef.onmouseover = (e) => {
				setMouseClass('default');
			};
			linkRef.onmouseleave = (e) => {
				setMouseClass();
			};
		});

		//eslint-disable-next-line
	}, []);

	const handleChoseLink = (urlName) => {
		setUrl(urlName);
	};

	return (
		<div className={style.NavigationBar}>
			<DelayLink delay={1700} to="/" onDelayStart={transition}>
				<div className={style.PowerButton} onClick={() => handleChoseLink('')} ref={powerButtonRef}>
					<div className={`${style.Power} ${isPowerActive ? style.Active : ''}`}>
						<span ref={line1Ref}></span>
						<span ref={line2Ref}></span>
						<span ref={line3Ref}></span>
						<span ref={line4Ref}></span>

						<div className={style.Logo}>TN</div>
					</div>
				</div>
			</DelayLink>
			<nav className={style.NavigationBarItem}>
				<ul>
					<DelayLink delay={1700} className={style.Item} to="/about" onDelayStart={transition}>
						<li
							data-text="About"
							className={url === 'about' ? style.isChosen : ''}
							onClick={() => handleChoseLink('about')}
							ref={(el) => (linkRefs.current[0] = el)}
						>
							<AboutIcon />
						</li>
					</DelayLink>
					<DelayLink delay={1700} className={style.Item} to="/skill" onDelayStart={transition}>
						<li
							data-text="Skill"
							className={url === 'skill' ? style.isChosen : ''}
							onClick={() => handleChoseLink('skill')}
							ref={(el) => (linkRefs.current[1] = el)}
						>
							<SkillIcon />
						</li>
					</DelayLink>
					<DelayLink delay={1700} className={style.Item} to="/work" onDelayStart={transition}>
						<li
							data-text="Work"
							className={url === 'work' ? style.isChosen : ''}
							onClick={() => handleChoseLink('work')}
							ref={(el) => (linkRefs.current[2] = el)}
						>
							<WorkIcon />
						</li>
					</DelayLink>
					<DelayLink delay={1700} className={style.Item} to="/contact" onDelayStart={transition}>
						<li
							data-text="Contact"
							className={url === 'contact' ? style.isChosen : ''}
							onClick={() => handleChoseLink('contact')}
							ref={(el) => (linkRefs.current[3] = el)}
						>
							<ContactIcon />
						</li>
					</DelayLink>
				</ul>
			</nav>
		</div>
	);
};

NavigationBar.propTypes = {
	setMouseClass: PropTypes.func.isRequired,
};

export default connect(null, { setMouseClass })(NavigationBar);
