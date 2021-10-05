# Todooly

This is a simple todo list in ReactJS. I originally made a todo list in vanilla Javascript, but I wanted to practice ReactJs.

I am using Primitive CSS from Tania Rascia in order to reset the document styles and provide basic design for elements. I also used some custom CSS classes to style list components.

I will be continuously working on this project and updating it so stay tuned!

## Things I've Learned

This project has helped me to learn more about how React works and how state affects reloading of the DOM.j

I wanted to implement a hover effect on each activity. I originally did this by using onMouseOver in React. I tried using conditional rendering to display one version of the activity without a border initially and a version with a blue border when hovering over it. This didn't work so I tried to use state to keep track of the className on the activity. I would change the className to include .activity-hover when onMouseEnter was triggered and remove that className when onMouseLeave was triggered. I later wanted to make the delete button on each activity hidden when not hovering over the activity, but visible when hovering. After looking around for some examples, I settled on selecting the button class of activity:hover to change the visibility attribute from invisible to visible. After doing this, it became very obvious that to control the hover state of the activity in general, I should just use the activity:hover selector to do so. I made a complicated solution at first, but learned a better way to refactor my code just using css.

Determine the type of data you will be working with early on.

One of the things that I wanted to do in this app is to allow people to change the options on each todo item. This is something that a lot of todo apps do and would take this beyond just a basic list of items. In order to do this though, I had to use conditional rendering in the App.js file to load up the ActivityOptions component when someone clicks on the todo item. I needed to load in the data from the selected todo item so a user could change it. Once it was changed though, I needed to load that back into the list of items in the App.js state. This wasn't happening though because I didn't pass the creationDate property which I am using as the key for each todo item. This broke the app because the updated item didn't have the key.

I also wanted to have tags as a feature for the todo items. This way users could filter items by tag instead of having a taxonomic set of lists. I needed users to be able to submit the value from the tag input without submitting the whole options form. Since you can't use nested forms, I tried the form attribute to have 2 forms on the page interwoven, but that wasn't working. I just moved the tag input up to the top of the page so it could be a separate form.