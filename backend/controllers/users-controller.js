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
    return ctx.body = {
      status: '200',
      data: user
    }
  } catch (error) {
    ctx.body = {
      status: '500',
      error
    }
  }
};

module.exports = { getCurrentUser, logout };