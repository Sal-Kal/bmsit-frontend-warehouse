console.log("here");
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:8000/get/all/journal/", false);
request.send(null);
var object = JSON.parse(request.responseText);

var rows = "";

for (i = 0; i < object.msg.length; i++) {
  rows +=
    '<tr><td class="author-body">' +
    '<div class="author">' +
    object.msg[i].authorName +
    "</div>" +
    "</td>" +
    '<td class="title-body">' +
    '<div class="title">' +
    object.msg[i].titleOfManuscript +
    "</div>" +
    "</td>" +
    '<td class="type-of-publication-body">' +
    '<div class="type-of-publication">' +
    object.msg[i].typeOfJournal +
    "</div>" +
    "</td>" +
    '<td class="type-of-publication-body">' +
    '<div class="type-of-publication">' +
    object.msg[i].titleOfJournal +
    "</div>" +
    "</td>" +
    '<td class="publisher-body">' +
    '<div class="publisher">' +
    object.msg[i].publisher +
    "</div>" +
    "</td>" +
    '<td class="isbn-body">' +
    '<div class="isbn">' +
    object.msg[i].issn +
    "</div>" +
    "</td>" +
    '<td class="year-of-publication-body">' +
    '<div class="year-of-publication">' +
    object.msg[i].yearOfPublication +
    "</div>" +
    "</td>" +
    '<td class="doi-body">' +
    '<div class="doi">' +
    "<a href=" +
    object.msg[i].doi +
    ">" +
    object.msg[i].doi +
    "</a>" +
    "</div>" +
    "</td></tr>";
}

const ele = document.getElementById("journal-table");
ele.innerHTML += rows;
