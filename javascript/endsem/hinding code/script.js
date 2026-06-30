const caseFile = {
    caseId: "C101",
    suspectName: "Aditya",
    investigationNote: "Very Secret"
};

Object.defineProperties(caseFile, "caseId",{
    writable:false,
    configurable:false
});

Object.entries(caseFile, "investigationNote",{
    enumerable:false
});