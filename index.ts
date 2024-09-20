const togglebutton=document.getElementById(`togglebutton`) as HTMLButtonElement|null;
const skillDiv=document.getElementById(`Skills`) as HTMLDivElement|null;

if (togglebutton && skillDiv){
    togglebutton.addEventListener(`click`,()=>{
        if (skillDiv.style.display===`none`){
            skillDiv.style.display=`block`;
            togglebutton.value="Hide Skills"
        }else {
            skillDiv.style.display=`none`;
            togglebutton.value="Show Skills";
        }
    });
}
else{
    console.log("Required element not found!")
};