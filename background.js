console.log("background.js running");

console.log("contentScript.js started");

const log = () => {
    const now = new Date();

    console.log(`${now.toLocaleTimeString()}`);
};


setInterval(log, 1000);
