import jwt from 'jsonwebtoken'

const SECRET_KEY = 'SECRET_KEY'


export default  async function Login(req, res) {
    const {Email, Password} = req.body;
    const event = req.body;
    console.log('EVEN:', event)

    
    const data = {
        Email: "minhlu14206@gmail.com",
        Password: 111111
    }

    if(Email == data.Email && Password == data.Password){
        // data will send when use the token
        const data1 = {
            Email: "minhlu14206@gmail.com",
            UserId: 2,
            role: "User"
        }
        const token = jwt.sign(data1, SECRET_KEY, {expiresIn: '1h'})
        res.status(200).json({
            success: true,
            Email: Email,
            Password: Password,
            Token: token
        });
    }

}

