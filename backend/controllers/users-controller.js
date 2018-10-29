const { User } = require('../models');

const logout = async ctx => {
  ctx.logout(err => {
    if (err) {
      ctx.status = 500;
      return ctx.body = {
        err
      }
    }
  });
  ctx.status = 200;
  return ctx.body = {
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
    ctx.status = 200;
    return ctx.body = {
      data: response
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      error
    }
  }
};

module.exports = { getCurrentUser, logout };