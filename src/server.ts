import { expressServerFactory } from "./infra/config";
import { ENVIRONMENT } from "./utils/environment"

const {SERVER} = ENVIRONMENT;

const port = SERVER.PORT;


const app = expressServerFactory();

app.listen(port, () => console.log('listen on port: ', port));