var aws = require('aws-sdk');
import defaults from '../config/defaults';
var ses = new aws.SES(defaults.ses);

const sendEmail = async(obj) => {
    // let replyTo = obj.replyTo ? [obj.replyTo] : [];
    // let from = obj.from;
    
    let from = `vrajsolanki11@gmail.com`;
    let replyTo = [`vrajsolanki11@gmail.com`];
    let body = "Fraudulent user trying to login.";
    let subject = `Fraudulent User Login.`

    const response_data = await new Promise(function(resolve, reject) {
        ses.sendEmail({
            Source: from,
            Destination: { ToAddresses: replyTo },
            Message: {
                Subject: { Data: subject },
                Body:  {Text: {Data:body}} 
            },
            ReplyToAddresses: replyTo
        }, function(err, data) {
            if (err) reject(err);
            console.log(`:::: Email sent successfully to ${replyTo}`);
            resolve(data);
        });
    });
    console.log(response_data);
    return true;
}

module.exports = sendEmail;
