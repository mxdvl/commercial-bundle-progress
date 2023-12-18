import { fromFileUrl } from "https://deno.land/std@0.201.0/path/from_file_url.ts";
import * as esbuild from "https://deno.land/x/esbuild@v0.19.2/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: [fromFileUrl(import.meta.resolve("./main.ts"))],
  outfile: "./public/build/bundle.js",
  bundle: true,
  format: "esm",
});

esbuild.stop();
