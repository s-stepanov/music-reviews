const { User } = require('../models');

const logout = async ctx => {
  ctx.logout(err => {
    if (err) {
      return ctx.body = {
        status: 500,
        err
      }
    }
  });
  return ctx.body = {
    status: 200,
    data: 'logged out'
  }
};

const getCurrentUser = async ctx => {
  try {
    const user = await User.findById(ctx.req.user.id);
    const response = {
      id: user._id,
      name: user.name,
      email: user.email,
      photo: user.photo
    };
    return ctx.body = {
      status: '200',
      data: response
    }
  } catch (error) {
    ctx.body = {
      status: '500',
      error
    }
  }
};

module.exports = { getCurrentUser, logout };