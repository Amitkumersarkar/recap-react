// finding shortcut truthy value
// const isActive = true;
const isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser();

// use  && {and} if the left side is true then right side will be executed
// isActive && showUser();

// use {or} || if one of the value is true
// isActive || showUser();