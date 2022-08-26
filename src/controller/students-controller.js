import connection from './../database/DB';


const getStudents= (req, res) => {
  const query = 'SELECT * FROM jacobo_oposiciones.students';
  connection.query(query, (err, response) => {
    if (err) throw res.status(500).send(err);
    res.status(200).json(response);
  });
};


export const methods = {
  getStudents,
};
