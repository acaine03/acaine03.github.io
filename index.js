import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import * as components from "./components";
import Navigo from './/.//node_modules/navigo';



const router = new Navigo(window.location.origin);

router
.on({
    ":page": params => render(state[(params.page)]),
    "/": () => render(state.HomePage)
})
.resolve();

function render(st) {
    document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;

}

router.updatePageLinks();



