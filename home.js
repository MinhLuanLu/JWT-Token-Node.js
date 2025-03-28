// home.js
export default function Home(req, res) {

    // Respond with the protected content
    res.status(200).json({
        message: "Welcome to the protected home page!",
        user: req.auth // The decoded JWT payload will be in `req.auth`
    });
}
