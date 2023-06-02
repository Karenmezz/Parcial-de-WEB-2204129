$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);

    const email = document.createElement("p");
    const phone = document.createElement("p");
    const gustos = document.createElement("p");
    const perc = document.createElement("p");

    document.getElementById("nombre").innerText = urlParams.get("name") || "N/A";
    
    email.innerText = urlParams.get("email") || "N/A";
    email.classList.add("text__stats","bg-primary");

    phone.innerText = urlParams.get("telefono") || "N/A";
    phone.classList.add("text__stats", "bg-info");

    gustos.innerText = urlParams.get("gusto") || "N/A";
    gustos.classList.add("text__stats", "bg-green");

    perc.innerText = urlParams.get("porc") || "N/A";
    perc.classList.add("text__stats", "bg-danger");

    document.getElementById("email").appendChild(email);
    document.getElementById("telefono").appendChild(phone);
    document.getElementById("gusto").appendChild(gustos);
    document.getElementById("porc").appendChild(perc);

    console.log()
});