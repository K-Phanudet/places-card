import React from 'react';
import { C12 } from "../../atoms"
import clsx from "clsx"
import "./styles.scss"

export const Tag = ({ className, label }) => {
    const baseClassName = "tag"
    const concatClassName = clsx(className, baseClassName)
    return (
        <div className={clsx(concatClassName, `${baseClassName}-wrapper`)} data-testid="tag-wrapper">
            {label && (<C12 className={clsx(concatClassName, `${baseClassName}-label`)}  data-testid="tag-label">{label}</C12>)}
        </div>
    )
}