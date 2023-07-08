import { createApp } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()
export default () => {
  const app = createApp({});
  app.use(AOS);
  app.mount();
};
