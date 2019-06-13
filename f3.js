exports.handler = function(context, event, callback) {
    
	var client = context.getTwilioClient();
	
	let channel = event.channel;
	let text = event.text;
	
	client.chat
	    .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
	    .channels(channel)
	    .messages
	    .create({ "body": text })
	    .then(message => callback(null, {"result": "ok"}));
	
};
