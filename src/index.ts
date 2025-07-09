import { Hono } from "hono";
import { authApp } from "./routes/auth";
import { profileApp } from "./routes/profile";
import { userApp } from "./routes/user";
import { productApp } from "./routes/product";
import { cartApp } from "./routes/cart";
import { orderApp } from "./routes/order";

const app = new Hono().basePath('/api');

app.route('/auth', authApp);
app.route('/profile', profileApp);
app.route('/user', userApp);
app.route('/product', productApp);
app.route('/cart', cartApp);
app.route('/order', orderApp);

export default {
  port: 8080,
  fetch: app.fetch,
}
