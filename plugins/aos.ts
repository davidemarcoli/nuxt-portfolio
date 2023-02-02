// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

// export default ({ app }) => {
//     app.AOS = new AOS.init();
// };

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(new AOS.init());
})