export default async function handler(req, res) {
    const searchTerm = req.query.q;
    const apiKey = process.env.OMDB_API_KEY;

    if (!searchTerm) {
        res.status(400).json({ error: 'No search term provided' });
        return;
    }

    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
    const data = await response.json();

    res.status(200).json(data);
}