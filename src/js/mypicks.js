console.log('mypicks.js sanity check!');

var tierOneNameArr = [];
var tierTwoNameArr = [];
var tierThreeNameArr = [];
var tierFourNameArr = [];
var tierOneRankArr = [];
var tierTwoRankArr = [];
var tierThreeRankArr = [];
var tierFourRankArr = [];
var fieldArr = [];
var tierOneObj = {};
var tierTwoObj = {};
var tierThreeObj = {};
var tierFourObj = {};



$(document).on('ready', function() {
    var mastersFieldUrl = 'https://galvanize-cors-proxy.herokuapp.com/http://api.sportradar.us/golf-t2/seasontd/pga/2016/players/statistics.json?api_key=f6dhcjtrn5xbsm3fkjg439ud';
    var successFullRequest = Promise.resolve($.ajax({
      url: mastersFieldUrl,
      method: 'GET',
      dataType: 'json'
    })).then(function(data){
      fieldArr = data.players
      console.log(data);
      getTop72(fieldArr)
    }).then(function(data){
      console.log(tierOneObj);
      console.log(tierTwoObj);
      console.log(tierThreeObj);
      console.log(tierFourObj);
      appendTier(tierOneRankArr, tierOneNameArr, $('#tierOneOptions'))
      appendTier(tierTwoRankArr, tierTwoNameArr, $('#tierTwoOptions'))
      appendTier(tierThreeRankArr, tierThreeNameArr, $('#tierThreeOptions'))
      appendTier(tierFourRankArr, tierFourNameArr, $('#tierFourOptions'))
    })


});



function getTop72(fieldArr) {
//if ranking is 1-18 push to Tier 1 Array
fieldArr.forEach(function(key) {
        var golferName = (key['last_name'] + ", " + key['first_name']);
        var worldRank = key["statistics"]["world_rank"];
        if (0 < worldRank && worldRank <= 18) {
          tierOneNameArr.push(golferName)
          tierOneRankArr.push(worldRank)
          tierOneObj[golferName] = worldRank;
        }
        else if (19 <=  worldRank && worldRank <= 36) {
          tierTwoNameArr.push(golferName)
          tierTwoRankArr.push(worldRank)
          tierTwoObj[golferName] = worldRank;
        }
        else if (37 <=  worldRank && worldRank <= 54) {
          tierThreeNameArr.push(golferName)
          tierThreeRankArr.push(worldRank)
          tierThreeObj[golferName] = worldRank;
        }
        else if (55 <=  worldRank && worldRank <= 72) {
          tierFourNameArr.push(golferName)
          tierFourRankArr.push(worldRank)
          tierFourObj[golferName] = worldRank;
        }

    })
}

function appendTier(worldRankArray, golferNameArray, tierID) {
  rankAndNameArray = combineRankAndName(worldRankArray, golferNameArray);
  var sortedRankAndNameArray = rankAndNameArray.sort(naturalSort);
  // console.log(sortedrankAndNameArray);
    sortedRankAndNameArray.forEach(function(key) {
        tierID.append("<option>" + key + "</option>")
    })
}

function combineRankAndName(worldRankArray, golferNameArray) {
  var rankAndNameArray = [];
  for (var i = 0; i < golferNameArray.length; i++) {
    rankAndNameArray[i] =  "# " + worldRankArray[i] + " . " + golferNameArray[i]
  }
  return rankAndNameArray
}


//move to utilities functions
function naturalSort(a, b) {
    var ra = a.match(/\D+|\d+/g);
    var rb = b.match(/\D+|\d+/g);
    var r = 0;

    while(!r && ra.length && rb.length) {
        var x = ra.shift(), y = rb.shift(),
            nx = parseInt(x), ny = parseInt(y);

        if(isNaN(nx) || isNaN(ny))
            r = x > y ? 1 : (x < y ? -1 : 0);
        else
            r = nx - ny;
    }
    return r || ra.length - rb.length;
}
