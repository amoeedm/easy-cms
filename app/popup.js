document.addEventListener('DOMContentLoaded', documentEvents, false);


function documentEvents() {
    
    //Initiated by clicking the 'Submit'-button on popup.html.
    document.getElementById('submit').addEventListener('click',
        function() {
        
            //Getting values from user input from popup.html.
            var courseID = document.getElementById('courseID');
            var author = document.getElementById('author');
            var numberExercises = document.getElementById('numEx');

            //Error message to user if at least one of the user input cell is empty.
            if (courseID.value.length == 0 || author.value.length == 0 || numberExercises == 0) {
                alert("Missing some values. \nFill inn all empty cells.");
                
            //Execution if all user input is present.
            } else {
                
                //Query on the active Chrome tab.
                chrome.tabs.query({
                    'active': true,
                    'lastFocusedWindow': true
                    
                    //Extracting the url on the current Chrome tab.
                }, function(tabs) {
                    var url = tabs[0].url;
                    try {
                        //Extracting the current spreadsheetID and passing a message to 
                        var spreadsheetID = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(url)[1];
                        var sendValues = [courseID.value, author.value, numberExercises.value, spreadsheetID];
                        
                        //Short-lived connection to pass a message to background.js.
                        chrome.runtime.sendMessage(
                            sendValues,
                            function(response) {
                                console.log(response);
                            }
                        );
                     //Error message if url is not a Google Sheet-document.
                    } catch (e) {
                        alert("Only available on Google Sheets.\nNavigate to a Google Sheet to use.");
                    }
                });
            }
        });
}
