/***
 * install JsonWebToken
 * jwt.sign (payload), secret, {expiresIn:min,hr}
 * Token client
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * How to store token in the client side 
 * 1. memory --> ok type
 * 2. local storage --> ok type (xss)
 * 3. cookies: http only
 * 
 * 
 * 
 * 
 * 1. set cookies with http only. for development secure: false;
 * 2. cors
 * app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
 * 3. client side axios setting in axios set withCredentials: true
 */

/** 1. to send cookies from the client make sure you added credentials true for the api call using axios
 * 2. use cookie parser as middleware
 * 
**/
