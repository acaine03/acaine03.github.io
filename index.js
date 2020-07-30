<script type="module"></script>
    import { Header, Nav, Main, Footer } from "./components";
    import * as state from "./store";
    import * as components from "./components";
    import Navigo from 'navigo';
</script>

const router = new Navigo(window.location.origin);

router
.on({
    ":page": params => render(state[(params.page)]),
    "/": () => render(state.HomePage)
})
.resolve();

function render(st) {console.log(st)
    document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;

}

router.updatePageLinks();



