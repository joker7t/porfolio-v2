import React, { useRef, useEffect, useState } from 'react';
import style from './scss/Mouse.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Mouse = ({ additionalMouseClasses }) => {
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

	useEffect(() => {
		let additionalClasses = null;
		switch (additionalMouseClasses) {
			case 'zoom':
				additionalClasses = style.MouseZoom;
				break;
			case 'click':
				additionalClasses = style.MouseClick;
				break;
			case 'preview':
				additionalClasses = style.MousePreview;
				break;
			case 'home':
				additionalClasses = style.MouseHome;
				break;
			case 'welcome':
				additionalClasses = style.MouseWelcome;
				break;
			case 'default':
				additionalClasses = '';
				break;
			default:
				break;
		}
		setCursorClass(additionalClasses === null ? `${style.Cursor} ${style.Disabled}` : `${style.Cursor} ${additionalClasses}`);
	}, [additionalMouseClasses]);

	return <div className={cursorClass} ref={cursorRef}></div>;
};

Mouse.propTypes = {
	additionalMouseClasses: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	additionalMouseClasses: state.mouse.mouseClasses,
});

export default connect(mapStateToProps, null)(Mouse);
