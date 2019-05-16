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
         createTransaction: function(opts) {
            var clientKey;
            var encrypted;
            var clientName;

            var uri = _.template('/sasec/ECustomerServices/rest/v1/<%=endpoint%>?_=<%=timestamp%>')({
               endpoint: opts.endpoint,
               timestamp: (new Date().getTime())
            });

            pm.environment.set("uri", uri);

            if (opts.clientKey) {
               clientKey = opts.clientKey;

               pm.environment.set("clientKey", clientKey);
            }
            else {
               clientKey = pm.environment.get("clientKey");
            }

            if (clientKey) {
               encrypted = CryptoJS.AES.encrypt(uri, CryptoJS.enc.Base64.parse(clientKey), {
                  iv: CryptoJS.enc.Hex.parse("0000000000000000"),
                  keySize: 16,
                  mode: CryptoJS.mode.CBC,
                  padding: CryptoJS.pad.Pkcs7
               });

               if (opts.clientName) {
                  clientName = opts.clientName;

                  pm.environment.set("clientName", clientName);
               }
               else {
                  clientName = pm.environment.get("clientName");
               }

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
