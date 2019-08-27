# Friend-Finder

If you are lonesome, then wait no more -- Friend Finder is here to match you with ythe perfect soul mate!!

![Alt Text](Screenshots/friendfinder.gif)


## Usage

To find ythe next best friend, click on: "Get Ready to be Friended!". You will be prompted to enter ythe name, followed by a link to ythe photo. Once you have completed the previous steps, you will then be asked 10-personal questions -- there are no right answers. Once you are done with you selections, click: "MATCH". The system will then provide you with ythe new real-life BFF. 

![Alt Text](Screenshots/friendfinder2.gif)


## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap


## Code Explanation

- The "server.js" file sets up the Express server, specifying the port number, the NPM packages that need to be loaded, and also the routes, which are externalized.
- There are two separate HTML files ("home.html" and "survey.html") that serve as the front-end portion of the code - the homepage and the survey, which will also show the resulting best match.
- The two routing files ("htmlRoutes.js" and "apiRoutes.js") determine the back-end logic (based on the request being made, the response that gets sent to the browser), the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in the server-side data or add new friends.
- The best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.
- A modal is then toggled, displaying the the best match to the person who just took the survey.


