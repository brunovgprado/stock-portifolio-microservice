const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const service = require('./purchase.service/purchase-service');

const port = 3000;
const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
app.use(express.json())

  //Get portfolio endpoint  
  app.get('/portfolio', (req, res) => {
    let srv = new service.PurchaseService();
    const done = (err, resp) => {
        if(!err){
            res.send(resp)
        }else{
            res.send({"Message":"An error ocurred"})
        }
    };

    srv.read(done);
  });
  
  //Purchase register endpoint
  app.post('/purchase/register', (req, res) => {
    let srv = new service.PurchaseService();
    const done = (err, resp) => {
        if(!err){
            res.send(resp)
            res.end()
        }else{
            res.send(err)
            res.end()
        }
    };
    srv.create(req.body, done)
  });

  app.listen(port, () => {
    console.log("Server running on port 3000");
   });