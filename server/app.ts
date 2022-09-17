import express, { Request, Response, NextFunction } from 'express';
import jsonServer from 'json-server';
import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = 'VERY_SECRET_KEY';

export interface SessionRequest extends Request {
  user?: {
    id: string;
  }
}

const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

const PORT = 3001;

const app = express();

const authMiddleware = (req: SessionRequest, res: Response, next: NextFunction) => {

  const { authorization } = req.headers;

  if (!authorization) {
    res.sendStatus(401);
    next();
  } else {
    const token = authorization.replace('Bearer ', '');
    let payload: JwtPayload | undefined;
  
    try {
      // попытаемся верифицировать токен
      payload = jwt.verify(token, SECRET_KEY) as JwtPayload;
    } catch (err) {
      // отправим ошибку, если не получилось
      res.send(err);
      return;
    }
  
    
     // записываем пейлоуд в объект запроса
    req.user = { id: payload!.id as string };
  }
  next();
};

app.use(express.json());
app.use(middlewares);

app.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
  const {
    email, password, username, avatar
  } = req.body;

  try {
    const user = await axios.post('http://localhost:3001/api/users', {
      email: email,
      password: password,
      username: username,
      avatar,
      friendsList: [],
    })

    res.status(201);
    res.send({user: user.data})
  } catch (err) {
    console.log("ERROR");
  }
});

app.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await axios.get(`http://localhost:3001/api/users?email=${email}&password=${password}`);

    if (user.data.length !== 0) {
      console.log(user.data[0].id);
      const token = jwt.sign({ id: user.data[0].id }, SECRET_KEY, { expiresIn: '7d' });
      res.status(201);
      res.send({user: user.data[0], token: token});
    } else {
      res.sendStatus(404);
    }
    
  } catch (err) {
    res.sendStatus(404);
  }
});

app.use('/api', router);

app.use(authMiddleware);

app.get('/users/me', async (req: SessionRequest, res: Response, next: NextFunction) => {

  console.log('USER', req.user)

  const userId = req.user!.id;
  let userReq;
  try {
    userReq = await axios.get(`http://localhost:3001/api/users/${userId}`);
  } catch (err) {
    res.send(err)
    return;
  }
  res.send(userReq.data);
})

app.post('/friend', async (req: SessionRequest, res: Response, next: NextFunction) => {
  const userId = req.user!.id;
  const { contactId } = req.body;

  let userReq;
  try {
    userReq = await axios.get(`http://localhost:3001/api/users/${userId}`);
  } catch (err) {
    res.send(err)
    return;
  }

  try {
    if (userReq.data.friendsList.find((el: string) => el === contactId)) {
      res.status(409).send('Произошла ошибка');
      return;
    }
    const user = await axios.patch(`http://localhost:3001/api/users/${userId}`, {
      friendsList: [...userReq.data.friendsList, contactId]
    });
    
    res.send(user.data);
    return;
  } catch (err) {
    res.send(err)
    return;
  }
});

app.delete('/friend', async (req: SessionRequest, res: Response, next: NextFunction) => {
  const userId = req.user!.id;
  const { contactId } = req.body;

  let userReq;
  try {
    userReq = await axios.get(`http://localhost:3001/api/users/${userId}`);
  } catch (err) {
    res.send(err)
    return;
  }

  try {
    const updatedFriendsList = userReq.data.friendsList.filter((el: string) => el !== contactId);
    const user = await axios.patch(`http://localhost:3001/api/users/${userId}`, {
      friendsList: updatedFriendsList
    });
    
    res.send(user.data);
    return;
  } catch (err) {
    res.send(err)
    return;
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
