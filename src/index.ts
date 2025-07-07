import { Hono } from "hono";
import { authRoute } from "./routes/auth";
import { profileRoute } from "./routes/profile";
import { userRoute } from "./routes/user";
import { productRoute } from "./routes/product";
import { cartRoute } from "./routes/cart";
import { orderRoute } from "./routes/order";

const app = new Hono().basePath('/v1');

app.route('/auth', authRoute);
app.route('/profile', profileRoute);
app.route('/user', userRoute);
app.route('/product', productRoute);
app.route('/cart', cartRoute);
app.route('/order', orderRoute);

export default {
  port: 8000,
  fetch: app.fetch,
}
