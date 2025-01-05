# Spotify Song Finder

## Overview

The **Spotify Song Finder** is a simple web application that allows users to search for songs or artists using the Spotify Web API. It displays detailed information about the tracks, including the song name, artist(s), album name, release date, and a direct link to listen to the song on Spotify.

## Features

- **Search** for songs or artists on Spotify.
- **Display results** including album art, song name, artist(s), album name, and release date.
- **Listen on Spotify**: Provides a link to open the song directly in Spotify.

## Installation

### Prerequisites

Ensure that you have the following installed:

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
Install the dependencies:

2. 
Install the dependencies:
npm install

3. Create a .env file in the root directory and add your Spotify API credentials:

SPOTIFY_CLIENT_ID=<your_spotify_client_id>
SPOTIFY_CLIENT_SECRET=<your_spotify_client_secret>
4. Start the server:

npm start
5. Open your browser and navigate to http://localhost:3000 to start searching for songs.

Usage
Enter the name of a song or artist into the search bar.
Click Search to display results.
View the song details, including album art, artist(s), album name, release date, and listen to the song on Spotify via the provided link.
Technologies Used
Express.js: A web framework for Node.js to handle routing and server setup.
Spotify Web API: An interface to interact with Spotify's music catalog.
EJS: A templating engine to dynamically render HTML pages.
dotenv: A module to load environment variables from a .env file.
Contributing
Feel free to fork the repository and submit issues or pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Made by **Adi Mukhamedzhan**