
import { defineConfig } from 'umi'; // 如果你想在写配置时也有提示，可以通过 umi 的 defineConfig 方法定义配置
import routes from './routes';

export default defineConfig({
  routes: routes,
});

