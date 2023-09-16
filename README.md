#Project Title - My Course Roster

This is a React based web project where we get to chose different kind of courses and see them on the cart.
This Project is mainly built with Html,Tailwind Css and React Js.

#Some of the Features of the project:
- Responsiveness
- Dynamic Card and Cart
- Duplicate course selection verification

#How I managed the state in this assignment project:

There was mainly 2 parts to focus in this project. One is Card and another is Cart. 

First I loaded all the data in the Cards component and created card based on json data. I used a onclick function in the button of those card so that if i click in any course , my data will pass to that function. 

I set this function on parent component(app.jsx) because i could use state on this component and pass my states to Cart. As App.jsx was the parent of card and cart and connecting those two , the state needed to be declared on there. 

Now I used the states and stored informations which i gathered from the cards (with the help of function) and passed states to cart.After that it was easy as i just used those states on the cart and updated the cart informations after every interaction on the card section was done. 

This is how i got to update cart using states in this project.
