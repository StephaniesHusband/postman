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
            var _privateKey;
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
            if (opts.privateKey) {
               // This key should be Base64 encoded
               _privateKey = opts.privateKey;

               // Save the encoded private key encoded for subsequent calls
               postman.setEnvironmentVariable("privateKey", _privateKey);
            }
            else {
               // Get the stored encoded privateKey
               _privateKey = postman.getEnvironmentVariable("privateKey");
            }

            if (_privateKey) {
               // We must decode every time on the fly since Postman doesn't like us storing the decoded byte array in
               // variable.
               _encrypted = CryptoJS.AES.encrypt(uri, CryptoJS.enc.Base64.parse(_privateKey), {
                  iv: CryptoJS.enc.Hex.parse("0000000000000000"),
                  keySize: 16,
                  mode: CryptoJS.mode.CBC,
                  padding: CryptoJS.pad.Pkcs7
               });

               // Set the SA_SIGNATURE values
               _clientName = opts.clientName || postman.getEnvironmentVariable("clientName");

               if (_clientName) {
                  postman.setEnvironmentVariable("clientName", _clientName);

                  postman.setEnvironmentVariable("clientKey", _encrypted.ciphertext.toString(CryptoJS.enc.Base64));
               }
               else {
                  throw "No clientName";
               }
            }
            else {
               throw "No privateKey";
            }
         }
      };
   }());

   return SAPostmanJS;
}));
