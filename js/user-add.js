const url = "http://localhost:52132/api/";

var user = {
    id: 0,
    username: "test2",
    password: "test1",
    firstname: "test1",
    lastname: "test1",
    phone: "513-555-5551",
    email: "test1@info.com",
    isReviewer: true,
    isAdmin: false,
    active: true
}

$().ready(() => {
    console.log("Ready...");

    $.ajax({
        method: "POST",
        url: url + "users",
        data: JSON.stringify(user),
        content: "json",
        contentType: "application/json"
    })
        .done((mes) => {
            console.log(mes);
            getAllusers();
        });
});

function getAllusers(){
    $.getJSON(url + "users")
        .done(function(x){
            console.log(x)
        });
}