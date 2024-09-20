var togglebutton = document.getElementById("togglebutton");
var skillDiv = document.getElementById("Skills");
if (togglebutton && skillDiv) {
    togglebutton.addEventListener("click", function () {
        if (skillDiv.style.display === "none") {
            skillDiv.style.display = "block";
            togglebutton.value = "Hide Skills";
        }
        else {
            skillDiv.style.display = "none";
            togglebutton.value = "Show Skills";
        }
    });
}
else {
    console.log("Required element not found!");
}
;
