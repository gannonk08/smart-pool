console.log('scoreCalc.js sanity check!');
  $(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../testdata.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var orderedPicks = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var picks = [];
            for (var j=0; j<headers.length; j++) {
                picks.push(data[j]);
            }
            orderedPicks.push(picks);
        }
    }
    console.log(orderedPicks);
}



    // var mastersLeaderboardUrl = 'https://galvanize-cors-proxy.herokuapp.com/http://api.sportradar.us/golf-t2/leaderboard/pga/2016/tournaments/b95ab96b-9a0b-4309-880a-ad063cb163ea/leaderboard.json=?api_key=f6dhcjtrn5xbsm3fkjg439ud';
    // var leaderboard
    // $.ajax({
    //     url: mastersLeaderboardUrl,
    //     method: 'GET',
    //     dataType: 'json'
    // }).done(function(data) {
    //     var leaderboardArr = data['leaderboard']
    //
    //     console.log(data['leaderboard'])
    //     console.log(data['leaderboard'][0]['position'])
    //         // $('#leaderboardWell').text(data);
    // });
