module.exports = {
  // 是否为 multi-page 应用
  multi: true,
  // multi-page 指定的存储文件夹
  pages: 'views',
  // 默认 404 跳转页, 详见文档：https://github.com/bripkens/connect-history-api-fallback
  redirect: {
    from: /.*/g,
    to: `/system.html`,
  },
};
