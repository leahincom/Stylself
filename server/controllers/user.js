const bcrypt = require('bcrypt');
const User = require('./../models/user');

const create = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    req.session.uid = user._id;
    console.log('💥 login--------------------------------', req.session);
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
};

const getMyList = async (req, res) => {
  try {
    // const { _id, mylist } = req.user;
    console.log(req.user);
    // const user = { firstName, mylist };
    // console.log('💥 2-------------------------------', user);
    res.status(200).send(req.user.mylist);
  } catch (error) {
    res.status(404).send({ error, message: 'User not found' });
  }
};

const postItem = async (req, res) => {
  try {
    console.log('req.user-------------------', req.user);
    const item = req.body;
    if (item.is_liked) {
      await User.updateOne(
        { email: req.user.email },
        { $push: { mylist: req.body } }
      ).then((res) => res.status(200).send(item));
    } else {
      await User.deleteOne(
        { email: req.user.email },
        { $pull: { mylist: req.body } }
      ).then((res) => res.status(200).send(item));
    }
    // const user = await User.findOne();
    // console.log('💥 1-------------------------------', user);
    // res.status(200).send(req.body);
  } catch (error) {
    res.status(404).send({ error, message: 'User not found' });
  }
};

const logout = (req, res) => {
  console.log(req.session);
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  });
};

module.exports = { create, login, postItem, getMyList, logout };
