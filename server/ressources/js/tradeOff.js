var launchTradeOff = function(error, resolution) {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(resolution, null, 2));
        var test = JSON.parse(JSON.stringify(resolution, null, 2));
        console.log("result =" + test);
        for (var prop in test) {
            console.log(prop + "---" + test[prop]);

            if (prop === 'problem') {
                for (var prop2 in test[prop]) {
                    console.log("in val : " + prop2 + "--" + test[prop][prop2][1].status);
                    if (prop2 === 'options') {
                        for (var i = 0; i < test[prop][prop2].length; i++) {
                            console.log(JSON.stringify(test[prop][prop2][i],null,2));
                        }
                    }
                };
            }

            if (prop === 'resolution') {
                for (var prop2 in test[prop]) {
                    console.log("in val : " + prop2 + "--" + test[prop][prop2][1].status);
                    console.log(" val = " + test[prop][prop2]);
                    var arrayToKeep = [];
                    for (var i = 0; i < test[prop][prop2].length; i++) {
                        if (test[prop][prop2][i].status != "FRONT") {
                            arrayToKeep.push(test[prop][prop2][i]);
                        }
                        console.log("in loop" + test[prop][prop2][i]);
                    }
                    console.log(arrayToKeep);

                };

            }
        };


    }
};