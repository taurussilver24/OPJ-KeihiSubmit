function sendReminder(){
  var month = "2023年12月"
  
  
  let emails = readEmailsFromSheet();
  
  for (let i = 0; i < emails.length; i++) {
    try {
      let name =  searchconemail(emails[i]);
      let lid =  rturnLineID(emails[i]);
      testDoPost1(lid, name, month);
    } catch (error) {
      console.error('Error processing email:', emails[i], error);
    }
  }

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}