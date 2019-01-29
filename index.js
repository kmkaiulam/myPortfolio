let about = document.getElementById('about');
let aboutButton = document.getElementById('about-btn')
aboutButton.onclick = function() { about.scrollIntoView({ behavior: 'smooth', block: 'start'}); }

let projects = document.getElementById('projects');
let projectsButton = document.getElementById('projects-btn')
projectsButton.onclick = function() { projects.scrollIntoView({ behavior: 'smooth', block: 'start'}); }

let contact = document.getElementById('contact');
let contactButton = document.getElementById('contact-btn')
contactButton.onclick = function() { contact.scrollIntoView({ behavior: 'smooth', block: 'start'}); }
