// 按需全局引入 vant组件
// 自行引入
import Vue from 'vue';
import {
  Empty,
  Button,
  List,
  Cell,
  Field,
  Tabbar,
  TabbarItem,
  Form,
  Tab,
  Tabs,
  Toast,
  Popup,
  ActionSheet,
  Checkbox,
  CheckboxGroup,
  Popover,
  Icon,
} from 'vant';

Vue.use(Empty);
Vue.use(Button);
Vue.use(Cell);
Vue.use(List);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Popover);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
