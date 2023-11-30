document.addEventListener("DOMContentLoaded", function() {
    updateCredits();
});


function updateCredits(){
    document.querySelector('footer').innerHTML = `© ${new Date().getFullYear()} Norse IoT Club`;
}