import React from 'react';

import clsx from "clsx";
import "./styles.scss"

export const H1 = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx('heading-1', className)} {...props}>
      {children}
    </h1>
  );
};



export const H2 = ({ children, className, ...props }) => {
  return (
    <h2 className={clsx('heading-2', className)} {...props}>
      {children}
    </h2>
  );
};



export const H3 = ({ children, className, ...props }) => {
  return (
    <h3 className={clsx('heading-3', className)} {...props}>
      {children}
    </h3>
  );
};

export const C16 = ({ children, className, ...props }) => {
  return (
    <p className={clsx('content-16', className)} {...props}>
      {children}
    </p>
  );
};

export const C14 = ({ children, className, ...props }) => {
  return (
    <p className={clsx('content-14', className)} {...props}>
      {children}
    </p>
  );
};


export const C12 = ({ children, className, ...props }) => {
  return (
    <p className={clsx('content-12', className)} {...props}>
      {children}
    </p>
  );
};

export const C10 = ({ children, className, ...props }) => {
  return (
    <p className={clsx('content-10', className)} {...props}>
      {children}
    </p>
  );
};

export const T18 = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx('title-18', className)} {...props}>
      {children}
    </h1>
  );
};


export const T16 = ({ children, className, ...props }) => {
  return (
    <h2 className={clsx('title-16', className)} {...props}>
      {children}
    </h2>
  );
};


export const T14 = ({ children, className, ...props }) => {
  return (
    <h3 className={clsx('title-14', className)} {...props}>
      {children}
    </h3>
  );
};


export const T12 = ({ children, className, ...props }) => {
  return (
    <h4 className={clsx('title-12', className)} {...props}>
      {children}
    </h4>
  );
};