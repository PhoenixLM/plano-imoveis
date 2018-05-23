const Admin = require('./models/admin');
var novo = new Admin({
    username: 'admin',
    password: 'admin'
});
novo.save();