Participant's Information:
2101722422 - Kelwin Tantono - Universitas Bina Nusantara

I have completed the design and layout. However, I made some changes when slicing the design to HTML and CSS.

The game that I made was only tetrominos, but there are still some bugs in it, I assume that it's because of the asynchronous events where the 1 second delay that I made to drop the tetrominos slowly to the bottom of the layout and when the user inputted the down key event. I have not implemented the game to my front end yet.

The game could be found in Tetrominos.html and tetris.js.

Things to know for the implementation of the web: 
For the Front End, I am using React.js and for the backend I am using Laravel.

The BackEnd:
- Database: MySQL
- To create the table, I have modified the default migration to create the users table in the database called 2014_10_12_000000_create_users_table.php.
- To run this, first must create the database in MySQL called lw_bnsc, if not you can modify the database name in .env.
- Once the database has been created, can run this command "php artisan migrate" to create the tables in the database.
- The Contoller: UserController.php
- I have placed the routes in api.php
- Once all is setup, run the command "php artisan serve"
- For user token, I used jwtauth to handle User authentication in logging in.

The FrontEnd:
- To pass data from the front-end to the back-end, I am using axios. 
- To install axios run this command: npm i axios
- For handling different web pages, I used react-router-dom, could be installed by typing: "npm install --save react-router-dom" to the cmd.
- Used Styled Components for React.js to make the modal box, but the layout of the modal box is still lacking.
- To run the Front-End, type in the command "npm start" to the command prompt.
- The user can register by the link: http://localhost:3000/register
- Login by: http://localhost:3000/login
- Once the user logs in, a token will be set to the localStorage and from this, I use the localStorage item to validate if the user has logged in, the user cannot go to the Register Page, but will be redirected to the home page.

- User Registration and Login are successful.

Hopefully could have more time to develop this web, but I am currently having my exams.
Thank You.
