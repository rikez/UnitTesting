const app = require('./Settings/ExpressConfig.js');
let scale = require('./Settings/ClusterConfig');

if(scale.scaleApplication() === null) {
    app.listen(process.env.PORT, () => {
        console.log(`Server is ready to go`);
    });
} else {
    scale.scaleApplication();
}

