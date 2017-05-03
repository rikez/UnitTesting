const app = require('./Settings/ExpressConfig.js');

app.listen(process.env.PORT, () => {
    console.log(`Server is ready to go`);
});

