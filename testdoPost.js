function testDoPost(lineID,date,time,name,month) {
  // Mock data structure for the 'e' object
  // lineID="64fc6341-e94a-4b8a-14b3-04c1b2ef3951"
  let d = {
  "parameters": {},
  "contentLength": 178,
  "parameter": {},
  "postData": {
    "contents": `{"type":"message","source":{"userId":"${lineID}","domainId":400325385},"issuedTime":"2023-11-02T10:18:52.749Z","content":{"type":"text","text":"Hdjd"}}`,
    "length": 178,
    "name": "postData",
    "type": "application/json"
  },
  "contextPath": "",
  "queryString": ""
};

  doPost(d,date,time,name,month);  // Calling the doPost function with mock data
}

function testDoPost1(lineID,name,month) {
  // Mock data structure for the 'e' object
  // lineID="64fc6341-e94a-4b8a-14b3-04c1b2ef3951"
  let d = {
    "parameters": {},
    "contentLength": 178,
    "parameter": {},
    "postData": {
      "contents": `{"type":"message","source":{"userId":"${lineID}","domainId":400325385},"issuedTime":"2023-11-02T10:18:52.749Z","content":{"type":"text","text":"Hdjd"}}`,
      "length": 178,
      "name": "postData",
      "type": "application/json"
    },
    "contextPath": "",
    "queryString": ""
  };

  doPost1(d,name,month);  // Calling the doPost function with mock data
}


//TAISEI SENPAI,{"contextPath":"","parameters":{},"parameter":{},"contentLength":224,"queryString":"","postData":{"contents":"{\"type\":\"message\",\"source\":{\"userId\":\"da82d46f-e9a7-4d49-16fc-043341d69305\",\"channelId\":\"a7fe4302-af81-2f44-3951-2d8b8d2166df\",\"domainId\":400325385},\"issuedTime\":\"2023-11-02T10:34:28Z\",\"content\":{\"type\":\"text\",\"text\":\"あ\"}}","length":224,"name":"postData","type":"application/json"}}

//toshiki:{"queryString":"","parameter":{},"contentLength":233,"contextPath":"","parameters":{},"postData":{"contents":"{\"type\":\"message\",\"source\":{\"userId\":\"d2758fb3-0d27-43fa-1751-04d8cefe64a6\",\"channelId\":\"a7fe4302-af81-2f44-3951-2d8b8d2166df\",\"domainId\":400325385},\"issuedTime\":\"2023-11-09T08:08:45.31Z\",\"content\":{\"type\":\"text\",\"text\":\"あああ\"}}","length":233,"name":"postData","type":"application/json"}}

function testDoPost2(lineID) {
  // Mock data structure for the 'e' object
  // lineID="64fc6341-e94a-4b8a-14b3-04c1b2ef3951"
  let d = {
  "parameters": {},
  "contentLength": 178,
  "parameter": {},
  "postData": {
    "contents": `{"type":"message","source":{"userId":"${lineID}","domainId":400325385},"issuedTime":"2023-11-02T10:18:52.749Z","content":{"type":"text","text":"Hdjd"}}`,
    "length": 178,
    "name": "postData",
    "type": "application/json"
  },
  "contextPath": "",
  "queryString": ""
};

  doPost3(d);  // Calling the doPost function with mock data
}


//TAISEI SENPAI,{"contextPath":"","parameters":{},"parameter":{},"contentLength":224,"queryString":"","postData":{"contents":"{\"type\":\"message\",\"source\":{\"userId\":\"da82d46f-e9a7-4d49-16fc-043341d69305\",\"channelId\":\"a7fe4302-af81-2f44-3951-2d8b8d2166df\",\"domainId\":400325385},\"issuedTime\":\"2023-11-02T10:34:28Z\",\"content\":{\"type\":\"text\",\"text\":\"あ\"}}","length":224,"name":"postData","type":"application/json"}}

//toshiki:{"queryString":"","parameter":{},"contentLength":233,"contextPath":"","parameters":{},"postData":{"contents":"{\"type\":\"message\",\"source\":{\"userId\":\"d2758fb3-0d27-43fa-1751-04d8cefe64a6\",\"channelId\":\"a7fe4302-af81-2f44-3951-2d8b8d2166df\",\"domainId\":400325385},\"issuedTime\":\"2023-11-09T08:08:45.31Z\",\"content\":{\"type\":\"text\",\"text\":\"あああ\"}}","length":233,"name":"postData","type":"application/json"}}
