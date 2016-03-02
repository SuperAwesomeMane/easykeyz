var sortjs = (function() {

  var orderAlphabetically = function(array) {
    array.sort(function(a,b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
         return 1;
      }
      return 0;
     });
    // // // // console.log("1 - " + array);
  }

  var orderReverseAlphabetically = function(array) {
    array.sort(function(a,b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
         return 1;
      }
      return 0;
     });
    // // // console.log("2 - " + array);
  }

  var orderByNumberAsc = function(array) {
    array.sort(function(a,b) {
      return a - b;
    });
    // // // console.log("3 - " + array);
  }

  var orderByNumberDesc = function(array) {
    array.sort(function(a,b) {
      return b - a;
    });
    // // // console.log("4 - " + array);
  }

  var randomize = function(array) {
    array.sort(function(a,b) {
      return (0.5 - Math.random());
    });
    // // // console.log("5 - " + array);
  }

  var orderByLengthAsc = function(array) {
    array.sort(function(a,b) {
      if(a.length < b.length) {
        return -1;
      }
      if(a.length > b.length) {
        return 1;
      }
      return 0;
    });
    // // console.log("6 - " + array);
  }

  var orderByLengthDesc = function(array) {
    array.sort(function(a,b) {
      if(a.length < b.length) {
        return 1;
      }
      if(a.length > b.length) {
        return -1;
      }
      return 0;
    });
    // // console.log("7 - " + array);
  }

  var addBeforeArray = function(array, newItem) {
    var oldArray = array;
    // // console.log("8 - Old: " + oldArray);
    var newArray = [];
    newArray.push(newItem);
    for (var i = 0; i < oldArray.length; i++) {
      var arrayItem = oldArray[i];
      newArray.push(arrayItem);
    }
    // // console.log("8 - New: " + newArray);
    return newArray;
  }

  var exportToJson = function(array) {
    var jsonArray = JSON.stringify(array);
    var textFileAsBlob = new Blob([jsonArray], {type:'application/json'});
    var fileNameToSaveAs = "jsonArray.json";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // for chrome
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // for firefox
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  }

  var importFromJson = function() {
    var jsonData = [];
    var input = document.getElementById('file');
    var file = input.files[0];
    // var jsonArrayFile = evt.target.files[0];
    var request = new XMLHttpRequest();
    request.open('GET', file.name, false);
    request.onreadystatechange = function() {
      jsonData = JSON.parse(request.responseText);
      // console.log(jsonData);
    }
    request.send();
    return jsonData;
  }

  // var jsonData;
  // var importFromJson = function() {
  //     var input, file, fileread;
      // input = document.getElementById('jsonFile');
  //
  //     if (typeof window.FileReader !== 'function') {
  //         alert("The file API isn't supported on this browser.");
  //         return;
  //     }
  //
  //     if (!input) {
  //         alert("Your HTML file is not funcitoning properly");
  //     } else if (!input.files) {
  //         alert("Please update your browser and try again.");
  //     } else if (!input.files[0]) {
  //         alert("Select a file before clicking 'Load'");
  //     } else {
  //         file = input.files[0];
  //         fileread = new FileReader();
  //         fileread.onload = function(evt) {
  //           var fileData = onloadCallback(evt, function() {
  //             console.log(fileData);
  //           });
  //           jsonData = JSON.parse(fileData);
  //           // jsonData = fileData;
  //           console.log(jsonData);
  //         };
  //         fileread.readAsText(file);
  //         return jsonData;
  //     }
  // }

  // function onloadCallback(evt, callback) {
  //   var fileData = evt.target.result;
  //   return fileData;
  // }

  return {
    orderAlphabetically: orderAlphabetically,
    orderReverseAlphabetically: orderReverseAlphabetically,
    orderByNumberAsc: orderByNumberAsc,
    orderByNumberDesc: orderByNumberDesc,
    randomize: randomize,
    orderByLengthAsc: orderByLengthAsc,
    orderByLengthDesc: orderByLengthDesc,
    addBeforeArray: addBeforeArray,
    exportToJson: exportToJson,
    importFromJson: importFromJson
  };
}());
