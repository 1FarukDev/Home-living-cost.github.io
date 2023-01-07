var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "100%";
    }
    else
    {
        menuItems.style.maxHeight = "0px";  
    }
}