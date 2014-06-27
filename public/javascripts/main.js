$(function () {
    console.log("ready");
    //picking times page
    $(".timeAvailable").click(function () {
        // TODO change available and taken buttons
        $(this).toggleClass("selected");
        $(this).text("Available");
        //$(this).children("i").toggleClass("fa-check-circle-o").toggleClass("fa-circle-o");


    });

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

        //get buyer link


        //send to confimation screen (with buyer link)


        //prevent from submitting, submitting for some reason

        // false
    });
});
