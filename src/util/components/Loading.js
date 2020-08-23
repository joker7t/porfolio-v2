import React from 'react';
import style from './scss/Loading.module.scss';

// <div class="loader" ref={loaderRef}>
// 			<div class="bar1"></div>
// 			<div class="bar2"></div>
// 			<div class="bar3"></div>
// 			<div class="bar4"></div>
// 			<div class="bar5"></div>
// 			<div class="bar6"></div>
// 		</div>
const Loading = ({ loaderRef }) => {
	return (
		<div className={style.Loader} ref={loaderRef}>
			<div className={`${style.Bar} ${style.Bar1}`}></div>
			<div className={`${style.Bar} ${style.Bar2}`}></div>
			<div className={`${style.Bar} ${style.Bar3}`}></div>
			<div className={`${style.Bar} ${style.Bar4}`}></div>
			<div className={`${style.Bar} ${style.Bar5}`}></div>
			<div className={`${style.Bar} ${style.Bar6}`}></div>
		</div>
	);
};

export default Loading;
