// ===================================
// Locoo Gym v1
// Supabase Connection
// ===================================


// Θα μπουν εδώ τα στοιχεία
// όταν δημιουργήσουμε το project στο Supabase


const SUPABASE_URL = "";

const SUPABASE_KEY = "";





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
