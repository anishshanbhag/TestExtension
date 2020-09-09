let user_signed_in = false;
const CLIENT_ID = encodeURIComponent("640061544176-6l59uqcqvarnlse5a1ms6g0rb0goolg4.apps.googleusercontent.com");
const RESPONSE_TYPE = encodeURIComponent("id_token");
const REDIRECT_URI = encodeURIComponent("https://inlcgfdnfffnldkgbmgldlecbelmoime.chromiumapp.org");
const STATE = encodeURIComponent("jfkls3n");
const SCOPE = encodeURIComponent("email");
const PROMPT  = encodeURIComponent("consent");

function is_user_signed_in(){
	return user_signed_in;
}

function create_oauth2_url(){
	// chrome.cookies.get({"url":"http://www.example.com","name":"voicein"},function(c){
	// 	 if(c!=null){
	// 	 	console.log("Already signed in");
	// 	 }
	// });
	let nonce = encodeURIComponent(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15));
	let url = `https://accounts.google.com/o/oauth2/v2/auth
	?client_id=${CLIENT_ID}
	&response_type=${RESPONSE_TYPE}
	&redirect_uri=${REDIRECT_URI}
	&state=${STATE}
	&scope=${SCOPE}
	&prompt=${PROMPT}
	&nonce=${nonce}`;
	console.log(url);
	return url;
}

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: 'chrome-extension://'+chrome.runtime.id+'/popup.html'}, function (tab) {
        console.log(chrome.runtime.id);
    });
});

chrome.runtime.onMessage.addListener((request,sender,sendResponse) => {
	if(request.message==="login"){
		if(is_user_signed_in()){
			console.log("User Signed In");
		}
		else{
			chrome.identity.launchWebAuthFlow({
				url:create_oauth2_url(),
				interactive:true
			},function(redirect_uri){
				console.log("redirect_uri",redirect_uri);
				let id_token = redirect_uri.substring(redirect_uri.indexOf('id_token=')+9);
				id_token = id_token.substring(0, id_token.indexOf('&'));

				const user_info = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(id_token.split(".")[1]));
				if((user_info.iss==="https://accounts.google.com" || user_signed_in.iss==="accounts.google.com") && user_info.aud===CLIENT_ID){
						// chrome.cookies.set({"url":"http://www.example.com","name":"voicein"},function(c){
						// 		console.log("Cookie successfully set");
						// });
				}
				sendResponse('success');
			});
			return true;
		}
	}
});