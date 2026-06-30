const caseFile = {
    caseId: "C101",
    suspectName: "Aditya",
    investigationNote: "Very Secret"
};

Object.defineProperty(caseFile, "caseId",{
    writable:false,
    configurable:false
});

Object.entries(caseFile, "investigationNote",{
    enumerable:false
});

caseFile.suspectName = "Lucky";

let table = document.getElementById("caseTable");

let entries = Object.entries(caseFile);

entries.forEach(function(item){

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerText = item[0];
    cell2.innerText = item[1];
})
