const mongoose = require("mongoose")

//mongoose
  mongoose.connect('mongodb+srv://'+ process.env.DB_USER_PASS +'@cluster1.hxmuwot.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
       useUnifiedTopology: true })
    
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.log('La connexion à mongoDB à échoué', err))


