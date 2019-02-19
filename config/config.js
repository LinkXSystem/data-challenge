module.exports = {
  // 是否为 multi-page 应用
  multi: false,
  // multi-page 指定的存储文件夹
  pages: 'views',
  // 默认 404 跳转页, 尚未解决 index.html 跳转问题
  redirect: {
    from: /.*/g,
    to: `/system.html`,
  },
};
