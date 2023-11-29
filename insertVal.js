/**
 * Inserts a value into a specified cell in a Google Sheet.
 *
 * @param {string} value - The value to be inserted.
 * @param {string} columnName - The name of the column.
 * @param {string} rowName - The name of the row.
 * @param {Sheet} sheet - The Google Sheet object.
 */
function insertValueIntoCell(value, columnName, rowName, sheet) {
  // Find the column number
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const columnIndex = headers.indexOf(columnName) + 1;
  if (columnIndex === 0) {
    throw new Error('Column name not found');
  }

  // Find the row number
  const rows = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
  let rowIndex = rows.findIndex(row => row[0] === rowName) + 1;
  if (rowIndex === 0) {
    throw new Error('Row name not found');
  }

  // Insert the value
  sheet.getRange(rowIndex, columnIndex).setValue(value);
}


function test(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var kanrisheet = spreadsheet.getSheetByName('経費管理')
  insertValueIntoCell('2000','2023年12月','RISHIT ARORA',kanrisheet)
}
