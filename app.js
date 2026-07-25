// ===================================
// Locoo Gym v2
// Supabase Connected App
// ===================================



let clients = [];

let appointments = [];

let trainers = [];

let income = 0;





// =============================
// Αλλαγή σελίδων
// =============================


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
// Φόρτωση πελατών από Supabase
// =============================


async function loadClients(){


    const data = await getClients();



    clients = data;



    renderClients();



    updateDashboard();


}







// =============================
// Προσθήκη πελάτη
// =============================


async function addClient(){


    let name =
    document.getElementById("clientName").value;


    let phone =
    document.getElementById("clientPhone").value;




    if(name.trim()===""){

        alert("Βάλε όνομα πελάτη");

        return;

    }



    let client = {

        name:name,

        phone:phone,

        subscription:"Basic",

        active:true

    };




    await saveClient(client);



    await loadClients();




    document.getElementById("clientName").value="";

    document.getElementById("clientPhone").value="";



}









// =============================
// Εμφάνιση πελατών
// =============================


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

        <strong>${client.name}</strong>

        <br>

        📞 ${client.phone || ""}

        </div>

        `;



        container.appendChild(div);


    });



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








window.onload = async function(){


    await loadClients();


};
console.log("Locoo Gym app loaded");

window.addClient = addClient;
window.openPage = openPage;
