exports.handler = function(context, event, callback) {
    let identity = event.identity;
    let AccessToken = Twilio.jwt.AccessToken;
    let ChatGrant = AccessToken.ChatGrant;
    let chatGrant = new ChatGrant({
      serviceSid: context.CHAT_SERVICE_SID,
      pushCredentialSid: context.CHAT_PUSH_CREDENTIAL_SID
    });
    const accessToken = new AccessToken(
      context.ACCOUNT_SID,
      context.CHAT_TWILIO_API_KEY,
      context.CHAT_TWILIO_API_SECRET
    );
    accessToken.addGrant(chatGrant);
    accessToken.identity = identity;
    callback(null, { token: accessToken.toJwt() });
  };
  