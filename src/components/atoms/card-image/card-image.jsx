import "./styles.scss"
import clsx from 'clsx';
import React from 'react';

export const CardImage = ({ src, className, ...props }) => {
    const baseClassName = "card-img";
  
    return (
      <div className={clsx(className, baseClassName, `${baseClassName}-wrapper`)} data-testid="card-img-wrapper" {...props}>
        <img src={src} data-testid="card-img-content" className={clsx(className, baseClassName, `${baseClassName}-content`)} />
      </div>
    );
  };