menulist=["Chicken Tandoori Pizza",
          "Veg Supreme Pizza",
          "Panner Tikka Pizza",
          "Deluxe Veggie Pizza",
          "Veg Extravaganza Pizza"];



function getMenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>";
    menulist.sort();
    for (var i=0; i<menulist.length; i++){
        htmldata=htmldata + "<li>" + menulist[i] + "</li>"
    }
    htmldata=htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value;
    menulist.push(item);
    menulist.sort();
    htmldata="<section class='cards'>"
    for (var i=0; i<menulist.length; i++){
        htmldata=htmldata + "<div class='card'>" + "<img src='pizzaIMg.png'></>" + menulist[i] + "</div>"
    }
    htmldata=htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}