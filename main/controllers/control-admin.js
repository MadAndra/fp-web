const config   = require('../configs/database');
let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    formAdmin(req,res){
        res.render("admin",{
            url : 'http://localhost:5050/',
        });
    },
    saveAdmin(req,res){
        let tipe = req.body.tipe;
        let harga = req.body.harga;
        let img = req.body.image;
        if (tipe && harga && img) {
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `INSERT INTO stock (tipe_mobil, harga, picture) VALUES (?,?,?);`
                , [tipe, harga, picture],function (error, results) {
                    if (error) throw error; 
                    req.flash('color', 'success');
                    req.flash('status', 'Mantap..');
                    req.flash('message', 'Data mobil berhasil diinputkan');
                    res.redirect('/admin');
                });
                connection.release();
            })
        } else {
            res.redirect('/admin');
            res.end();
        }
    }
}