import express from 'express';
import raiseAlert from '../helpers/raiseAlert'
let router = express.Router();
import publish from '../helpers/publish'


router.get('/transact', async(req, res) => {
  let response  = await isFraud();
  console.log(response)
  if(response){
    res.send("Valid User");
  }
  else{
    console.log('sendEmail to registered Email')
    raiseAlert("sendEmail");
    res.status(403).send({"error":"Invalid User"});
  }
});

async function isFraud(){
  let randomBoolean = false;
  await new Promise (resolve => {
    randomBoolean = Math.random() >= 0.5;
    setTimeout(resolve, 1000)
  })
  return randomBoolean
}

module.exports = router;
