// ===================================
// Locoo Gym v1
// Supabase Connection
// ===================================


// Θα μπουν εδώ τα στοιχεία
// όταν δημιουργήσουμε το project στο Supabase


const SUPABASE_URL = "https://msrgkaczrxpzizmoaekp.supabase.co/rest/v1/";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcmdrYWN6cnhweml6bW9hZWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MzY5NDIsImV4cCI6MjEwMDUxMjk0Mn0.AC41nXNNdxI2_GhXASvaa1KNF3PhrTCJdmiX2tRcicQ";





// Έλεγχος σύνδεσης


function connectSupabase(){


    if(
        SUPABASE_URL === "" ||
        SUPABASE_KEY === ""
    ){

        console.log(
            "Supabase: Δεν έχει γίνει ακόμα σύνδεση"
        );

        return false;

    }



    console.log(
        "Supabase: Συνδεδεμένο"
    );


    return true;


}







// Προσωρινές λειτουργίες
// Θα αντικατασταθούν με πραγματικά queries



async function saveClient(client){


    console.log(
        "Αποθήκευση πελάτη:",
        client
    );


}






async function getClients(){


    console.log(
        "Φόρτωση πελατών"
    );


    return [];


}
async function saveClient(client){


    const response = await fetch(
        SUPABASE_URL + "/rest/v1/clients",
        {

            method:"POST",

            headers:{

                "apikey":SUPABASE_KEY,

                "Authorization":
                "Bearer " + SUPABASE_KEY,

                "Content-Type":
                "application/json"

            },


            body:JSON.stringify(client)

        }
    );


    return await response.json();

}






async function getClients(){


    const response = await fetch(
        SUPABASE_URL + "/rest/v1/clients?select=*",
        {

            headers:{

                "apikey":SUPABASE_KEY,

                "Authorization":
                "Bearer " + SUPABASE_KEY

            }

        }
    );



    return await response.json();


}
