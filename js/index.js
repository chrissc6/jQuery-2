const url = "http://localhost:52132/api/";

$().ready(() => {
    console.log("Ready...");

    $.getJSON(url + "users")
        .done(function(xUser){
            console.log(xUser);
            render(xUser);
        })
});

function render(x){
    for(var u of x)
    {
        var tbC = document.getElementById("tbody");

        var row = '<tr>';
        row += `<th scope="row">${u.id}</th>`
        row += `<td>${u.username}</td>`
        // row += `<td>${u.password}</td>`
        row += `<td>${u.firstname} ${u.lastname}</td>`
        // row += `<td>${u.lastname}</td>`
        row += `<td>${u.phone}</td>`
        row += `<td>${u.email}</td>`
        // row += '<td>' + (u.isReviewer ? "Yes" : "No") + '</td>'
        // row += '<td>' + (u.isAdmin ? "Yes" : "No") + '</td>'
        var review = u.isReviewer ? "Rev" : "";
        var admin = u.isAdmin ? "Adm" : "";
        row +=  `<td>${review} ${admin}</td>`
        row += '<td>' + (u.active ? "Yes" : "No") + '</td>'
        row += `<td> <a href = "">Details</a> | <a href="">Edit</a> </td>`;





        // row += '<td>' + u.id + '</td>'
        // row += '<td>' + u.username + '</td>'
        // row += '<td>' + u.password + '</td>'
        // row += '<td>' + u.firstname + '</td>'
        // row += '<td>' + u.lastname + '</td>'
        // row += '<td>' + u.phone + '</td>'
        // row += '<td>' + u.email + '</td>'
        // row += '<td>' + u.isReviewer + '</td>'
        // row += '<td>' + u.isAdmin + '</td>'
        // row += '<td>' + u.active + '</td>'

        row += '</tr>';

        $(tbC).append(row);
    }
}