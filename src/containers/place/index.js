import { Places } from "./places";
import { fetchPlaces } from "../../services/place.service"
import { fetchPlaceTags } from "../../services/place-tag.service"
import React, { useState, useEffect } from "react";

export const PlaceContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function loadData() {
            const places = await fetchPlaces()
            const placeTags = await fetchPlaceTags()
            const tagMap = new Map()
            placeTags.forEach(tag => {
                tagMap.set(tag.id, tag.name)
            });
            const placesInfo = places.map((place) => {
                const tags = place.tags.map(tag => tagMap.get(tag))
                return {
                    id: place.id,
                    img: place.img_url,
                    name: place.name,
                    content: place.body,
                    tags: tags
                }
            })
            setData(placesInfo);
        }
        loadData();
    }, []);

    return (
        <Places
            placesInfo={data}
        />
    )
}