//format submission for comparison
//format of submission initially
userPicksObjTest = {
    entryName: "Kristjan Gannon",
    tier1: "# 1 . Day, Jason",
    tier2: "# 19 . Matsuyama, Hideki",
    tier3: "# 37 . Grillo, Emiliano",
    tier4: "# 56 . English, Harris"
}

var formattedEntryObj = {
  entryNameFormatted: "",
  tier1Formatted: "",
  tier2Formatted: "",
  tier3Formatted: "",
  tier4Formatted: ""
}
//Removes "#1 . " from entry obj
function formatEntry (entryObj) {
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
