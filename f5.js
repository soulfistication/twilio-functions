exports.handler = function(context, event, callback) {
    
	var client = context.getTwilioClient();
	
	let channel = 'CH3XXXXXXXXXXXXXXXXXXXXXXXXX'; // default channel.
	
	console.log(event)
	
	let text = event.text;
	
	let splitted = text.split(" ");
	
    if ( splitted.length > 1 ) {
        
        channel = splitted[0];
        
        text = "";
        
        for (var i = 1; i < splitted.length; i++) {
            text = text + " " + splitted[i]
        }
        
        let trimmed = text.trim()
        
        client.chat
	        .services('ISXXXXXXXXXXXXXXXXXXXXXXX')
	        .channels(channel)
	        .messages
	        .create({ "body": trimmed })
	        .then(message => callback(null, trimmed));
        
        
    } else {
        callback("Slack text should contain at least two strings (channel id and stylist message) separated by space");
    }
	
};
