$(function() {
    let navToggle = $("#navToggle")
    let nav = $("#nav")
    
    navToggle.on("click", function(event){
        event.preventDefault();
        
        navToggle.toggleClass("nav__active");
        
        nav.toggleClass("menu-active");
        
    })
    
});