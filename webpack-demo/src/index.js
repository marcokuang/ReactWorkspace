import AlertService from "./app/alertService";
import ComponentService from "./app/componentService";
import CodeService from "./app/codeService";
import { run } from "./app/app";
import "../src/main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
new CodeService().run();
