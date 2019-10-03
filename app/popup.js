document.addEventListener('DOMContentLoaded', documentEvents, false);


function documentEvents() {
    document.getElementById('submit').addEventListener('click',
        function() {
            var courseID = document.getElementById('courseID');
            var author = document.getElementById('author');
            var numberExercises = document.getElementById('numEx');


            if (courseID.value.length == 0 || author.value.length == 0 || numberExercises == 0) {
                alert("Missing some values. \nFill inn all empty cells.");
            } else {
                chrome.tabs.query({
                    'active': true,
                    'lastFocusedWindow': true
                }, function(tabs) {
                    var url = tabs[0].url;
                    try {
                        var spreadsheetID = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(url)[1];
                        var sendValues = [courseID.value, author.value, numberExercises.value, spreadsheetID];
                        chrome.runtime.sendMessage(
                            sendValues,
                            function(response) {
                                console.log(response);
                            }
                        );
                    } catch (e) {
                        alert("Only available on Google Sheets.\nNavigate to a Google Sheet to use.");
                    }
                });
            }
        });
}
