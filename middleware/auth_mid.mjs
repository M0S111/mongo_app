import jsonwebtoken from 'jsonwebtoken';

const jwt = jsonwebtoken;

function authenticateToken(roles = []) {
  return (req, res, next) => {
    console.log("Authentication middleware started");
    const token = req.cookies.jwt;
    console.log("Token: ", token, "\n");

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      if (roles.length > 0 && !roles.includes(req.user.role)) {
        console.log('Role mismatch:', req.user.role, 'not in', roles);
        return res.sendStatus(403);
      }
      next();
    });
  };
}

export default authenticateToken;