let india=document.getElementById("india");
let russia=document.getElementById("russia");
let usa=document.getElementById("usa");
let europe=document.getElementById("europe");

india.oninput=function(){
    let dollor=(parseFloat(india.value)*0.012);
    usa.value=parseFloat(dollor.toFixed(2));

    let euro=(parseFloat(india.value)*0.011);
    europe.value=parseFloat(euro.toFixed(2));

    let rubel=(parseFloat(india.value)*1.074);
    russia.value=parseFloat(rubel.toFixed(2));
}
russia.oninput=function(){
    let dollor=(parseFloat(russia.value)*0.011);
    usa.value=parseFloat(dollor.toFixed(2));

    let euro=(parseFloat(russia.value)*0.010);
    europe.value=parseFloat(euro.toFixed(2));

    let rupees=(parseFloat(russia.value)*0.93);
    india.value=parseFloat(rupees.toFixed(2));
}
usa.oninput=function(){
    let rupees=(parseFloat(usa.value)*83.17);
    india.value=parseFloat(rupees.toFixed(2));

    let euro=(parseFloat(usa.value)*0.906);
    europe.value=parseFloat(euro.toFixed(2));

    let rubel=(parseFloat(usa.value)*89.35);
    russia.value=parseFloat(rubel.toFixed(2));
}
europe.oninput=function(){
    let dollor=(parseFloat(europe.value)*1.104);
    usa.value=parseFloat(dollor.toFixed(2));

    let rupees=(parseFloat(europe.value)*91.83);
    india.value=parseFloat(rupees.toFixed(2));

    let rubel=(parseFloat(europe.value)*98.64);
    russia.value=parseFloat(rubel.toFixed(2));
}