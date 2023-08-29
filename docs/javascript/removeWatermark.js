document.addEventListener("DOMContentLoaded", function() {
    updateCredits();
});

function updateCredits(){
    document.querySelector('.md-copyright').innerHTML = "Copyright Norse IoT Club";
}