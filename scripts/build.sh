#!/bin/bash


mkdir -p public/build;

deno run -A visualisation/bundle.ts

deno run --allow-read --allow-write visualisation/line-graph.ts

deno run --allow-read --allow-write largest-files.ts