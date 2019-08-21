// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var inputcity =d3.select("#cityname");

  var input_city_value = inputcity.property("value");


  // filtering the data on the basis of user input

  var filteredData = tableData.filter(info => info.datetime === inputValue);
  var filtercity = tableData.filter(info => info.city === input_city_value);

  console.log(filteredData);
  console.log(filtercity);

  
  // Then, select the unordered list element by class name

  
  // comment to clear the body which giving next search
  document.getElementsByTagName('tbody')[0].innerHTML = '';

  //append one table row `tr` for each alliendata object
  filteredData.forEach(function(Alliendata){

    var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
   Object.entries(Alliendata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);
    });
  });
  
  filtercity.forEach(function(Alliendata){

    var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
   Object.entries(Alliendata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);
   });
  });
});
