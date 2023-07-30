import { LogoContainer } from "./components/logos";
import './app.css'

export const App = () => <div class="container">
    <LogoContainer />
    <div class="card">
        <h1>vite-preact-pages-template</h1>
        <p>You can edit <code>src/app.tsx</code> to get started with Vite & PreactJS.</p>
        <p>Alternatively, edit <code>functions/api/logos.ts</code> to get started with Cloudflare Page Functions.</p>
    </div>
</div>