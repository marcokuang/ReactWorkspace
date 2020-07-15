import AlertService from "./app/alertService";
import ComponentService from "./app/componentService";
import { run } from "./app/app";
import "../src/main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
