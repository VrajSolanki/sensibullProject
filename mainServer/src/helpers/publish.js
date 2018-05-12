async function publish(payload){
    return new Promise((resolve,reject)=>{
      var ch = global.rabbitmq_channel;
      var q = 'sendEmail';
      var msg = "send email Test";
      var ok = ch.assertQueue(q, {
        durable: false,
        arguments: {
          "x-dead-letter-exchange": "",
          "x-dead-letter-routing-key": "dead_letters"
        }
      });
      ok.then(()=>{
        ch.sendToQueue(q, new Buffer(msg));
        console.log("Created Email Job.");
        resolve()
      }).catch((err)=>{
        reject(err)
      })
    })
  }

  module.exports = publish;
