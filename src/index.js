import app from './app';
const main=() => {
  app.listen(app.get('port'));
  console.log(`server running on port ${app.get('port')}`);
};

main();
