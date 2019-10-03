chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        var courseID = request[0];
        var author = request[1];
        var numberRows = request[2];
        var spreadsheetID = request[3];

        var data = []

        for (var i = 0; i < numberRows; i++) {
            data[i] = ['nb', courseID, i, '', i, i, author];
        }


        chrome.identity.getAuthToken({
            interactive: true
        }, function(token) {

            var API_KEY = <Insert API key>;
            var range = 'Sheet1!A2:G' + (numberRows + 1);
            var params = {
                values: data
            };
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