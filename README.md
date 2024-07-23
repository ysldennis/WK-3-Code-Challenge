The project is created using HTML, CSS,Javascript and db.json. Below is an explanation of how the code works and what each part does.

Files in the Project;
>index.html: The HTML file that structures the webpage.
>styles.css: The CSS file that styles the webpage.
>index.js: The JavaScript file that adds interactivity to the webpage.
>db.json: The db.json file acts as a mock database for the Flatdango project. It is used to simulate a backend server that stores movie data. The JSON Server reads from this file to serve data and handle requests, allowing us to focus on the front-end development without needing a real database.

Here's a breakdown of its contents and purpose:

Contents of db.json
The db.json file contains a collection of movies in JSON format. Each movie object includes details such as the movie's id, title, runtime, capacity, showtime, tickets sold, description, and poster URL. 

HTML (index.html)
This file contains the structure of the webpage.

CSS (styles.css)
This file contains the styles for the webpage. It makes the webpage look nice by setting background colors, fonts, and layout.

JavaScript (index.js)
This file contains the JavaScript code that interacts with a web page to manage and display movie-related data. It fetches movie details from a server, updates the DOM with this information, and allows users to buy tickets and view different movies. 