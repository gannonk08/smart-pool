//format submission for comparison
//format of submission initially




//Removes "#1 . " from entry obj
function formatEntry(entryObj) {
    var formattedEntryObj = {};
    formattedEntryObj.entryNameFormatted = entryObj["entryName"];
    formattedEntryObj.tier1Formatted = removeNumbering(entryObj["tier1"])
    formattedEntryObj.tier2Formatted = removeNumbering(entryObj["tier2"])
    formattedEntryObj.tier3Formatted = removeNumbering(entryObj["tier3"])
    formattedEntryObj.tier4Formatted = removeNumbering(entryObj["tier4"])
    return formattedEntryObj
}

function removeNumbering(tierString) {
    tierString = tierString.split(". ").pop();
    return tierString;
}


var testEntryArray = [
  testEntryObj1 = {
    entryName: "Kristjan",
    tier1: "# 1 . Day, Jason",
    tier2: "# 21 . Johnson, Zach",
    tier3: "# 37 . Westwood, Lee",
    tier4: "# 62 . Simpson, Webb"
  },
  testEntryObj2 = {
  entryName: "Sancho",
  tier1: "# 3 . Spieth, Jordan",
  tier2: "# 21 . Koepka, Brooks",
  tier3: "# 37 . Willett, Danny",
  tier4: "# 62 . Horschel, Billy"
},
testEntryObj3 = {
entryName: "Billy Madison",
tier1: "# 3 . Mickelson, Phil",
tier2: "# 21 . Holmes, J.B.",
tier3: "# 37 . Walker, Jimmy",
tier4: "# 62 . McDowell, Graeme"
},
testEntryObj4 = {
entryName: "Steven Glansberg",
tier1: "# 3 . Fowler, Rickie",
tier2: "# 21 . Furyk, Jim",
tier3: "# 37 . Dufner, Jason",
tier4: "# 62 . Woodland, Gary"
}
]
