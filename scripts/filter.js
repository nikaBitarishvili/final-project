function searchContact() {
    let input, filter, ul, li, a, i, txtValue; 

    input = document.getElementById("userInput"); 
    filter = input.value.toUpperCase();
    ul = document.getElementById("contacts");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) { 
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText; // giorgi

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; 
        }
    }
}