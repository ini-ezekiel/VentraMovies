export default async function handler(req, res) {
    const searchTerm = req.query.q;
    const apiKey = process.env.OMDB_API_KEY;

    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
    const data = await response.json();

    res.status(200).json(data);
}