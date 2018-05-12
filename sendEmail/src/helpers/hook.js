function hook(ch, queue, func) {
    let ok = ch.assertQueue(queue, {
      durable: false,
      arguments: {
        "x-dead-letter-exchange": "",
        "x-dead-letter-routing-key": 'dead_letters'
      }
    });
  
    ok = ok.then(function () {
      ch.prefetch(1);
    });
    ok = ok.then(function () {
      ch.consume(queue, func, {
        noAck: false
      });
      console.log("[*] Waiting for messages on " + queue + ". To exit press CTRL+C");
    });
    return ok;
  }

module.exports = hook;
