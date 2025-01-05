const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Spotify API setup
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', path.join(__dirname, 'views'));

// Get Spotify API token
spotifyApi.clientCredentialsGrant()
    .then(data => {
        spotifyApi.setAccessToken(data.body['access_token']);
        console.log('Spotify access token set.');
    })
    .catch(err => console.error('Error getting Spotify access token:', err));

// Routes
app.get('/', (req, res) => {
    res.render('index', { tracks: null });
});

app.get('/search', async (req, res) => {
    const query = req.query.q;

    try {
        const response = await spotifyApi.searchTracks(query);
        const tracks = response.body.tracks.items;
        res.render('index', { tracks });
    } catch (error) {
        console.error('Error fetching tracks:', error);
        res.render('index', { tracks: [] });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
