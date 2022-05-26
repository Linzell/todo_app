import { App, createSSRApp } from "aleph/vue";

const app = createSSRApp(App);

app.mount("#root", true);
