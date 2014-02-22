This is the source for my personal site.

Development environment is setup as such:

1. `grunt serve`
  * Compiles the site
  * Starts a jekyll server with flags: `--watch --drafts`
    * `--watch` moves everything to `/dist` which is essentially production
2. `grunt watch`
  * Compiles all front-end and jekyll assets
