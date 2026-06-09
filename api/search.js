export default async function handler(req, res) {
    const searchTerm = req.query.q;
    const apiKey = process.env.TMDB_API_KEY;

    let url;

    if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
    } else {
        url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
}