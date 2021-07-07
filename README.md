# Todooly

This is a simple todo list in ReactJS. I originally made a todo list in vanilla Javascript, but I wanted to practice ReactJs.

I am using Primitive CSS from Tania Rascia in order to reset the document styles and provide basic design for elements. I also used some custom CSS classes to style list components.

I will be continuously working on this project and updating it so stay tuned!

## Things I've Learned

This project has helped me to learn more about how React works and how state affects reloading of the DOM.j

I wanted to implement a hover effect on each activity. I originally did this by using onMouseOver in React. I tried using conditional rendering to display one version of the activity without a border initially and a version with a blue border when hovering over it. This didn't work so I tried to use state to keep track of the className on the activity. I would change the className to include .activity-hover when onMouseEnter was triggered and remove that className when onMouseLeave was triggered. I later wanted to make the delete button on each activity hidden when not hovering over the activity, but visible when hovering. After looking around for some examples, I settled on selecting the button class of activity:hover to change the visibility attribute from invisible to visible. After doing this, it became very obvious that to control the hover state of the activity in general, I should just use the activity:hover selector to do so. I made a complicated solution at first, but learned a better way to refactor my code just using css.

Determine the type of data you will be working with early on.