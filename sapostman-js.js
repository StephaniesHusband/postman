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
            var _clientKey;
            var _encrypted;
            var _clientName;

            console.log(opts);

            var uri = _.template('/sasec/ECustomerServices/rest/v1/<%=endpoint%>?_=<%=timestamp%>')({
               endpoint: opts.endpoint,
               timestamp: (new Date().getTime())
            });

            pm.variables.set("uri", uri);

            if (opts.clientKey) {
               _clientKey = opts.clientKey;

               pm.variables.set("clientKey", _clientKey);
            }
            else {
               _clientKey = pm.variables.get("clientKey");
            }

            if (_clientKey) {
               _encrypted = CryptoJS.AES.encrypt(uri, CryptoJS.enc.Base64.parse(_clientKey), {
                  iv: CryptoJS.enc.Hex.parse("0000000000000000"),
                  keySize: 16,
                  mode: CryptoJS.mode.CBC,
                  padding: CryptoJS.pad.Pkcs7
               });

               if (opts.clientName) {
                  _clientName = opts.clientName;

                  pm.variables.set("clientName", _clientName);
               }
               else {
                  _clientName = pm.variables.get("clientName");
               }

               if (_clientName) {
                  pm.variables.set("encryptedEndpoint", _encrypted.ciphertext.toString(CryptoJS.enc.Base64));
               }
               else {
                  throw "No clientName";
               }
            }
            else {
               throw "No clientKey";
            }
         }
      };
   }());

   return SAPostmanJS;
}));
