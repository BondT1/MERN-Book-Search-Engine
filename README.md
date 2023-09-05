# 21 MERN: Book Search Engine

## Description

The aim of this project was to create an application that allows an avid reader to search for new books to read and keep a list of books to purchase. The book service engine is designed to create a user-friendly experience with an easy-to use user interface. The main activity was to refactor the functioning application from using a RESTful API to a GraphQL API built with Apollo Server

The features used to create this project consist of:

- React
- Express
- Apollo Server
- GraphQL
- Mongoose
- MERN stack
- Heroku 
- MongoDB

The deployed application can be viewed through this link - https://book-search-engine-12-7c00a349f063.herokuapp.com/

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
HERE 
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Installation

To install the necessary packages, simply type 'npm run install' in your command line. 

## Usage

Type npm run start to start the application or click on the Heroku link above. 

You will be met with the book search engine homepage with multiple options. 

You are able to search for particular books with the search bar - clicking the links underneath the resulting book results will take you to the webpages of the googlebooks. 

This application also allows you to sign up to an account and subsequently log in and log out of this account once the signup is complete. 

Once logged in, you are able to save any particular books you search to your 'saved books' page which you can use to look at and easily purchase your favorite books. You can also remove any books from your 'saved books' at any time.

![A screenshot of the deployed application](Assets/screencapture-MERN.png)

## Credits

N/A

## License

N/A


