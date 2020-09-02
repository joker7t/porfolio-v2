import React, { useEffect } from 'react';
import style from './scss/Intro.module.scss';

const Intro = () => {
	useEffect(() => {
		// 4 states per letter: Transparent | Line | Block | Visible.
		function decodeText() {
			const text = document.getElementsByClassName(style.DecodeText)[0];
			// debug with
			// console.log(text);
			// console.log(text.children.length);
			// assign the placeholder array its places
			if (text) {
				const state = [];
				for (let i = 0, j = text.children.length; i < j; i++) {
					text.children[i].classList.remove(style.State1, style.State2, style.State3);
					state[i] = i;
				}

				// shuffle the array to get new sequences each time
				const shuffled = shuffle(state);
				for (let i = 0, j = shuffled.length; i < j; i++) {
					const child = text.children[shuffled[i]];
					const classes = child.classList;
					// fire the first one at random times
					const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
					if (classes.contains(style.TextAnimation)) {
						setTimeout(firstStages.bind(null, child), state1Time);
					}
				}
			}
		}

		// send the node for later .state changes
		function firstStages(child) {
			if (child.classList.contains(style.State2)) {
				child.classList.add(style.State3);
			} else if (child.classList.contains(style.State1)) {
				child.classList.add(style.State2);
			} else if (!child.classList.contains(style.State1)) {
				child.classList.add(style.State1);
				setTimeout(secondStages.bind(null, child), 100);
			}
		}
		function secondStages(child) {
			if (child.classList.contains(style.State1)) {
				child.classList.add(style.State2);
				setTimeout(thirdStages.bind(null, child), 100);
			} else if (!child.classList.contains(style.State1)) {
				child.classList.add(style.State1);
			}
		}
		function thirdStages(child) {
			if (child.classList.contains(style.State2)) {
				child.classList.add(style.State3);
			}
		}

		function shuffle(array) {
			var currentIndex = array.length,
				temporaryValue,
				randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}
		let textInterval;

		setTimeout(() => {
			decodeText();
			textInterval = setInterval(function () {
				decodeText();
			}, 8000);
		}, 3000);

		return () => clearInterval(textInterval);

		//eslint-disable-next-line
	}, []);

	return (
		<div className={style.DecodeText}>
			<div className={style.TextAnimation}>l</div>
			<div className={style.TextAnimation}>e</div>
			<div className={style.TextAnimation}>t</div>
			<div className={style.TextAnimation}>'</div>
			<div className={style.TextAnimation}>s</div>
			<div className={style.Space}></div>
			<div className={style.TextAnimation}>d</div>
			<div className={style.TextAnimation}>o</div>
			<div className={style.Space}></div>
			<div className={style.TextAnimation}>s</div>
			<div className={style.TextAnimation}>o</div>
			<div className={style.TextAnimation}>m</div>
			<div className={style.TextAnimation}>e</div>
			<div className={style.TextAnimation}>t</div>
			<div className={style.TextAnimation}>h</div>
			<div className={style.TextAnimation}>i</div>
			<div className={style.TextAnimation}>n</div>
			<div className={style.TextAnimation}>g</div>
			<div className={style.Space}></div>
			<div className={style.Break}></div>
			<div className={style.TextAnimation}>t</div>
			<div className={style.TextAnimation}>o</div>
			<div className={style.TextAnimation}>g</div>
			<div className={style.TextAnimation}>e</div>
			<div className={style.TextAnimation}>t</div>
			<div className={style.TextAnimation}>h</div>
			<div className={style.TextAnimation}>e</div>
			<div className={style.TextAnimation}>r</div>
			<div className={style.TextAnimation}>!</div>
		</div>
	);
};

export default Intro;
