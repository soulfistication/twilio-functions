/**
 *  Twilio Programmable Chat Token Template
 * 
 *  This Template shows you how to mint Access Tokens for Twilio Programmable Chat. Please note, this is for prototyping purposes
 *  only. You will want to validate the identity of clients requesting Access Token in most production applications and set
 *  the identity when minting the Token.
 * 
 *  Pre-requisites
 *  - Create a Chat Service (https://www.twilio.com/docs/api/chat/rest/services)
 *  - Create an API Key (https://www.twilio.com/console/runtime/api-keys)
 */

exports.handler = function(context, event, callback) {

    let appName = context.CHAT_APP_NAME;
    let identity = event.identity;
    let deviceId = event.device;
  
    let endpointId = `${appName}:${identity}:${deviceId}`;
  
    //pre-built in libraries to create a MessagingGrant
    let AccessToken = Twilio.jwt.AccessToken;
    let IpMessagingGrant = AccessToken.IpMessagingGrant;
  
    let ipmGrant = new IpMessagingGrant({
      serviceSid: context.CHAT_SERVICE_SID,
      endpointId: endpointId,
      pushCredentialSid: context.CHAT_PUSH_CREDENTIAL_SID
    });
  
    const accessToken = new AccessToken(
       context.ACCOUNT_SID,
       context.CHAT_TWILIO_API_KEY,
       context.CHAT_TWILIO_API_SECRET
    );
    
    console.log(context.ACCOUNT_SID);
  
    accessToken.addGrant(ipmGrant);
    accessToken.identity = identity;
  
    callback(null, {token: accessToken.toJwt()});
  };
  