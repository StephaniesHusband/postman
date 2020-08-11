;(function (root, factory) {
   if (typeof exports === "object") {
      module.exports = exports = factory();
   }
   else if (typeof define === "function" && define.amd) {
      define([], factory);
   }
   else {
      root.SAPostmanJS = factory();
   }
}(this, function() {
   var SAPostmanJS = SAPostmanJS || (function() {
      return {
         // Use this function to create a SenseAware transaction in the appropriate format.  Valid parameters:
         //    opts: {
         //       endpoint  : {String} - SenseAware endpoint (and just the endpoint [not path]) you want to call
         //       clientKey : {String} - Base64 encoded unique key assigned to YOUR clientName by the SenseAware team
         //       clientName: {String} - YOUR unique API clientName (e.g., SCOTTERWIN)
         //    }
         createTransaction: function(opts) {
            var clientKey;
            var encrypted;
            var clientName;

            // Create the path to the SenseAware endpoint you want to call appending a unique timestamp value.
            var path = _.template('/sasec/ECustomerServices/rest/v1/<%=endpoint%>?_=<%=timestamp%>')({
               endpoint: opts.endpoint,
               timestamp: (new Date().getTime())
            });

            // Save the path for use in subsequent Postman collection requests
            pm.environment.set("path", path);

            // If clientKey (e.g., the unique encoded identifier supplied by SenseAware) is passed in, use it, else assume
            // it's already defined and pull from environment.
            if (opts.clientKey) {
               clientKey = opts.clientKey;

               // Save the clientKey for use in subsequent Postman collection requests
               pm.environment.set("clientKey", clientKey);
            }
            else {
               clientKey = pm.environment.get("clientKey");
            }

            // If we have a clientKey, we can proceed...
            if (clientKey) {
               pm.globals.set("DecodedClientKey", CryptoJS.enc.Base64.parse(clientKey));
               
               // Encrypt the entire path using the clientKey...
               encrypted = CryptoJS.AES.encrypt(path, pm.globals.get("DecodedClientKey"), {
                  iv: CryptoJS.enc.Hex.parse("0000000000000000"),
                  keySize: 16,
                  mode: CryptoJS.mode.CBC,
                  padding: CryptoJS.pad.Pkcs7
               });

               // If the clientName (e.g., SCOTTERWIN) was passed in, use it, else assume it's already defined and pull from
               // environment.
               if (opts.clientName) {
                  clientName = opts.clientName;

                  // save the clientName for use in subsequent Postman collection requests
                  pm.environment.set("clientName", clientName);
               }
               else {
                  clientName = pm.environment.get("clientName");
               }

               // If we have a clientName, we can proceed to set the encryptedEnpoint that will be used in our Collection
               // call. Be sure to Base64 encode it!
               if (clientName) {
                  pm.environment.set("encryptedEndpoint", encrypted.ciphertext.toString(CryptoJS.enc.Base64));
               }
               else {
                  console.log("ERROR: No clientName");
               }
            }
            else {
               console.log("ERROR: No clientKey");
            }
         }
      };
   }());

   return SAPostmanJS;
}));
