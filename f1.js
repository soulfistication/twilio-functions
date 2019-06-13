exports.handler = function(context, event, callback) {
    
    console.log(context)
	
	let message = 'This is a sample message';
	
	var client = context.getTwilioClient();
	
	// let opts = {
	//  To: event.From,
	//  From: event.To,
	//  body: message
	// }
	
	// console.log(opts)
	
	// We need to post the message to the channel coming in the event object.
	
	client.messages.create( { opts: { to: event.From, from: event.To, body: message } }, function (err, res) {
	    callback(null, {result: "successfully posted the message."});
	});
	
};
