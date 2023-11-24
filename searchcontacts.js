    
function searchconemail(email){
    var workerContact = People.People.searchContacts({
    "query": email,
    "readMask": "names,addresses,emailAddresses,phoneNumbers"
  });
    if (workerContact.results) {
    for (i = 0; i < workerContact.results.length; i++) {
      let thisResult = workerContact.results[i];
      Logger.log(`Result ${i}: ${thisResult.person.names[0].displayName}`);
      var personName = (thisResult.person.names[0].displayName)
      console.log(personName)
    }
  } else {
    Logger.log(`No results for ${email}`);
  }
      
    console.log(personName)
    
    return personName;
}
    

// function getContactNotes() {
//   var people = People.People.get("people/me", {
//   personFields: "names,biographies",
//   });
  
//   if (people && people.notes && people.notes.length > 0) {
//     var notes = people.notes[0].value;  // Adjust if there are multiple notes
//     Logger.log(notes);
//   } else {
//     Logger.log('No notes found for this contact.');
//   }
// }

function searchContactByEmail(email) {
  // Search for the contact by email
  var response = People.People.searchContacts({
    query: email,
    readMask: 'names,emailAddresses,biographies'
  });

  if (response && response.results && response.results.length > 0) {
    var person = response.results[0].person; // Assuming the first result is the desired contact
    var name = (person.names && person.names.length > 0) ? person.names[0].displayName : 'No Name';
    var biography = (person.biographies && person.biographies.length > 0) ? person.biographies[0].value : 'No Biography';
    
    
    Logger.log('Name: ' + name);
    Logger.log('Biography: ' + biography);
  } else {
    Logger.log('No contact found for the provided email.');
  }
}


function rturnLineID(email) {
  // Search for the contact by email
  var response = People.People.searchContacts({
    query: email,
    readMask: 'names,emailAddresses,biographies'
  });

  if (response && response.results && response.results.length > 0) {
    var person = response.results[0].person; // Assuming the first result is the desired contact
    var name = (person.names && person.names.length > 0) ? person.names[0].displayName : 'No Name';
    var biography = (person.biographies && person.biographies.length > 0) ? person.biographies[0].value : 'No Biography';
    
    
    Logger.log('Name: ' + name);
    Logger.log('Biography: ' + biography);
    return biography;
  } else {
    Logger.log('No contact found for the provided email.');
    return "notFound";
  }
}

// Test the function


