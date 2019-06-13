exports.handler = function(context, event, callback) {
    
    console.log(event)
	
	let message = 'This is a sample message';
	
	var client = context.getTwilioClient();
	
    callback(null, {channel: "ivan", text: message})
	
};
