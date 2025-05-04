import React from 'react';
import { Card } from "../../components"
import "./styles.scss"

export const Places = ({placesInfo =[]}) => {
    return (
    <div className="places-container">
        {
            placesInfo.map( placeInfo => (
                <Card 
                    imgProps={{
                        src: placeInfo.img, 
                        alt: `image ${placeInfo.name}`
                    }} 
                    plateLabel={placeInfo.name}
                    content={placeInfo.content}
                    tags={placeInfo.tags}
                />
            ))
        }
    </div>
    )
}