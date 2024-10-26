export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8lAa8Ov5rWk5Ok0rjv7Gi5f0araMHr3x&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}