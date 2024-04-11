// index.js
const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB, sql } = require('./db'); // Import sql and connectDB

app.use(cors());
app.use(express.json());

connectDB(); // Connect to the database

app.post('/api/login', async (req, res) => {
    let user;
    try {
        const result = await sql.query`SELECT * FROM Users WHERE email = ${req.body.email}`;
        user = result.recordset[0];
    } catch (err) {
        return res.json({ status: 'error', error: 'Database query failed' });
    }

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid login' });
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            'secret123'
        );

        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'error', user: false });
    }
});

app.listen(5000, () => {
    console.log('Server started on 5000');
});
