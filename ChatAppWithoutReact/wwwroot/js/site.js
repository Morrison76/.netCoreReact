let hubUrl = 'https://localhost:44340/chat';

const hubConnection = new signalR.HubConnectionBuilder().withUrl(hubUrl).build();

let userName = '';

function CreatedMessage(message) {
    var firstElem = $("#chatroom").first();
    $("#chatroom").append(message, firstElem);
}



hubConnection.on('Send', function (message, userName) {
    var msg = $("<p></p>").append("<b>" + userName + "</b>").append( " : " + message);
    CreatedMessage(msg);
});

hubConnection.on('OnConnected', function (userName) {
    var msg = $("<p></p>").append("Користувач <b>" + userName + "</b> приєднався в чат");
    CreatedMessage(msg);
});



$("#loginBtn").on("click", function (e) {
    userName = $("#userName").val();
    if (userName.length > 0) {
        $("#header").html('<h3>Welcome ' + userName + '</h3>');
        hubConnection.invoke('OnConnected', userName);
        $("#loginBtn").attr("disabled", "disabled");
        $("#userName").attr("disabled", "disabled");

        $("#sendBtn").removeAttr("disabled");
    }
    else {
        alert("Введіть ваш логін!");
    }
});

$("#sendBtn").on("click", function (e) {
    var message = $("#message").val();
    hubConnection.invoke('Send', message, userName);
});

hubConnection.start();