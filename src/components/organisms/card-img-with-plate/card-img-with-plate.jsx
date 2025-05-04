import React from 'react';
import clsx from "clsx"

import { LabeledPlate } from "../../molecules"
import { CardImage } from "../../atoms"
import "./styles.scss"

export const CardImgWithPlate = ({ src, plateLabel, className, alt, ...props }) => {
    const baseClassName = "card-img-with-plate"
    const concatClassName = clsx(className, baseClassName)

    return (
        <div className={clsx(concatClassName, `${baseClassName}-wrapper`)} data-testid="card-img-with-plate-wrapper" {...props}>
            <CardImage src={src} className={`${concatClassName}-img`} alt={alt} />
            <LabeledPlate className={`${concatClassName}-label`} labelText={plateLabel} />
        </div>
    )
}