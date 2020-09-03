import React, { useEffect, useRef } from 'react';
import style from './scss/ScrollBar.module.scss';

const ScrollBar = () => {
	const scrollBarRef = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

		//eslint-disable-next-line
	}, []);

	const handleScroll = () => {
		const scroll = document.documentElement.scrollTop;
		const dh = document.documentElement.scrollHeight;
		const wh = window.innerHeight;
		const scrollPercent = (scroll / (dh - wh)) * 90;
		scrollBarRef.current.style.height = `${scrollPercent}%`;
	};
	return <div className={style.ScrollBar} ref={scrollBarRef}></div>;
};

export default ScrollBar;
