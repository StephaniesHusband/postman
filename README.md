# External API Collection [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/63b9bfe39b5c3b0b9a8c#?env%5BL1%5D=W3siZW5hYmxlZCI6dHJ1ZSwia2V5Ijoic2VydmVyIiwidmFsdWUiOiJzYWJhc2UuaWRldi5mZWRleC5jb206MjQ0MyIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJvcmdJZCIsInZhbHVlIjoiMjYxIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImpvdXJuZXlJZCIsInZhbHVlIjoiNjU4MzMiLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoidHJpZ2dlclRlbXBsYXRlSWQiLCJ2YWx1ZSI6IjY0NDgzIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6InJlcG9ydFR5cGUiLCJ2YWx1ZSI6ImNzdiIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJ0eXBlIiwidmFsdWUiOiJjc3YiLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoicmVwb3J0TmFtZSIsInZhbHVlIjoiam91cm5leVBoYXNlcyIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJzZWFyY2hWYWx1ZSIsInZhbHVlIjoiTUVNIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6Im1lbWJlcklkIiwidmFsdWUiOiI4NTgxIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6InJlcG9ydElkIiwidmFsdWUiOiIzOTgxIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6InVzZXIiLCJ2YWx1ZSI6InFhc2Vuc2Vhd2FyZWw2QGdtYWlsLmNvbSIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJjb21tZW50SWQiLCJ2YWx1ZSI6IjE4Nzc2NCIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJtZW1iZXJPcmdJZCIsInZhbHVlIjoiNzc0MSIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJ0ZW1wbGF0ZUlkIiwidmFsdWUiOiI2OTYyMSIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJkZXZpY2VJZCIsInZhbHVlIjoiODk0MiIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJwYXRoIiwidmFsdWUiOiJzYXNlYy9FQ3VzdG9tZXJTZXJ2aWNlcy9yZXN0L3YxL3Nlc3Npb24iLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoidGltZXN0YW1wIiwidmFsdWUiOiJuZXcgRGF0ZSgpIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImNsaWVudEtleSIsInZhbHVlIjoiRm5SL1FqNEllVnhsUTZyb1NHZXRLWGZzNXZrY2Y4czFVSmdCZTdJTDcvQVJGTVJ3c3psWmNSY1puc3hzU2loSmk4emx5SVFTQXNoeEVOTXh2TTN6TFE9PSIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJNSUNIQUVMU19DTElFTlRfSUQiLCJ2YWx1ZSI6Ik1JQ0hBRUxTIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6Ik1JQ0hBRUxTX1BSSVZBVEVfS0VZIiwidmFsdWUiOiJhYmNkYWJjZDEyMzQxMjM0IiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6Ik5FV0wxT1JHX1BSSVZBVEVfS0VZIiwidmFsdWUiOiIxMjM0MTIzNGFiY2RhYmNkIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6Ik5FV0wxT1JHX0NMSUVOVF9JRCIsInZhbHVlIjoiTkVXTDFPUkciLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoiTU5YX1BSSVZBVEVfS0VZIiwidmFsdWUiOiJhYmNkMTIzNGFiY2QxMjM0IiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6Ik1OWF9DTElFTlRfSUQiLCJ2YWx1ZSI6Ik1OWCIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJ1cmkiLCJ2YWx1ZSI6Ii9zYXNlYy9FQ3VzdG9tZXJTZXJ2aWNlcy9yZXN0L3YxL3Nlc3Npb24/Xz0xNDkyMDA4MjI4Njc2IiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImNsaWVudElkIiwidmFsdWUiOiJNSUNIQUVMUyIsInR5cGUiOiJ0ZXh0In1d)

**NOTE:** If clicking the above link does not open or prompt you to run the External API collection in your Postman client,
you can click [here](https://www.getpostman.com/api/collections/63b9bfe39b5c3b0b9a8c) to download the JSON directly and
import it into your Postman client.

## crypto-js
Is included in the Postman Sandbox as `CryptoJS`.

## sapostman-js

I have created a new "plugin" to help abstract the encryption process so that we can create more succinct and resuable test
cases. Pull in the "plugin" using the Postman global variable 'hack' as the first statement of any test case.
 
```js
eval(postman.getGlobalVariable("module:sapostman-js"));

// ...your script contents...
```
This file can be obtained from my [github site](https://github.com/StephaniesHusband/postman). You can also use the "Fetch
SAPostmanJS" test case to automatically obtain the "plugin". You only need to do this once or if you happen to delete your
global variable "module:sapostman-js". The "plugin" needs to be in a Postman global variable named `module:sapostman-js`.

After calling the `eval` above, you will have access to the `SAPostmanJS` namespace via `this.SAPostmanJS`.
```js
this.SAPostmanJS.createTransaction(...);
```

The only function in the "plugin" currently is `createTransaction`. It takes several parameters and some can be optional
based upon what kind of test case you are running. See details below.

## Login Test Cases
You can have several login test cases so that you can login as different users/organizations--each will be specific to that
user and/or organization.

### Body
Each Login test case requires you enter the user credentials in the "Body" tab in JSON format:

Example of "Body" contents:
```json
{
  "user": "christophe.mckinnon@fedex.com",
  "password": "senseAware1"
}
```

### Pre-request Script
Each Login test case also requires you to set up the organizational information in the "Pre-request Script" tab. Using
`SAPostmanJS` makes this super simple.

Example of "Pre-request Script using SAPostmanJS:
```js
eval(postman.getGlobalVariable("module:sapostman-js"));

this.SAPostmanJS.createTransaction({
    endpoint:    "session",
    clientId:    "NEWL1ORG",
    privateKey:  "12341234abcdabcd"
});

```

For Login test cases, you need to pass in the endpoint `session`, and the specific organizational information that you want
to login into in the variables `clientId` and `privateKey`.  These must match the specific organization that you want to log
into and the user you specfied in the body needs to be a member of that org and have permission to use the External API.

## Other Test Cases

All other (non Login) test cases can now also use `createTransaction` but they do not have to specify the `clientId` and
`privateKey` again! This makes it super easy to develop generic test cases that can be run against whatever user/org you just
logged into.

**An example** test case to pull a list of an org's devices using SAPostmanJS looks like this:

```js
eval(postman.getGlobalVariable("module:sapostman-js"));

this.SAPostmanJS.createTransaction({
    endpoint: "device"
});
```
_This is assuming you have previously made a login call and logged into a specific user/org._  You can, however, specify and
"override" the stored `clientId` and `privateKey` stored by the Login test case by specifying them in your non-login test
case.

**Another example** test case to pull a specific devices details using SAPostmanJS:

```js
eval(postman.getGlobalVariable("module:sapostman-js"));

var deviceName = postman.getEnvironmentVariable("deviceName");

this.SAPostmanJS.createTransaction({
    endpoint: "device/"+deviceName
});
```

This test case assumes there is an environment variable named `deviceName` and creates the specifc endpoint.

**_HANDY TIP!_** You can create a post-transactional script in the "Test" tab of your "device list" call that will save off a
random device name of those returned so that it can be used in subsequent "device details" test cases.

```js
if (responseBody !== "Request failed.") {
    
    var response = JSON.parse(responseBody);
    
    if (response.statusCode === "03000") {
        var randomIndex = _.random(0, response.devicesSummary.length-1);
        postman.setEnvironmentVariable("deviceName", response.devicesSummary[randomIndex].deviceName);
    }
}

// Clean up
postman.clearEnvironmentVariable("clientKey");
```
