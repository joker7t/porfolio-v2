import React, { useRef, useEffect } from 'react';
import style from './scss/Skill.module.scss';
import Intro from './Intro';
import TwoSidesButton from '../../util/components/TwoSidesButton';
import { TimelineMax, Power3 } from 'gsap';
import FadeButton from '../../util/components/FadeButton';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import data from './skills-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMouseClass } from '../../actions/mouseAction';

const Skill = ({ setMouseClass }) => {
	const tl = new TimelineMax({ paused: true });
	const smallCircleRefs = useRef([]);
	const contentRef = useRef(null);
	const skillMapContainerRef = useRef(null);

	useEffect(() => {
		tl.to(smallCircleRefs.current, 1, { transform: 'scale(0)', ease: Power3.easeOut })
			.to(contentRef.current, 1, {
				transform: 'translateY(-100%)',
				ease: Power3.easeOut,
			})
			.to(skillMapContainerRef.current, 0.5, { opacity: 1 });

		skillMapContainerRef.current.onmouseover = (e) => {
			setMouseClass('zoom');
		};
		skillMapContainerRef.current.onmouseleave = (e) => {
			setMouseClass();
		};

		am4core.ready(function () {
			const chart = am4core.create('skill-chart', am4plugins_wordCloud.WordCloud);
			chart.fontFamily = 'Courier New';
			const series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
			series.randomness = 0.1;
			series.rotationThreshold = 0.5;
			series.data = data;

			series.dataFields.word = 'tag';
			series.dataFields.value = 'count';

			series.heatRules.push({
				target: series.labels.template,
				property: 'fill',
				min: am4core.color('#fff'),
				max: am4core.color('#fc0'),
				dataField: 'value',
			});
			const hoverState = series.labels.template.states.create('hover');
			hoverState.properties.fill = am4core.color('#C98D4B');
		});

		//eslint-disable-next-line
	}, []);

	const handleViewSkillMap = () => {
		tl.play();
	};

	const handleBack = () => {
		tl.reverse();
	};

	return (
		<div className={style.Skill}>
			<div className={style.SlideWrapper}>
				<div className={style.SmallCircles}>
					<div className={style.SmallCircle} ref={(el) => (smallCircleRefs.current[0] = el)}></div>
					<div className={style.SmallCircle} ref={(el) => (smallCircleRefs.current[1] = el)}></div>
					<div className={style.SmallCircle} ref={(el) => (smallCircleRefs.current[3] = el)}></div>
					<div className={style.SmallCircle} ref={(el) => (smallCircleRefs.current[4] = el)}></div>
					<div className={style.SmallCircle} ref={(el) => (smallCircleRefs.current[5] = el)}></div>
					<div className={style.SmallCircle} ref={(el) => (smallCircleRefs.current[6] = el)}></div>
				</div>
				<div className={style.ContentWrapper} ref={contentRef}>
					<div className={style.CoverWrapper}>
						<div>
							<Intro setMouseClass={setMouseClass} />
							<TwoSidesButton firstSide="my skill map" secondSide="view" onClick={handleViewSkillMap} />
						</div>
					</div>
					<div className={style.SkillMapWrapper}>
						<div className={style.SkillMapContainer} ref={skillMapContainerRef} id="skill-chart"></div>
						<FadeButton content="back" onClick={handleBack} />
					</div>
				</div>
			</div>
		</div>
	);
};

Skill.propTypes = {
	setMouseClass: PropTypes.func.isRequired,
};

export default connect(null, { setMouseClass })(Skill);
