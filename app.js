var current_id = "about_content";
var current_proj = "joint_game";

function radio_tab_checked(radio_value) {
    document.getElementById(current_id).style.display = "none";
    document.getElementById(radio_value).style.display = "initial"; 
    current_id = radio_value;
}

function radio_project_checked(radio_value){
    document.getElementById(current_proj).style.display = "none";
    document.getElementById(radio_value).style.display = "flex";
    current_proj = radio_value;
}