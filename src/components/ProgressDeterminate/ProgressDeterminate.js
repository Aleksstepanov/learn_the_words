import React from 'react';
import classNames from 'classnames';
import style from './Progress.module.scss';

const ProgressDeterminate = () => {
    return (
        <div className={ classNames(style.progress_wraper) }>
                    <div className={ classNames("progress") }>
                        <div className= { classNames(style.progress_wraper, 'determinate') }></div>
                    </div>
                </div>
    )
}

export default ProgressDeterminate;
