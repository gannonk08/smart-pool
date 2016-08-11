console.log('scoreCalc.js sanity check!');
$(document).ready(function() {
  var formattedEntryArray = []
  var scoreArray = [];




  //appends formatted entries to the standings div in

  var mastersLeaderboardUrl = 'https://galvanize-cors-proxy.herokuapp.com/http://api.sportradar.us/golf-t2/leaderboard/pga/2016/tournaments/b95ab96b-9a0b-4309-880a-ad063cb163ea/leaderboard.json=?api_key=f6dhcjtrn5xbsm3fkjg439ud';
  $.ajax({
    url: mastersLeaderboardUrl,
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    var leaderboardArr = data['leaderboard']
    return leaderboardArr
  }).then(function(leaderboardArr) {
    let unformattedEntryArray = testEntryArray;
    unformattedEntryArray.forEach(function(unformattedEntry){
      formattedEntryArray.push(formatEntry(unformattedEntry))
    });
    // console.log(leaderboardArr);
    // console.log(formattedEntryArray);
  for (var i = 0; i < formattedEntryArray.length; i++) {
    var entryScoresArray =[];
    for (var entry in formattedEntryArray[i]) {
    leaderboardArr.forEach(function(player) {
      var golferNameLeaders = player['last_name'] + ", " + player['first_name'];
          if (golferNameLeaders === formattedEntryArray[i][entry]) {
            // console.log(formattedEntryArray[i][entry]);
            entryScoresArray.push(player['score']);
          }
        })
      }
      scoreArray.push(entryScoresArray);
    }
    console.log(scoreArray);
    return scoreArray;
  }).then(function(scoreArray) {
    // console.log(scoreArray);
    console.log(formattedEntryArray);
    i=0;
    formattedEntryArray.forEach(function(formattedEntryObj){
        appendStandings(formattedEntryObj, scoreArray[i]);
        i++
      })
  }).then(function(data) {
      $('#scoringTable').dataTable();
    })
})
function appendStandings(formattedEntryObj, scoreArray) {
    var liveTier1Score = scoreArray[0];
    var liveTier2Score = scoreArray[1];
    var liveTier3Score = scoreArray[2];
    var liveTier4Score = scoreArray[3];
    var position = ("<td>" + "POSITION HOLDER" + "</td>");
    var entryName = ("<td>" + formattedEntryObj["entryNameFormatted"] + "</td>");
    var aggScore = ("<td>" + (liveTier1Score + liveTier2Score + liveTier3Score + liveTier4Score) + "</td>");
    var tier1 = ("<td>" + formattedEntryObj["tier1Formatted"] + "</td>")
    console.log(tier1);
    var tier1Score = "<td>" + liveTier1Score + "</td>";
    var tier2 = ("<td>" + formattedEntryObj["tier2Formatted"] + "</td>");
    console.log(tier2);

    var tier2Score = "<td>" + liveTier2Score + "</td>";
    var tier3 = ("<td>" + formattedEntryObj["tier3Formatted"] + "</td>");
    console.log(tier3);

    var tier3Score = "<td>" + liveTier3Score + "</td>";
    var tier4 = ("<td>" + formattedEntryObj["tier4Formatted"] + "</td>");
    console.log(tier4);

    var tier4Score = "<td>" + liveTier4Score + "</td>";

    $('#scoringTable').append("<tr>" + entryName + aggScore + tier1 + tier1Score + tier2 + tier2Score + tier3 + tier3Score + tier4 + tier4Score + "</tr>");
}
