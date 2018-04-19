console.log('client.js is up');

$(document).ready(onReady);

function onReady(){
    $.ajax({
        method: 'GET', //also can be type instead of method
        url: '/records'
    })//end .ajax
    .then(function (response){
        response.forEach((record) => {
            $("#listOfRecords").append(
            `<tr>
            <td>"${record.title}"</td> 
            <td>By ${record.artist}</td> 
            <td>${record.year}</td> <td> 
            Current cost: ${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}!!</td>
            </tr>`);
        });//end forEach
    });//end .then
}//end onReady


//to test that the ajax function is working, do below and it will respond in the console
// .then(function (response){
//     console.log(response);
// }

// How to change a number to currency: .toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)