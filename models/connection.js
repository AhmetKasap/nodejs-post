function conectionDb() {
    const url = "mongodb+srv://ahmetkasap:ahmetk123@nodejs.46q0jcs.mongodb.net/"
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