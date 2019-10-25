// for tests only

const loadScripts = () => {
    const libs = [
        "/assets/libs/jquery/dist/jquery.min.js",
        "/assets/libs/@shopify/draggable/lib/es5/draggable.bundle.legacy.js",
        "/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js", // menus
        "/assets/libs/autosize/dist/autosize.min.js",
        "/assets/libs/chart.js/dist/Chart.min.js",
        "/assets/libs/flatpickr/dist/flatpickr.min.js",
        "/assets/libs/highlightjs/highlight.pack.min.js", // ?
        "/assets/libs/jquery-mask-plugin/dist/jquery.mask.min.js", // ?
        "/assets/libs/list.js/dist/list.min.js", // menus hide/sho
        "/assets/libs/select2/dist/js/select2.min.js", // check
        "/assets/libs/chart.js/Chart.extension.min.js",
        `${process.env.PUBLIC_URL}/assets/js/theme.min.js`
      ];

      // For body
      for( var i = 0; i < libs.length; i++ ) {
        const script = document.createElement("script");
        script.src = libs[i];
        document.body.appendChild(script);
      }
}

export default loadScripts;