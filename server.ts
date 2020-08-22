/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import { APP_BASE_HREF } from "@angular/common";
import { NgxRequest, NgxResponse } from '@gorniv/ngx-universal';
import { ngExpressEngine } from "@nguniversal/express-engine";
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
// import * as cookieParser from "cookie-parser";
import * as express from "express";
import { existsSync } from "fs";
import { join } from "path";
import "zone.js/dist/zone-node";
import { AppServerModule } from "./src/main.server";


// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
// const { LAZY_MODULE_MAP} = require('./dist/romeroMotors/server/main.js');

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const distFolder = join(process.cwd(), "dist/romeroMotors/browser");
  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";

  // server.use(cookieParser('123456'));

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    "html",
    ngExpressEngine({
      bootstrap: AppServerModule
      // providers: [
      //   provideModuleMap(LAZY_MODULE_MAP)
      // ],
    })
  );

  // server.use(cookieParser());

  server.set("view engine", "html");
  server.set("views", distFolder);

  // Example Express Rest API endpoints
  server.use("/api/**", (req, res) => {
    res.status(302).send("Not implement");
  });
  // Serve static files from /browser
  server.get(
    "*.*",
    express.static(distFolder, {
      maxAge: "1y"
    })
  );

  // All regular routes use the Universal engine
  server.get("*", (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        {
          provide: REQUEST,
          useValue: req,
        },
        {
          provide: RESPONSE,
          useValue: res,
        },
        {
          provide: NgxRequest,
          useValue: req,
        },
        {
          provide: NgxResponse,
          useValue: res,
        },
      ]
    });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || "";
if (moduleFilename === __filename || moduleFilename.includes("iisnode")) {
  run();
}

export * from "./src/main.server";

