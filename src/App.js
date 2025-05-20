// App.js
import "./App.css";
import Index from "./Pages/Index";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        {/* 1. jQuery from CDN */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        />

        {/* 2. Other vendor scripts */}
        <script src="/assets/vendors/jquery-ui/jquery-ui.min.js" defer />
        <script src="/assets/vendors/fastdom/fastdom.min.js" defer />
        <script src="/assets/vendors/bootstrap/js/bootstrap.min.js" defer />
        <script src="/assets/vendors/fresco/js/fresco.js" defer />
        <script src="/assets/vendors/lity/lity.min.js" defer />
        <script src="/assets/vendors/fontfaceobserver.js" defer />
        <script src="/assets/vendors/tinycolor-min.js" defer />
        <script src="/assets/vendors/isotope/isotope.pkgd.min.js" defer />
        <script src="/assets/vendors/isotope/packery-mode.pkgd.min.js" defer />
        <script src="/assets/vendors/flickity/flickity.pkgd.min.js" defer />
        <script src="/assets/vendors/flickity/flickity-fade.min.js" defer />

        {/* 3. GSAP core and plugins, in order */}
        <script src="/assets/vendors/gsap/minified/gsap.min.js" defer />
        <script src="/assets/vendors/gsap/utils/CustomEase.min.js" defer />
        <script src="/assets/vendors/gsap/minified/ScrollTrigger.min.js" defer />
        <script src="/assets/vendors/gsap/utils/SplitText.min.js" defer />

        {/* 4. Your theme and contact form scripts */}
        <script src="/assets/js/theme.min.js" defer />
        <script src="/assets/js/liquid-ajax-contact-form.min.js" defer />
      </Helmet>

      <div className="App">
        <Index />
      </div>
    </>
  );
}

export default App;
