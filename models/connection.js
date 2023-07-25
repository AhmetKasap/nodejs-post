function conectionDb() {
    const url = "mongodb+srv://ahmetkaasap:akasap123@mongo.fxccxnb.mongodb.net/"
    const mongoose = require('mongoose')    
    mongoose.connect(url)
        .then(res => {
            console.log("Veritabanı Bağlantısı Kuruldu")
        })
        .catch(err => {
            console.log("Hata")
        })
}



module.exports = conectionDb

