import React from 'react';
import classNames from 'classnames';
import style from './ProgressIndeterminate.module.scss';

const ProgressIndeterminate = () => {
    return (
        <div className={ classNames(style.progress_wraper) }>
                    <div className={ classNames("progress") }>
                        <div className= { classNames(style.progress_wraper, 'indeterminate') }></div>
                    </div>
                </div>
    )
}

export default ProgressIndeterminate;
