import React from 'react';

import clsx from "clsx"
import { CardImgWithPlate } from "../../organisms"
import { C14 } from "../../atoms"
import "./styles.scss"
import { Tag } from "../../molecules"

export const Card = ({ imgProps, plateLabel, content, tags, className, ...props }) => {
    const baseClassName = "card"
    const concatClassName = clsx(className, baseClassName)
    const { src, alt } = imgProps ?? {}

    return (
        <div className={clsx(concatClassName, `${baseClassName}-wrapper`)} {...props} data-testid="card-wrapper">
            {src && (<CardImgWithPlate src={src} alt={alt} plateLabel={plateLabel} className={concatClassName} />)}
            {content && (<C14 className={clsx(concatClassName, `${baseClassName}-content`)}>{content}</C14>)}
            {tags && (
                <div className={clsx(concatClassName, `${baseClassName}-tag-wrapper`)}>
                    {tags.map(tag => <Tag label={tag}></Tag>)}
                </div>)
            }
        </div>
    )
}