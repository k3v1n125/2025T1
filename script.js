function calculateWeeks() {
  var startDate = new Date("2025-02-16"); // Set the start date to Aug 27, 2023
  var endDate = new Date(); // Set the end date to today's date

  var day = endDate.getDate();
  var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ];
  var daysOfWeek = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var month = months[endDate.getMonth()];
  var DATE = daysOfWeek[endDate.getDay()] + ", " + month + " " + day;
  var mid = "";

  var year = endDate.getFullYear();

  var timeDifference = endDate - startDate;
  var weeks = 1 + Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

  document.getElementById("result").innerHTML = "Week " + weeks + ", " + DATE + mid;

  var tableRows = document.querySelectorAll("tbody tr");
  var oddRow = tableRows[5];

  function updateTableCell(row, course, room) {
    var cell = row.querySelector("td:nth-child(3)");
    cell.innerHTML = ""; // Clear existing content
    cell.appendChild(document.createTextNode(course));
    cell.appendChild(document.createElement("br"));
    cell.appendChild(document.createTextNode(room));
  }
}