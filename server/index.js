const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
