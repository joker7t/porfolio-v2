import React, { useEffect, useRef } from 'react';
import style from './scss/Loading.module.scss';

const Loading = ({ appRef, setIsLoading, setIsLoaded }) => {

    useEffect(() => {

        const loader = (delay) => {
            // const app = appRef && appRef.current;
            setTimeout(function () {
                // app.addClass('loading');
                setIsLoading(true);
            }, delay);
            setTimeout(function () {
                setIsLoaded(true);
            }, delay + 1700);
        }

        loader(10);

        //eslint-disable-next-line
    }, []);

    return (
        <div className="container-spinner">
            <svg className="loader" viewBox="0 0 100 100" overflow="visible">
                <g className="core">
                    <circle className="path" cx="50" cy="50" r="1" fill="none" />
                </g>
                <g className="spinner">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" />
                </g>
                <g className="layer-1">
                    <circle className="path" cx="50" cy="50" r="70" fill="none" />
                </g>
                <g className="layer-2">
                    <circle className="path" cx="50" cy="50" r="120" fill="none" />
                </g>
                <g className="layer-3">
                    <circle className="path" cx="50" cy="50" r="180" fill="none" />
                </g>
                <g className="layer-4">
                    <circle className="path" cx="50" cy="50" r="240" fill="none" />
                </g>
                <g className="layer-5">
                    <circle className="path" cx="50" cy="50" r="300" fill="none" />
                </g>
                <g className="layer-6">
                    <circle className="path" cx="50" cy="50" r="380" fill="none" />
                </g>
                <g className="layer-7">
                    <circle className="path" cx="50" cy="50" r="450" fill="none" />
                </g>
                <g className="layer-8">
                    <circle className="path" cx="50" cy="50" r="540" fill="none" />
                </g>
            </svg>
        </div>
    );
}

export default Loading;
