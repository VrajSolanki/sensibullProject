
var my_log = function(text){
  var is_log = process.env.ALL_LOGS || 'TRUE';
  if (is_log === 'TRUE') {
    console.log(text);
  }  
}

module.exports = { log: my_log };
