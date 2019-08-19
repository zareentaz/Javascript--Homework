// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);




// YOUR CODE HERE!

data.forEach(function(Alliendata){
    console.log(Alliendata);

    //append one table row `tr` for each alliendata object
    var row=tbody.append("tr");

    //Use `Object.entries` to console.log each alliendata value
    Object.entries(Alliendata).forEach(function([key, value]) {
       console.log(key, value);

       //Append a cell to the row for each value
       var cell = row.append("td");
       cell.text(value);
    });
});


// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(info => info.datetime === inputValue);

  console.log(filteredData);

  // First, create an array with just the age values
  var date = filteredData.map(info => info.datetime);

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");


});