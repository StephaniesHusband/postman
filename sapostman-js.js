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
            var _clientId;

            // Create our uri to hit and encode.
            var uri = _.template('/sasec/ECustomerServices/rest/v1/<%=endpoint%>?_=<%=timestamp%>')({
               endpoint: opts.endpoint,
               timestamp: (new Date().getTime())
            });

            // Set the uri in our address above
            postman.setEnvironmentVariable("uri", uri);

            if (opts.privateKey) {
               // Grab and encode the private key.  It's privateKey is stored Base64 encoded so we must decode to send to
               // backend.
               _privateKey = CryptoJS.enc.Base64.parse(opts.privateKey);

               // Save for subsequent calls
               postman.setEnvironmentVariable("privateKey", _privateKey);
            }
            else {
               _privateKey = postman.getEnvironmentVariable("privateKey");
            }

            if (_privateKey) {
               // Encrypt the uri using the private key
               _encrypted = CryptoJS.AES.encrypt(uri, _privateKey, {
                  iv: CryptoJS.enc.Hex.parse("0000000000000000"),
                  keySize: 16,
                  mode: CryptoJS.mode.CBC,
                  padding: CryptoJS.pad.Pkcs7
               });

               // Set the SA_SIGNATURE values
               _clientId = opts.clientId || postman.getEnvironmentVariable("clientId");

               if (_clientId) {
                  postman.setEnvironmentVariable("clientId", _clientId);

                  postman.setEnvironmentVariable("clientKey", _encrypted.ciphertext.toString(CryptoJS.enc.Base64));
               }
               else {
                  throw "No clientId";
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
