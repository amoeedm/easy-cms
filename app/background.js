//Initiated when message received.
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        //Local variables for user input from popup.html passed from popup.js.
        var courseID = request[0];
        var author = request[1];
        var numberRows = request[2];
        var spreadsheetID = request[3];

        var data = []

        //Array containing user input according to the the current spreadsheet template.
        for (var i = 0; i < numberRows; i++) {
            data[i] = ['nb', courseID, i, '', i, i, author];
        }

        //O2Auth 2.0. authentication for accessing Google Sheet API.
        chrome.identity.getAuthToken({
            interactive: true
        }, function(token) {
            
            var API_KEY = <Insert API key>;                   // API_KEY from Google Sheet API.
            var range = 'Sheet1!A2:G' + (numberRows + 1);     // Specifying the dimensions of the user input data according to Google Sheet urls.
            var params = {
                values: data                                  
            };

            //HTTP PUT method to access the current Google Sheet.
            let init = {
                method: 'PUT',
                async: true,
                body: JSON.stringify(params),
                headers: {
                    Authorization: 'Bearer ' + token,
                    contentType: 'application/json'
                },
                contentType: 'json',
            };

            //Writing data to the current Google Sheet.
            fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetID + '/values/' + range + '?valueInputOption=USER_ENTERED&key=' + API_KEY, init)
                .then((response) => response.json())
                .then(function(data) {
                    console.log(data);
                });
        });

        console.log(request);
        console.log(sender);
        sendResponse("Task completed.");
    }
);
