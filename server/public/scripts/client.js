console.log('client.js is up');

$(document).ready(onReady);

function onReady(){
    $.ajax({
        type: 'GET',
        url: '/records'
    })//end .ajax
    .then(function (response){
        response.forEach((record) => {
            $("#listOfRecords").append(`<li>"${record.title}" by ${record.artist} <br> Current cost: ${record.cost}!!</li>`);
        });
    });//end .then
}//end onReady

