import { getAllMessages, postAMessage } from "../db/queries.js";

export const renderRoot = async (req, res, next) => {
  const messages = await getAllMessages();
  res.render('index', { title: 'Mini Message Board', messages: messages });
}

export const renderNew = async (req, res, next) => {
  res.render('form', { title: 'Mini Message Board' });
}

export const renderUsers = async (req, res, next) => {
  res.send('respond with a resource');
}

export const sendMessage = async (req, res, next) => {
  const username = req.body.username;
  const message = req.body.message;

  // messages.push({text: message, user: username, added: new Date()});
  await postAMessage(message, username, new Date());

  // Redirect or render a response
  res.redirect('/');
}