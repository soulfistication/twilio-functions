exports.handler = function(context, event, callback) {
    
	var client = context.getTwilioClient();
	
	let channel = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // default channel.
	
	console.log(event)
	
	let text = event.text;
	
	let splitted = text.split(" ");
	
    if ( splitted.length > 1 ) {
        
        channel = splitted[0];
        
        text = "";
        
        for (var i = 1; i < splitted.length; i++) {
            text = text + " " + splitted[i]
        }
        
        client.chat
	        .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
	        .channels(channel)
	        .messages
	        .create({ "body": text })
	        .then(message => callback(null, "Message sent."));
        
        
    } else {
        callback("Slack text should contain at least two strings (channel id and stylist message) separated by space");
    }
	
};
