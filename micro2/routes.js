const express = require('express')
const { send } = require('express/lib/response')
const routes = express.Router()

/*
routes.get('/', (req,res)=>{
    res.send('testeo')
})
*/

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM pelicula', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO pelicula set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('pelicula agregada!')
        })
    })
})

routes.delete('/:nombrepelicula', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM pelicula WHERE nombrepelicula = ?', [req.params.nombrepelicula], (err, rows)=>{
            if(err) return res.send(err)

            res.send('pelicula borrada!')
        })
    })
})

routes.put('/:nombrepelicula', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE pelicula set ? WHERE nombrepelicula = ?', [req.body, req.params.nombrepelicula], (err, rows)=>{
            if(err) return res.send(err)

            res.send('pelicula actualizada!')
        })
    })
})


module.exports = routes