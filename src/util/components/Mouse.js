import React, { useRef, useEffect, useState } from 'react';
import style from './scss/Mouse.module.scss';

const Mouse = () => {
	const cursorRef = useRef(null);
	const [cursorClass, setCursorClass] = useState(style.Cursor);

	useEffect(() => {
		const editCursor = (e) => {
			const { clientX: x, clientY: y } = e;
			cursorRef.current.style.left = x + 'px';
			cursorRef.current.style.top = y + 'px';
		};
		window.addEventListener('mousemove', editCursor);
		//eslint-disable-next-line
	}, []);

	const buildMouseClass = (condition = '') => {
		let additionalClasses = '';
		switch (condition) {
			case 'zoom':
				additionalClasses = style.MouseZoom;
				break;
			case 'click':
				additionalClasses = style.MouseClick;
				break;
			default:
				break;
		}
		setCursorClass(`${style.Cursor} ${additionalClasses}`);
	};

	return <div className={cursorClass} ref={cursorRef}></div>;
};

export default Mouse;
