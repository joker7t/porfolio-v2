export default (container, inner) => {
	const mouse = {
		_x: 0,
		_y: 0,
		x: 0,
		y: 0,
		updatePosition: function (event) {
			const e = event || window.event;
			this.x = e.clientX - this._x;
			this.y = (e.clientY - this._y) * -1;
		},
		setOrigin: function (e) {
			this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
			this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
		},
		show: function () {
			return '(' + this.x + ', ' + this.y + ')';
		},
	};

	mouse.setOrigin(container);

	let counter = 0;
	const refreshRate = 10;
	const isTimeToUpdate = function () {
		return counter++ % refreshRate === 0;
	};

	const onMouseEnterHandler = function (event) {
		update(event);
	};

	const onMouseLeaveHandler = function () {
		inner.style = '';
	};

	const onMouseMoveHandler = function (event) {
		if (isTimeToUpdate()) {
			update(event);
		}
	};

	const update = function (event) {
		mouse.updatePosition(event);
		updateTransformStyle(
			(mouse.y / inner.offsetHeight / 2).toFixed(2),
			(mouse.x / inner.offsetWidth / 2).toFixed(2)
		);
	};

	const updateTransformStyle = function (x, y) {
		const style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
		inner.style.transform = style;
		inner.style.webkitTransform = style;
		inner.style.mozTranform = style;
		inner.style.msTransform = style;
		inner.style.oTransform = style;
	};

	container.onmousemove = onMouseMoveHandler;
	container.onmouseleave = onMouseLeaveHandler;
	container.onmouseenter = onMouseEnterHandler;
};
