let getZip = prompt("Enter Zip Code")




let zip = new XMLHttpRequest();

zip.open("GET", `http://api.zippopotam.us/us/${getZip}`, true);
zip.onload = function (){
    return getZip;
}
zip.onreadystatechange = function (){
if (zip.readyState === 4 && zip.status === 200){
   
    let displayZipCode = JSON.parse(zip.response)
    console.log(displayZipCode)
    document.getElementById("displayZipCode").src = displayZipCode.responseText

    let state = displayZipCode.places[0]["state"]
    let city = displayZipCode.places[0]["place name"]
    document.getElementById("zip").innerHTML = `${city}, ${state}`;
        }
    }

zip.send();



// grab zipcode from propmt text
// displaying matching postal code with json