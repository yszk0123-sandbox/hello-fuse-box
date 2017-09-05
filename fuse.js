const { FuseBox, WebIndexPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src/',
  output: 'dist/$name',
  tsConfig: 'tsconfig.json',
  plugins: [
    WebIndexPlugin({
      template: 'src/index.html',
      title: 'Hello',
      target: 'index.html',
    }),
  ],
});

fuse.dev({
  port: 3000,
});

fuse.bundle('app')
  .instructions('>index.ts')
  .hmr()
  .watch();

fuse.run();
