;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
      root.SAPostmanJS = factory();
	}
}(this, function() {
   var SAPostmanJS = SAPostmanJS || (function() {
      return {
         createTransaction: function(opts) {
            var _clientKey;
            var _encrypted;
            var _clientName;

            // Create our uri to hit and encode.
            var uri = _.template('/sasec/ECustomerServices/rest/v1/<%=endpoint%>?_=<%=timestamp%>')({
               endpoint: opts.endpoint,
               timestamp: (new Date().getTime())
            });

            // Set the uri in our address above
            postman.setEnvironmentVariable("uri", uri);

            // Did they pass in a private key?
            if (opts.clientKey) {
               // This key should be Base64 encoded
               _clientKey = opts.clientKey;

               // Save the encoded private key encoded for subsequent calls
               postman.setEnvironmentVariable("clientKey", _clientKey);
            }
            else {
               // Get the stored encoded clientKey
               _clientKey = postman.getEnvironmentVariable("clientKey");
            }

            if (_clientKey) {
               // We must decode every time on the fly since Postman doesn't like us storing the decoded byte array in
               // variable.
               _encrypted = CryptoJS.AES.encrypt(uri, CryptoJS.enc.Base64.parse(_clientKey), {
                  iv: CryptoJS.enc.Hex.parse("0000000000000000"),
                  keySize: 16,
                  mode: CryptoJS.mode.CBC,
                  padding: CryptoJS.pad.Pkcs7
               });

               // Set the SA_SIGNATURE values
               if (opts.clientName) {
                  // Usually only comes in on a login transaction
                  _clientName = opts.clientName;

                  // Save the clientName for subsequent calls
                  postman.setEnvironmentVariable("clientName", _clientName);
               }
               else {
                  // Get the stored clientName
                  _clientName = postman.getEnvironmentVariable("clientName");
               }

               if (_clientName) {
                  postman.setEnvironmentVariable("clientKey", _encrypted.ciphertext.toString(CryptoJS.enc.Base64));
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
