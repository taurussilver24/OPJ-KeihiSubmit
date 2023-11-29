// function doPost(e) {
 
  
//   // if (e == null || e.postData == null || e.postData.contents == null) return
//   let requestJSON = e.postData.contents
//   let requestObj = JSON.parse(requestJSON)
//   // let text = requestObj.content.text // 応答メッセージ（今回はオウム返し）
//   // let text = name + "さん、" + month + " 経費提出フォーム送信ありがとうございました。\n" 
//   // let text = name + "さん、**" + month + "**経費提出フォーム送信ありがとうございました。\n";
//   let text = JSON.stringify(requestObj, null, 2);

//   let env = lgetEnv_()
//   env.userId = requestObj.source.userId
//   console.log(env.userId)

//   // LINE WORKS にメッセージを送信
//   LINEWORKS.userMessageSend(env, text)
// }

function doPost2(e){
  let requestJSON = e.postData.contents
  let requestObj = JSON.parse(requestJSON)
  // let text = requestObj.content.text // 応答メッセージ（今回はオウム返し）
  // let text = name + "さん、" + month + " 経費提出フォーム送信ありがとうございました。\n" 
  // // let text = name + "さん、**" + month + "**経費提出フォーム送信ありがとうございました。\n";
  // let text = JSON.stringify(requestObj, null, 2);
  let text = requestObj.source.file
  let env = lgetEnv_()
  env.userId = requestObj.source.userId
  console.log(env.userId)

  // LINE WORKS にメッセージを送信
  LINEWORKS.userMessageSend(env, text)

}

function lgetEnv_() {
  return {
    CLIENT_ID: "ph3JB3Ul870sQaDgTBjz",
    CLIENT_SECRET: "q2hlS7iOpq",
    SERVICE_ACCOUNT: "1bt53.serviceaccount@openstorecoltd",
    PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgI53X2Hbo5n7BVCx7C/wbirK4D7R8NN+p00iCfoOn+rdTzYTidUjreTe2t1yzMXPpvpsKAdnMac9p5M63VL79HrolD2eWRR1iMJTjJFVTlBXpj6iqdL5r8igQUYe4vIANw9JCBoG7MBHd4t1LUL2Nz5MqBxm5KMVsOzF16NQnpjgO/m7U3euEXpDM2JjNeLKxb/CI/JlvRviGWut/FUCiM0u7gklVq0iMxKcF4JWqG9naMsypgbc4xqK3GS+F0u+UcXshCXlwbqwy4HW5UcBRbFTwD4kYyV65MXfWDt6/sh+XXrLp8Di/rd/plamaxws/hAbQ8psklqo96rrQTiO7AgMBAAECggEANPPyEtjCYTsuuPEDkGCjKdxQQqr2zIeTWg3CkVwSXu55xp1UDqonxa2cra+uWJbGtIlRrRp1kbF/Y43EiTzdtsd9WBni7/7Eu55C7WUrTerO4B+f71WRThKSCutazMyQL30MPsb2CRbZIZ0N/gSh2Y3FJQWaDO8dcS+VqF6oIL/AJHoW/458t7hpK9TiHlhr26dFUqeCXcjJwL4H06kaEwI/B4xQelSph8Gl3IWVO7FL5T9Tmo/1vOhie5AWLgqBggpSI1Bp6vsY0k3EsCQEEec320mjwjuMx6+5+pR3xlqpYtiR4qmYTaxqIgHP82tumLsxpXcZG42kg6CnkEME4QKBgQDlLvZ6+HylPBAFi4pxKeqLBMavMOOKzLCrMIt5Eu/tWAfj0v3VxuZmaCUWW74yHm9FQQkvlS0XCM7Atg0l+99sgWNrtpj8BeSSKoV58S5WJJ5cjfHPXcwrnlw4+WwcuEm/uKaXVBKZrWULRzbpNnJjLTF6FHQJx5HhH+cVWBpe0QKBgQCy4HoqxZ9TOiEx7xkLSPFq2q7j7Xm8FQ2woRLbbpqPmAmGk8pTOsnky8mKkSsM+f1c3q337EEPUGTCQ1vNRG9vmaGCHNtWANYb5/sS3ZIWpWZ6rMfF/m0LkFfLkzBeRSMtR9gBjv8lqnOMfLX6uM0UCmkDfyP9mS90FXu2L5q0ywKBgQCZWc87gUGGHqZpz3EXP4Dc/JklaIUYvtYH9jedD/rSyXCeFPQcMza/lzgZudGOH6c8o8PNvveozg/qCubJX7ukEv+/dzLuj9Ldqu4dJjBnG6GLNL90jcKr/Q6gYOTiYr2WN6vg3jSD9+4Ameo4KmJn0jmlAkKSuKL4DCzHr2gVwQKBgGxeQqUXBOdPGD1ANVP45QlvYvUDMfUYbCrN6ra10z2bRmoZr0GtJBNQwtEIEaTS7wQMhCjnIKM+eUyXsk4xX7GkyYwiH1+DMjPF3v4W7iJ6IhPACWeSNE4FLKtQiMUT7bPJCrwm/by7/zTlePpkaxnxFJ3hsNQ6sd0KBuDhBkDxAoGAASE8SGAzgeCEItOl7ft6ww0Rp/xvaA/DqaXO3syq5FnOtepGtzL3wJQGnGsBdfaYgkNx+yWLFAIcieEc6GEKcRAxwjiObF8fgS+qdmeuru3sux9VdorLGVEYZhvU6HIwIpTH1ytKAS8fLoOgQ521a4lssud9Cdxv0v2z4fkTs74=\n-----END PRIVATE KEY-----",
    DOMAIN_ID: 400325385,
    ADMIN_ID: "rishit.arora@openstorecoltd",
    BOT_ID: 6883299
  }
}

