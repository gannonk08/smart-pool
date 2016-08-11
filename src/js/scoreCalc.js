console.log('scoreCalc.js sanity check!');
$(document).ready(function() {
  //appends formatted entries to the standings div in
  userPicksObjTest = {
      entryName: "Kristjan Gannon",
      tier1: "# 1 . Day, Jason",
      tier2: "# 19 . Matsuyama, Hideki",
      tier3: "# 37 . Furyk, Jim",
      tier4: "# 56 . Streb, Robert"
  }
  userPicksObjTest2 = {
      entryName: "Kristjan Gannon",
      tier1: "# 1 . Day, Jason",
      tier2: "# 19 . Matsuyama, Hideki",
      tier3: "# 37 . Grillo, Emiliano",
      tier4: "# 56 . English, Harris"
  }
  var mastersLeaderboardUrl = 'https://galvanize-cors-proxy.herokuapp.com/http://api.sportradar.us/golf-t2/leaderboard/pga/2016/tournaments/b95ab96b-9a0b-4309-880a-ad063cb163ea/leaderboard.json=?api_key=f6dhcjtrn5xbsm3fkjg439ud';
  $.ajax({
    url: mastersLeaderboardUrl,
    method: 'GET',
    dataType: 'json'
  }).then(function(data) {
    var leaderboardArr = data['leaderboard']
    return leaderboardArr
  }).then(function(leaderboardArr) {
    console.log(leaderboardArr);
    var scoreArray = [];
    var formattedEntryArray = formatEntry(userPicksObjTest);
    console.log(formattedEntryArray);
    leaderboardArr.forEach(function(key) {
      var golferNameLeaders = key['last_name'] + ", " + key['first_name'];
      console.log(typeof golferNameLeaders);
      for (var index in formattedEntryArray) {
        if (golferNameLeaders === formattedEntryArray[index]) {
          console.log(golferNameLeaders);
          console.log(formattedEntryArray[index]);
          scoreArray.push(key['score']);
        }
      }
    })
    return scoreArray;
  }).then(function(scoreArray) {
    console.log(scoreArray);
    var formattedEntryArray = formatEntry(userPicksObjTest);
    appendStandings(formattedEntryArray, scoreArray);
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
    var tier1Score = "<td>" + liveTier1Score + "</td>";
    var tier2 = ("<td>" + formattedEntryObj["tier2Formatted"] + "</td>");
    var tier2Score = "<td>" + liveTier2Score + "</td>";
    var tier3 = ("<td>" + formattedEntryObj["tier2Formatted"] + "</td>");
    var tier3Score = "<td>" + liveTier3Score + "</td>";
    var tier4 = ("<td>" + formattedEntryObj["tier4Formatted"] + "</td>");
    var tier4Score = "<td>" + liveTier4Score + "</td>";

    $('#scoringTable').append("<tr>" + position + entryName + aggScore + tier1 + tier1Score + tier2 + tier2Score + tier3 + tier3Score + tier4 + tier4Score + "</tr>");
}
