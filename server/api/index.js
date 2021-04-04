const app = require("./server");

const port = 3000;

app.listen(port, () => console.log(`Express departed from port ${port}`))