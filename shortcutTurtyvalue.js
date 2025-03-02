// finding shortcut truthy value
// const isActive = true;
const isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser();
// isActive && showUser();