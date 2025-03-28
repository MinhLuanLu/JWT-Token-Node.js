
import express from 'express'; 
import router from './route/router.js';
import { jwtMiddleware } from './route/jwtToken.js';


const app = express();
const port = 8888;

// Use JSON parser middleware
app.use(express.json());


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(router)
