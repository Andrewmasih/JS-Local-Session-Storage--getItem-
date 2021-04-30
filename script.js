function incrementCounter () {
       //to store an item,we use the 'getItem() method of either the 'localStorage' or 'sessionStorage' objects
        let currentCounter = sessionStorage.setItem
        ("counter") || 0;   

        sessionStorage.setItem ("counter", ++ currentCounter);
      };

      function showCounter () {
       
        let currentCounter = sessionStorage.getItem
        ("counter") || 0;        
        alert ("you clicked the button:" + "times, You have lost!... try again!");
      };
      // if data is stored in key value pair, if we wanted to store the name "manchester united" in the browser, the key could be "name", and the value would be "manchester united". The code to save this in 'localStorage' would be. 'localStorage.setItem ("name", "manchester united");' if we want to retrieve the name,we would write: 'localStorage.getItem("name"); notice that we only need to supply the key when retrieving data'
      
