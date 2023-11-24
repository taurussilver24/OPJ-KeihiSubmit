
function onFormSubmit(e) {
  console.log(e.values);
  console.log(e.values[2]);

  // Split the string of URLs into an array, using ', ' as the delimiter
  var driveLinks = e.values[2].split(', ');

  moveFilesToDesignatedFolder(driveLinks);
}

function moveFilesToDesignatedFolder(driveLinks) {
  // Access the DriveApp service
  var drive = DriveApp;
  var FOLDER_ID = "1oBiiGEsvCHbeTKPu_-WtKGKvQ0dS4xJx"; // Folder ID
  
  // Generate a unique name for the new folder by appending a timestamp
  var folderName = "TESTTEJFHS_" + new Date().toISOString();
  var folder = drive.getFolderById(FOLDER_ID);
  
  // Create a new folder inside the parent folder
  var newFolder = folder.createFolder(folderName);

  // Iterate through the Drive links
  for (var i = 0; i < driveLinks.length; i++) {
    try {
      var driveLink = driveLinks[i].trim(); // Trimming extra whitespace
      var match = driveLink.match(/id=([^&]+)/); // Adapted regex
      
      // Check for invalid Drive link format and log a warning if necessary
      if (!match) {
        console.log("Invalid Drive link format at index " + i + ": " + driveLink);
        continue;  // Skip to the next iteration
      }

      var fileId = match[1];
      var file = drive.getFileById(fileId);
      
      console.log(fileId);
      
      // Simplifying the file moving logic
      newFolder.createFile(file.getBlob());
      file.setTrashed(true);
      
    } catch (e) {
      console.log("Error processing file at index " + i + ": " + e.toString());
    }
  }
}




// function onFormSubmit(e) {

//   NOTIFICATION_MAIL = "rishit.arora@openstore-japan.com"

//   const lock = LockService.getScriptLock();

//   // 以下 try catch
//   try {
//     // ロックを取得する
//     if (lock.tryLock(10 * 1000)) {
      

//     console.log(e.values)
//     var month = "12月2023"
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(month);
    
//     var name =searchconemail(e.values[7])
//     var userid = rturnLineID(e.values[7])
//     var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//     var emailsheet = spreadsheet.getSheetByName('emails');
//     if (!emailsheet) {
//       throw new Error('Sheet "emails" does not exist.');
//     }
//     // Get the email address from the form submission
//     var submittedEmail = e.values[7]; // assuming this is the email field
//     // Determine the range to read based on the number of rows with data
//     var lastRow = emailsheet.getLastRow();
//     var range1 = emailsheet.getRange(1, 1, lastRow, 1);
//     var data = range1.getValues();
//     // Find the email in the sheet and delete it if found
//     for (var i = 0; i < data.length; i++) {
//       if (data[i][0] === submittedEmail) {
//         emailsheet.deleteRow(i + 1); // Rows are 1-indexed in Google Sheets
//         break; // Stop the loop after finding the email
//       }
//     }
//     // Find and remove the matching email

    
    
//     inputString = e.values[3];
//     let days = inputString.replace(/'/g, '').split(',').map(day => day.trim());
//     console.log(days); // Output: ["1","2","3"]...

//     var colNu = findCell(name,sheet);
//     var rowNu = findCellRow(days) 
//     console.log(rowNu)
//     var time = shiftTime(e.values[4],e.values[5]);
//     console.log(time);
//     var limitRow = 16
//     console.log(limitRow)


    


//     if (e.values[2] == "前半") {
//       // Run the setValueInRowsPre function
//       setValueInRowsPre(sheet, colNu, time, rowNu, 16);
//     } else if (e.values[2] == "後半") {
//       // Run the setValueInRowsPost function
//       setValueInRowsPost(sheet, colNu, time, rowNu, 17);
//     }
//     if(e.values[6] != ""){
//       setCellValue(processForm(e.values[6]),colNu,sheet)
//     }
    
//     testDoPost(userid,days,time,name,month)

    

    
      

//       // スクリプトの実行者のフルネームを取得
    
      

//     //var cal = CalendarApp.getCalendarById(e.values[1]);
//     //var title = "出社";// 予定の名前
    
//       // 年入力短縮する場合
//       // var baseTime = new Date(base.setFullYear(2021));
//       //var startTime = e.values[2];
//       //let endTime = e.values[3];
//     //var option="";
//     //cal.createEvent(title, startTime, endTime, option);
//       // スプレッドシートの情報を取得
      
// 　　　 // B3:Bからのスプレッドシートの情報を取得
//       //var sheetDates = sheet.getRange('B3:B').getValues();

//       // 一番下の文から一個上のデータを取得
//       //var last_row = sheet.getLastRow() - 1;

//       // 日付を配列化する。
//       //var sheetDatesList = Array.prototype.concat.apply([], sheetDates);

//       /*if (e.values[5] == '') {
//         // 日付を指定のフォーマット文字列に変換する。(日本時間に変更したうえで、月/日に変換。)
//         date = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'MM/dd');
//         console.log("自動 :" + date);
//       } else {
//         var date = Utilities.formatDate(new Date(e.values[5]), 'Asia/Tokyo', 'MM/dd');
//         console.log("入力 :" + date);
//       }*/

//       /*for (var i = 0; i < last_row; i++) {
//         var sheetDate = Utilities.formatDate(new Date(sheetDatesList[i]), 'Asia/Tokyo', 'MM/dd');

//         if (sheetDate == date) {
//           sheet.getRange(i + 3, 4).setValue(e.values[2]);
//           sheet.getRange(i + 3, 5).setValue(e.values[3]);
//           sheet.getRange(i + 3, 6).setValue(e.values[4]);
//           if (e.values[6] == "はい") {
//             sheet.getRange(i + 3, 8).setValue("有給休暇");
//           }

//           return console.log("完了しました");
//         }
//       }*/
//     }

    
//   } catch (error) {
//     console.error(printError(error));
//   } finally {
//     // ロック開放
//     lock.releaseLock();
//   }
// }


// function findCell(findText, sheet) {
//   var SHTvalues = sheet.createTextFinder(findText).findAll();
//   var result = SHTvalues.map(r => ({row: r.getRow(), col: r.getColumn()}));
//   var result1 = SHTvalues.map(r => ({ col: r.getColumn()}));
//   var cols = SHTvalues.map(function (r) { return r.getColumn(); });
//   return parseInt(cols);
// }


// function processForm(st) {
//   var values = st.split(", ");
//   var numbers = [];
//   for (var i = 0; i < values.length; i++) {
//     numbers.push(parseInt(values[i]));
//   }
//   // code to process the numbers array
//   console.log(numbers)
//   return numbers
// }



 
// function findCellRow(days) {
//   var rows = days.map(day => parseInt(day) + 1); // add 1 to each element of the days array
//   return rows;
// }


// /*function setValueInRows(rows, sheet, colNum, value) {
//   rows.forEach(function(row) {
//     sheet.getRange(row, colNum).setValue(value);
//   });
// /*/

// function setValueInRowsPre(sheet, colNum, value, rows, limitRow) {
//   rows.forEach(function(row) {
//     if (row <= limitRow) {
//       var cell = sheet.getRange(row, colNum);
//       cell.setValue(value);
//       cell.setBackground("white");
//     }
//   });
// }

// function convertArrayToDateArray(inputArray, year, month) {
//   var dateArray = [];
//   for (var i = 0; i < inputArray.length; i++) {
//     var day = inputArray[i];
//     var dateString = year + "/" + month + "/" + (day < 10 ? "0" : "") + day;
//     dateArray.push(dateString);
//   }
//   return dateArray;
// }


// function setValueInRowsPost(sheet, colNum, value, rows, startRow) {
//   rows.forEach(function(row) {
//     if (row >= startRow) {
//       var cell = sheet.getRange(row, colNum);
//       cell.setValue(value);
//       cell.setBackground("white");
//     }
//   });
// }



// function convertShiftTime(start_time, end_time) {
//   var start_time_obj = new Date("01/01/2021 " + start_time);
//   var end_time_obj = new Date("01/01/2021 " + end_time);

//   if (end_time_obj.getTime() < start_time_obj.getTime()) {
//     // Add 1 day to end time if it's before start time
//     end_time_obj.setDate(end_time_obj.getDate() + 1);
//   }

//   var start_time_str = Utilities.formatDate(start_time_obj, "JST", "HH:mm");
//   var end_time_str = Utilities.formatDate(end_time_obj, "JST", "HH:mm");

//   var result_str = start_time_str + "〜" + end_time_str;
//   return result_str;
// }


// function shiftTime(s,e){


// var start_time = s
// var end_time = e
// var result = convertShiftTime(start_time, end_time);
// return result; // Output: 10時~15時

// }

// function padArray(inputArray) {
//   // Initialize an empty array to hold the padded values
//   var paddedArray = [];
  
//   // Loop through the input array and pad each element with leading zeros
//   for (var i = 0; i < inputArray.length; i++) {
//     var paddedValue = inputArray[i].toString().padStart(2, '0');
//     paddedArray.push(paddedValue);
//   }
  
//   // Return the padded array
//   return paddedArray;
// }

// function setCellValue(numbers, colNum, sheet) {
//   for (var i = 0; i < numbers.length; i++) {
//     var cell = sheet.getRange(numbers[i]+1, colNum);
//     cell.setValue("休み");
//     cell.setBackground('#cccccc');
//   }
// }


// function printError(error) {
//   // エラーの時の処理
//   var mailTitle = "エラー通知";
//   var mailText = "シフト提出フォーム\n\n" +
//     "[名前] " + error.name + "\n\n" +
//     "[場所] " + error.fileName + "(" + error.lineNumber + "行目)\n\n" +
//     "[メッセージ]" + error.message + "\n\n" +
//     "[StackTrace]\n" + error.stack;

//   GmailApp.sendEmail(NOTIFICATION_MAIL, mailTitle, mailText);

//   return "[名前] " + error.name + "\n" +
//     "[場所] " + error.fileName + "(" + error.lineNumber + "行目)\n" +
//     "[メッセージ]" + error.message + "\n" +
//     "[StackTrace]\n" + error.stack;
// }