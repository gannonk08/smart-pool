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
    entryName: "Kristjan Test",
    tier1: "# 1 . Day, Jason",
    tier2: "# 21 . Johnson, Zach",
    tier3: "# 37 . Westwood, Lee",
    tier4: "# 62 . Simpson, Webb"
  },
  testEntryObj2 = {
  entryName: "Jabroni Test",
  tier1: "# 3 . Spieth, Jordan",
  tier2: "# 21 . Koepka, Brooks",
  tier3: "# 37 . Willett, Danny",
  tier4: "# 62 . Horschel, Billy"
  }
]
