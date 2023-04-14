var current_id = "about_content";

function radio_checked(radio_value) {
    document.getElementById(radio_value).style.display = "initial"; 
    document.getElementById(current_id).style.display = "none";
    current_id = radio_value;
}