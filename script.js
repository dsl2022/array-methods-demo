// Original array
const originalArray = [5, 2, 8, 1, 4];

// Display the original array
const originalArrayElement = document.getElementById('original-array');
originalArrayElement.textContent = originalArray.toString();

// Sort Method
const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', function() {
  const sortedArray = originalArray.slice().sort();
  const sortResultElement = document.getElementById('sort-result');
  sortResultElement.textContent = sortedArray.toString();
});

const findButton = document.getElementById('find-button');
findButton.addEventListener('click', function() {
  const findResultElement = document.getElementById('find-result');
  
  const searchValue = parseInt(prompt('Enter a number to find in the array:'));
  
  if (!isNaN(searchValue)) {
    const foundElement = originalArray.find(function(element) {
      return element === searchValue;
    });
    
    if (foundElement) {
      findResultElement.textContent = "Element found: " + foundElement;
    } else {
      findResultElement.textContent = "Element not found.";
    }
  } else {
    findResultElement.textContent = "Invalid input. Please enter a number.";
  }
});

// Filter Method
var filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', function() {
  var filterResultElement = document.getElementById('filter-result');

  var filteredArray = originalArray.filter(function(element) {
    return element > 3;
  });

  filterResultElement.textContent = filteredArray.toString();
});

// Map Method
var mapButton = document.getElementById('map-button');
mapButton.addEventListener('click', function() {
  var mapResultElement = document.getElementById('map-result');

  var mappedArray = originalArray.map(function(element) {
    return element * 2;
  });

  mapResultElement.textContent = mappedArray.toString();
});

// ForEach Method
var forEachButton = document.getElementById('foreach-button');
forEachButton.addEventListener('click', function() {
  var forEachResultElement = document.getElementById('foreach-result');

  var result = "";

  originalArray.forEach(function(element) {
    result += element + " ";
  });

  forEachResultElement.textContent = result.trim();
});
