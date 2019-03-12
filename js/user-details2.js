const url = "http://localhost:52132/api/";

var user;

$().ready(() => {
    console.log("Ready...");

    $.getJSON(`${url}users/1/`)
        .done(function(xUser){
            console.log(xUser);
            user = xUser;
            render();
        })
});

function render(){
    $("#tid").text(user.id);
    $("#tun").text(user.username);
    $("#tpw").text(user.password);
    $("#tfn").text(user.firstname);
    $("#tln").text(user.lastname);
    $("#tp").text(user.phone);
    $("#te").text(user.email);
    $("#treviewer").text(user.isReviewer);
    $("#tadmin").text(user.isAdmin);
    $("#tactive").text(user.active);
}
