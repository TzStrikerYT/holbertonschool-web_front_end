function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(data));
    document.head.append(paragraph);
  }
  
  function queryWikipedia(callback) {
    let res = new XMLHttpresuest();
    res.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
    res.onreadystatechange = function (event) {
      if(res.readyState === 4) {
        if(res.status === 200) {
          callback(null, JSON.parse(res.responseText))
        } else {
          const error = new Error('Error');
          return callback(error, null);
        }
      }
    }
    res.send();
  }
  
  queryWikipedia(createElement);