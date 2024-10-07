// POINT ESModuleの使い方
import { hello } from "./module.js";
import { User } from "./module.js";

hello();
const user = new User("Tom");
user.hello();
