const url = "http://localhost:52132/api/users/";

$().ready(() => {
    console.log("Ready...");

    $.getJSON(url + "1")
        .done(function(xUser){
            console.log(xUser);
            render(xUser);
        })
});

function render(u){
        var idc = document.getElementById("tid");
        var unc = document.getElementById("tun");
        var pwc = document.getElementById("tpw");
        var fnc = document.getElementById("tfn");
        var lnc = document.getElementById("tln");
        var pc = document.getElementById("tp");
        var ec = document.getElementById("te");
        var rec = document.getElementById("treviewer");
        var adc = document.getElementById("tadmin");
        var ac = document.getElementById("tactive");

        var id = u.id;
        $(idc).append(id);
        var id = u.username;
        $(unc).append(id);
        var id = u.password;
        $(pwc).append(id);
        var id = u.firstname;
        $(fnc).append(id);
        var id = u.lastname;
        $(lnc).append(id);
        var id = u.phone;
        $(pc).append(id);
        var id = u.email;
        $(ec).append(id);
        var id = u.isReviewer;
        $(rec).append(id);
        var id = u.isAdmin;
        $(adc).append(id);
        var id = u.active;
        $(ac).append(id);

}