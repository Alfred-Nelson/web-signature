"use server";

import validationSchema from "@/app/utils/validationSchema";
import { google } from "googleapis";

async function getSheetIdByName(sheets, spreadsheetId, sheetName) {
  try {
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "sheets.properties",
    });
  
    const sheet = response.data.sheets?.find(
      (s) => s.properties?.title === sheetName
    );
    return sheet?.properties?.sheetId;
  } catch(e) {
    throw e
  }
}

/**
 *
 * @param {FormData} formData
 */
function formToValues(formObj, keys) {

  const result = validationSchema.contactPage.safeParse(formObj);

  if (!result.success) {
    throw result.error
  }

  let formVals = []

  if(!!keys) {
    keys.forEach(each => {
      const val = formObj[each]
      formVals.push(val)
    })
  } else {
    formVals = [
      formObj?.name,
      formObj?.phone.replace(/[^0-9+]/g, ''),
      formObj?.email,
      new Date().toLocaleDateString(),
      formObj?.course,
      formObj?.extra,
    ];
  }

  const white = {
    red: 1.0, // Approximately 220/255
    green: 1.0,
    blue: 1.0,
    alpha: 1.0, // Fully opaque
  };

  return formVals.map((each) => ({
    userEnteredValue: { stringValue: each },
    userEnteredFormat: {
      backgroundColor: white,
      textFormat: {
        fontSize: 12,
      }
    },
  }));
}

export async function insertContactToSheet(formData) {
  try {
    const googleCreds = process.env.G_SERVICE_ACCOUNT_CRED;
    const spreadsheetId = process.env.CONTACT_SPREADSHEET_ID;
    const submissionSheetName = "submissions";
    const inferenceSheetName = "infer";

    if (!googleCreds) {
      throw new Error("Contact handler not found");
    }
    if (!spreadsheetId) {
      throw new Error("Contact handler workspace not found");
    }

    console.log("hello", JSON.stringify(JSON.parse(googleCreds)), JSON.parse(googleCreds).private_key)

    const gAuth = new google.auth.GoogleAuth({
      credentials: JSON.parse(googleCreds),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const gAuthClient = await gAuth.getClient();

    const glSheets = google.sheets({ version: "v4", auth: gAuthClient });

    const submissionSheet = await getSheetIdByName(
      glSheets,
      spreadsheetId,
      submissionSheetName
    );
    
    const inferenceSheet = await getSheetIdByName(
      glSheets,
      spreadsheetId,
      inferenceSheetName
    );

    console.log(JSON.stringify({submissionSheet, inferenceSheet}), "china")

    const insertRowRequest_submission = {
      insertDimension: {
        range: {
          sheetId: submissionSheet,
          dimension: "ROWS",
          startIndex: 1, // Insert at index 1 (which is row 2)
          endIndex: 2, // End index is exclusive, so startIndex 1, endIndex 2 means 1 row at index 1
        },
        inheritFromBefore: false,
      },
    };

    const insertRowRequest_infer = {
      insertDimension: {
        range: {
          sheetId: inferenceSheet,
          dimension: "ROWS",
          startIndex: 1, // Insert at index 1 (which is row 2)
          endIndex: 2, // End index is exclusive, so startIndex 1, endIndex 2 means 1 row at index 1
        },
        inheritFromBefore: false,
      },
    }

    const updateCellsRequest_submission = {
      updateCells: {
        start: {
          sheetId: submissionSheet,
          rowIndex: 1, // Start at the newly inserted row's index (index 1 / row 2)
          columnIndex: 0, // Starting at column A (index 0)
        },
        rows: [
          {
            values: formToValues(formData)
          }
        ],
        fields: 'userEnteredValue,userEnteredFormat.backgroundColor,userEnteredFormat.textFormat.fontSize',
      }
    }
    
    const updateCellsRequest_infer = {
      updateCells: {
        start: {
          sheetId: inferenceSheet,
          rowIndex: 1, // Start at the newly inserted row's index (index 1 / row 2)
          columnIndex: 0, // Starting at column A (index 0)
        },
        rows: [
          {
            values: formToValues(formData, ["name"])
          }
        ],
        fields: 'userEnteredValue,userEnteredFormat.backgroundColor,userEnteredFormat.textFormat.fontSize',
      }
    }

    const batchUpdateRequest = {
      spreadsheetId: spreadsheetId,
      resource: {
        requests: [
          insertRowRequest_submission,
          updateCellsRequest_submission,
          insertRowRequest_infer,
          updateCellsRequest_infer,
        ],
      },
    };

    console.log("\n\nchina insertRowRequest START \n\n" + JSON.stringify({ batchUpdateRequest }) + "\n\nchina insertRowRequest END \n\n")

    const response = await glSheets.spreadsheets.batchUpdate(batchUpdateRequest)

    console.log("\n\nchina insertRowRequest START \n\n" + JSON.stringify({ response }) + "\n\nchina insertRowRequest END \n\n")

    return { success: true, data: response.data };

  } catch (error) {
    console.log("\n\n china \n\nError from here .... ")
    console.log(JSON.stringify(error))
    console.log("Hello china \n\n")
    console.error('Error inserting row with style:', error);
    return { success: false, error: error };
  }
}

export async function logInConsole(formData) {
  Object.entries(formData).forEach(each => {
    console.log(each[0] + ": " + each[1], "backend china")
  })
  return { success: true, data: null }
}
