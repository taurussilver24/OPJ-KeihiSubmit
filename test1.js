


function writeEmailsToSheet() {
    // Define the array of email addresses
    var emailArray = ["taisei.shirouchi@openstore-japan.com", "yusei.kato@openstore-japan.com", "aoi.takeuchi@openstore-japan.com", "hodaka.saki@openstore-japan.com","ken.yokosawa@openstore-japan.com","mika.ichihashi@openstore-japan.com","ken.hirotsuji@openstore-japan.com","soufuko.tedsuka@openstore-japan.com","sora.mano@openstore-japan.com","shingo.moriki@openstore-japan.com","kairi.jinnai@openstore-japan.com","taichi.nishi@openstore-japan.com","yoshiki.nagashima@openstore-japan.com","mizuki.taira@openstore-japan.com","etsu.ohara@openstore-japan.com","mayu.toyonaga@openstore-japan.com","takahiro.miyamoto@openstore-japan.com","takumi.mimura@openstore-japan.com","yugo.nakaoka@openstore-japan.com","rishit.arora@openstore-japan.com" ];
    // Access the active spreadsheet and the specific sheet named 'emails'
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('emails');
    if (!sheet) {
        // If the sheet does not exist, create it
        sheet = spreadsheet.insertSheet('emails');
    }

    // Prepare the data to be written in the format required by setValues
    var emailData = emailArray.map(function(email) {
        return [email]; // Each email becomes a single-element array
    });

    // Write the email addresses to the sheet starting from cell A1
    sheet.getRange(1, 1, emailData.length, 1).setValues(emailData);
}





function readEmailsFromSheet() {
    // Access the active spreadsheet and the specific sheet named 'emails'
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('emails');
    if (!sheet) {
        throw new Error('Sheet "emails" does not exist.');
    }

    // Determine the range to read based on the number of rows with data
    var lastRow = sheet.getLastRow();
    var range = sheet.getRange(1, 1, lastRow, 1);

    // Read the email addresses from the sheet
    var data = range.getValues();

    // Flatten the array and filter out any empty strings
    var emailArray1 = data.map(function(row) {
        return row[0];
    }).filter(function(email) {
        return email !== '';
    });

    // The emailArray now contains the emails from the sheet
    console.log(emailArray1)
    return emailArray1;
}


