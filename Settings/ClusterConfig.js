const cluster = require('cluster');

function ClusterConfig(cpus) {
    this.cpus = cpus;

    this.scaleApplication = () => {
        if(cluster.isMaster) {
            for (var i = 0; i < this.cpus; i++) {
                cluster.fork();            
            }

            cluster.on('online', function(worker) {
                console.log('Worker ' + worker.process.pid + ' is online');
            });

            cluster.on('exit', function(worker, code, signal) {
                console.log('Starting a new worker');
                cluster.fork();
            });
        } else {
            return null;
        }
    }
}

module.exports = new ClusterConfig(require('os').cpus().length);