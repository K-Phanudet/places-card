import clsx from "clsx"
import React from 'react';

import { T14 } from "../../atoms"
import "./styles.scss"
export const LabeledPlate = ({ className, labelText="" }) => {
    const baseClassName = "labeled-plate"
    const concatClassName = clsx(className, baseClassName)

    return (
        <div className={concatClassName} data-testid="labeled-plate-wrapper">
           { labelText && (<T14 className={`${concatClassName}-label`} data-testid="labeled-plate-text">{labelText}</T14>)}
        </div>
    )
}