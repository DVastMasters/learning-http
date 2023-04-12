const main = (args) => {
    if (args.length != 3) {
        console.log('Please, input only one argumment.');
        return;
    };

    const baseURL = args[2];
    
    console.log('We be going to start crawling at ' + baseURL);
}

main(process.argv);