const express = require('express');

const router = express.Router();

router.use(('/', (req, res) => {
    res.send(`
        <div style='position:relative; width:100%; height: 100vh;'>
            <img
            src='https://image.freepik.com/vector-gratis/poster-error-404-pagina-no-encontrada-usar-sitio-web_1284-49337.jpg'
            />
        <div/>
    `);
}));

module.exports = router;
