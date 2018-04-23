console.log('client.js is up');

$(document).ready(onReady);

function onReady(){
    $('#submitArtistButton').on('click', addNew);
    getAllSongs();
}//end onReady

function addNew(){
    console.log('button works');
    const newSong = {
        title: $('#newTitle').val(),
        artist: $('#newArtist').val(),
        year: $('#newYear').val(),
        cost: $('#newCost').val(),
    };//end newSong
    $.ajax({
        method: 'POST',
        url: '/record',
        data: newSong
    })//end ajax
    .then(function(response){
        $('#listOfRecords').empty();//deletes the old list without the new song so below it can add the whole new list
        console.log(response);
        getAllSongs();
    });//end .then
    console.log(newSong);
    
}//end addNew

function getAllSongs(){
    $.ajax({
         method: 'GET', //also can be type instead of method
         url: '/record'
    })//end .ajax
    .then(function (response){
        response.forEach((record) => {
            $("#listOfRecords").append(
            `<tr>
            <td>"${record.title}"</td> 
            <td>By ${record.artist}</td> 
            <td>${record.year}</td> 
            <td> ${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td>
            </tr>`);
        });//end forEach
    });//end .then
}//end getAllSongs



//to test that the ajax function is working, do below and it will respond in the console
// .then(function (response){
//     console.log(response);
// }

// How to change a number to currency: .toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)