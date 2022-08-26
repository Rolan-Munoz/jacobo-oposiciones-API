import express from 'express';
import studentsRoutes from './routes/students-routes';

const app= express();


// -----SETTINGS------
app.set('port', 4000);

// ------ROUTES---------
app.get('/', (req, res) => {
  res.status(200).json({status: 'online'});
});

app.use(studentsRoutes);
app.use(express.json());
// -------MIDDLEWARES-----

export default app;
