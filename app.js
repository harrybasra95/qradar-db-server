const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const sequelize = require('./models');
const bodyparser = require('body-parser');

require('./crons');

app.set('view engine', 'ejs');
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', async (req, res) => {
     const buckets = await sequelize.models.bucket.findAll({});
     res.render('index', { buckets });
});

// Route to create a new bucket
app.post('/buckets', async (req, res) => {
     try {
          const { bucketName, token } = req.body;

          await sequelize.models.bucket.create({ bucketName, token });
          res.redirect('/');
     } catch (error) {
          console.log(error);
          res.status(500).send('Error creating bucket');
     }
});

app.put('/buckets/:id', async (req, res) => {
     try {
          const { bucketName, token } = req.body;

          await sequelize.models.bucket.update(
               { bucketName, token },
               {
                    where: {
                         id: req.params.id,
                    },
               }
          );
          res.redirect('/');
     } catch (error) {
          console.log(error);
          res.status(500).send('Error creating bucket');
     }
});

sequelize
     .sync()
     .then(async () => {
          console.log('db connected');
          app.listen(3000, () => {
               console.log(`Server is running on port 3000`);
          });
     })
     .catch(function (err) {
          console.log(err);
          console.log('DB Connection Failed');
     });
