const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())


app.get('/con-cors', cors(), (req, res, next) => {
    res.json({ msg: 'con cors 🔝 🎉' })
})
app.get('/usuario', (request, response) => {
    response.json({ info: 'La API esta en ejecucion' });
});

app.get('/products', (request, response) => {


    response.json(

        [
            {
                id: '1',
                title: 'MacBook Pro de 13',
                image: 'assets/images/MacBook Pro de 13.jpg',
                price: 999.99,
                description: 'Hasta 9 veces más rápido.14 Sorprendente incluso con un Neural Engine de 16 núcleos. Las apps en la MacBook Air pueden aprovechar el aprendizaje automático para muchas cosas: retocar fotos como un profesional, mejorar la precisión de la detección automática de herramientas inteligentes como las de edición de imagen o los filtros de audio, y mucho más. No se trata sólo del poder de procesamiento, es el trabajo de toda una gama de tecnologías de aprendizaje automático.',
                sentence: 'Una Pro entre Pros.'


            },
            {
                id: '2',
                title: 'Mac mini',
                image: 'assets/images/Mac mini.png',
                price: 699.00,
                description: 'Cada vez más grande por dentro,El nuevo chip M1 diseñado por Apple lleva nuestra computadora de escritorio más versátil a otra dimensión. Ahora viene con un CPU hasta 3 veces más rápido, gráficos hasta 6 veces más veloces y nuestro Neural Engine más avanzado, que permite un aprendizaje automático hasta 15 veces más rápido. Podrás trabajar, jugar y crear con una velocidad y potencia que jamás habías imaginado. La Mac mini es poder para conquistarlo todo.',
                sentence: 'Cada vez más grande por dentro.'
            },
            {
                id: '3',
                title: 'MacBookAir',
                image: 'assets/images/MacBookAir.png',
                price: 1099.00,
                description: 'Con el chip M1, la MacBook Pro de 13 pulgadas alcanza un nuevo nivel de potencia y velocidad. El CPU es hasta 2.8 veces más rápido y los gráficos son hasta 5 veces más veloces. Nuestro Neural Engine más avanzado hasta ahora permite un aprendizaje automático hasta 11 veces más rápido. Y la batería te acompaña hasta por 20 horas, la mayor duración en una Mac. Es nuestra notebook Pro más conocida, a un nivel mucho más pro.',
                sentence: 'Un nuevo poder toma vuelo.'

            }

        ]

    )
});
app.get('/products/1', (request, response) => {


    response.json(

        {
            id: '1',
            title: 'MacBook Pro de 13',
            image: 'assets/images/MacBook Pro de 13.jpg',
            price: 999.99,
            description: 'Hasta 9 veces más rápido.14 Sorprendente incluso con un Neural Engine de 16 núcleos. Las apps en la MacBook Air pueden aprovechar el aprendizaje automático para muchas cosas: retocar fotos como un profesional, mejorar la precisión de la detección automática de herramientas inteligentes como las de edición de imagen o los filtros de audio, y mucho más. No se trata sólo del poder de procesamiento, es el trabajo de toda una gama de tecnologías de aprendizaje automático.',
            sentence: 'Una Pro entre Pros.'


        }

    )
});
app.get('/products/2', (request, response) => {


    response.json(

        {
            id: '2',
            title: 'Mac mini',
            image: 'assets/images/Mac mini.png',
            price: 699.00,
            description: 'Cada vez más grande por dentro,El nuevo chip M1 diseñado por Apple lleva nuestra computadora de escritorio más versátil a otra dimensión. Ahora viene con un CPU hasta 3 veces más rápido, gráficos hasta 6 veces más veloces y nuestro Neural Engine más avanzado, que permite un aprendizaje automático hasta 15 veces más rápido. Podrás trabajar, jugar y crear con una velocidad y potencia que jamás habías imaginado. La Mac mini es poder para conquistarlo todo.',
            sentence: 'Cada vez más grande por dentro.'
        }

    )
});
app.get('/products/3', (request, response) => {


    response.json(

        {
            id: '3',
            title: 'MacBookAir',
            image: 'assets/images/MacBookAir.png',
            price: 1099.00,
            description: 'Con el chip M1, la MacBook Pro de 13 pulgadas alcanza un nuevo nivel de potencia y velocidad. El CPU es hasta 2.8 veces más rápido y los gráficos son hasta 5 veces más veloces. Nuestro Neural Engine más avanzado hasta ahora permite un aprendizaje automático hasta 11 veces más rápido. Y la batería te acompaña hasta por 20 horas, la mayor duración en una Mac. Es nuestra notebook Pro más conocida, a un nivel mucho más pro.',
            sentence: 'Un nuevo poder toma vuelo.'

        }

    )
});

app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});
// no es necesario insertar carpeta assets