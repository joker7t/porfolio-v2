import React, { useEffect, useRef } from 'react';
import style from './scss/Loading.module.scss';
import { TimelineMax, Power2 } from 'gsap';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

const Loading = ({ appRef, setIsLoading, setIsLoaded }) => {
    const loaderRef = useRef(null);

    useEffect(() => {

        var tl = new TimelineMax();

        tl
            .to(loaderRef.current, 0.2, { opacity: 1 })
            .to(CSSRulePlugin.getRule('body:before'), 0.001, { cssRule: { top: '50%' }, ease: Power2.easeOut }, 'close')
            .to(CSSRulePlugin.getRule('body:after'), 0.001, { cssRule: { bottom: '50%' }, ease: Power2.easeOut }, 'close')

            .to(CSSRulePlugin.getRule('body:before'), 0.2, { cssRule: { top: '0%' }, ease: Power2.easeOut }, '+=1.5', 'open')
            .to(CSSRulePlugin.getRule('body:after'), 0.2, { cssRule: { bottom: '0%' }, ease: Power2.easeOut }, '-=0.2', 'open')
            .to(loaderRef.current, 0.2, { opacity: 0 }, '-=0.2');

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <div class="loader" ref={loaderRef}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
            </div>

            <main>
                <div class="-content -index">
                    <div>
                        <h1>Loader Transition</h1>
                        <a href="#" class="btn js-trigger-transition">Begin Transition</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Loading;
