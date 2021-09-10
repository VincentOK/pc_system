import { App } from 'vue';
import {
  Button,
  Input,
  Steps,
  Form,
  Select,
  Row,
  Radio,
  DatePicker,
  Col,
  Checkbox,
  Switch
} from 'ant-design-vue';

const antd = {
  install(app: App<Element>) {
    app.component(Button.name, Button),
    app.component(Input.name, Input),
    app.component(Steps.name, Steps),
    app.component(Form.name, Form),
    app.component(Select.name, Select),
    app.component(Row.name, Row),
    app.component(Radio.name, Radio),
    app.component(DatePicker.name, DatePicker),
    app.component(Col.name, Col),
    app.component(Checkbox.name, Checkbox),
    app.component(Switch.name, Switch);
    // 以后想引入什么就引入什么
  }
};
export default antd;
