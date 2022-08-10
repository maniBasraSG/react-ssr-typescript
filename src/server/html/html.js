// eslint-disable-next-line import/no-anonymous-default-export
export default ({ styles, children, extractor, store }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>PeckWater Brands</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta http-equiv="content-language" content="en" />
    <meta http-equiv="" content="IE=edge" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge,chrome=1" />
    <meta content="yes" name="apple-touch-fullscreen" />
    <meta name="description" content="PeckWater Brands offers delivery franchises to kitchen operators, and is fastest growing virtual brand company in the UK. " />

    <!--Favicon-->

    <!-- Style -->
    ${styles}
    ${extractor.getStyleTags()}
  </head>
  <body>
    <div id="root">${children}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(store.getState())}
    </script>
    ${extractor.getScriptTags()}
  </body>
</html>`;
};
