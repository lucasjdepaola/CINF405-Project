function infoEdit()
{
	document.getElementById("editInfo").style.display = 'block';
}

function confirm()
{
    document.getElementById("nameText").innerHTML = ("Name: " + document.getElementById("Name").value);
    document.getElementById("yearText").innerHTML = ("Year: " + document.getElementById("Year").value);
    document.getElementById("expgradText").innerHTML = ("Expected Graduation: " + document.getElementById("ExpGrad").value);
    document.getElementById("degreeText").innerHTML = ("Degree: " + document.getElementById("Degree").value);

    document.getElementById("editInfo").style.display = 'none';
}
