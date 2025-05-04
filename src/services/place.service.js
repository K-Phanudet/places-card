import { config } from "../config";

export async function fetchPlaces() {
    const res = await fetch(config.placeApiEndpoint);
    if (!res.ok) throw new Error('Failed to fetch places');
    return res.json();
}
  