    console.log('leaderboard.js sanity check!');
$(document).on('ready', function() {
    var mastersLeaderboardUrl = 'https://galvanize-cors-proxy.herokuapp.com/http://api.sportradar.us/golf-t2/leaderboard/pga/2016/tournaments/b95ab96b-9a0b-4309-880a-ad063cb163ea/leaderboard.json=?api_key=f6dhcjtrn5xbsm3fkjg439ud';
    var leaderboard 
    $.ajax({
        url: mastersLeaderboardUrl,
        method: 'GET',
        dataType: 'json'
    }).done(function(data) {
        var leaderboardArr = data['leaderboard']
        appendLeaderboard(leaderboardArr)

        console.log(data['leaderboard'])
        console.log(data['leaderboard'][0]['position'])
            // $('#leaderboardWell').text(data);
    });

});

function appendLeaderboard(leaderboardArr){
  leaderboardArr.forEach(function(key) {
    $('#leaderTable').append("<tr>"+("<td>" + key['position'] + "</td>")+("<td>" + key['last_name'] + ", " + key['first_name'] + "</td>")+ ("<td>" + key['score'] + "</td>")+"</tr>")

  })
}
// var test = [1,2,3,4,5,6,7,8,9,10]
//
// getPosition(test);
