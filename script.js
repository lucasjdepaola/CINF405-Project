/* This is the script for the dropdown button that can be used*/

function contentDropdown(){
    document.getElementById("courseContentDropdown").classList.toggle("show");

}

/*This code allows for the dropdown to be closed when the user clicks outside of the box */
window.onclick = function(event){
    if(!event.target.matches('.contentDropdown')) {
        var dropdown = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdown.length; i++) {
            var showDropdown = dropdown[i];
            if (showDropdown.classList.contains('show')){
                showDropdown.classList.remove('show');
            }
        }
    }
}