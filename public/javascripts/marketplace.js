$(function () {
    //marketplace complete purchase page
    $("#complete-purchase").click(function (e) {
        e.preventDefault();

        var data = {
            inviteremail : $("#buyeremail").val(),
            inviteeemail : $("#selleremail").val(),
            inviterfirst : $("#buyername").val(),
            inviteefirst : $("#sellername").val()
        };

        $.ajax({
            url: "/meetup",
            data: data,
            type: 'POST'
        });

    // TODO route to meetup sent confirmation screen

    });
});