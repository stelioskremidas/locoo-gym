// ===================================
// Locoo Gym v1
// Main Application Logic
// ===================================



let clients = [];

let appointments = [];

let trainers = [];

let income = 0;





// Αλλαγή σελίδων

function openPage(page){


    document
    .querySelectorAll(".page")
    .forEach(section=>{

        section.classList.add("hidden");

    });



    document
    .getElementById(page)
    .classList.remove("hidden");


}







// =============================
// Πελάτες
// =============================



function addClient(){


    let name =
    document.getElementById("clientName").value;



    let phone =
    document.getElementById("clientPhone").value;



    if(name.trim()===""){

        alert("Βάλε όνομα πελάτη");

        return;

    }




    let client={

        id:Date.now(),

        name:name,

        phone:phone

    };



    clients.push(client);



    renderClients();


    updateDashboard();



    document.getElementById("clientName").value="";

    document.getElementById("clientPhone").value="";


}







function renderClients(){



    let container =
    document.getElementById("clientsList");



    container.innerHTML="";




    clients.forEach(client=>{


        let div =
        document.createElement("div");


        div.className="client-card";



        div.innerHTML=`

        <div>

        <strong>
        ${client.name}
        </strong>

        <br>

        📞 ${client.phone}

        </div>



        <button onclick="deleteClient(${client.id})">

        Διαγραφή

        </button>


        `;



        container.appendChild(div);



    });



}








function deleteClient(id){



    clients =
    clients.filter(client=>client.id!==id);



    renderClients();



    updateDashboard();



}









// =============================
// Dashboard
// =============================



function updateDashboard(){



    document
    .getElementById("membersCount")
    .innerText =
    clients.length;




    document
    .getElementById("todayAppointments")
    .innerText =
    appointments.length;




    document
    .getElementById("income")
    .innerText =
    income + " €";





    document
    .getElementById("trainersCount")
    .innerText =
    trainers.length;



}









// Εκκίνηση εφαρμογής


window.onload=function(){


    updateDashboard();


};
