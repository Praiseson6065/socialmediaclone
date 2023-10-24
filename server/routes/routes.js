
const bodyParser =require( "body-parser");
const cors =require( 'cors');
const user = require("./user");

const SetupRoutes=(app) =>{
   
    app.use(cors());
    app.use(bodyParser.json());
    app.get('/',(req,res)=>{
        res.send('Hello World!')
    })
    app.use('/api/user',user)
    
}

module.exports = SetupRoutes;
