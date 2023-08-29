document.addEventListener("DOMContentLoaded", function() {
    updateCredits();
});


function updateCredits(){
    document.querySelector('.md-copyright').innerHTML = `© ${new Date().getFullYear()} Norse IoT Club`;
}