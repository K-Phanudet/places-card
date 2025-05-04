import { config } from "../config";

export async function fetchPlaceTags() {
    const res = await fetch(config.placeTagApiEndpoint);
    if (!res.ok) throw new Error('Failed to fetch place tags');
    return res.json();
}
  