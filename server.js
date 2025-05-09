const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

app.use(cors({
  origin: 'https://ticketing-netsuite.smctgroup.ph',
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  credentials: true,
}));

app.use(cookieParser());
//app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/uploads', express.static('/app/uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const port = 7020;
app.listen(port, () => {

  console.log(`Server is running on 0.0.0.0:${port}`);
});
