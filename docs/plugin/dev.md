# Setting up a development environment

Following: https://www.zotero.org/support/dev/client_coding/plugin_development

- set the location of the plugin in the `reference-network@example.com` file to `{repo}/build/`
- (do the rest of the stuff in the above guide)
- watch and rebuild the plugin with `npm run start`
- you have to restart zotero between each change i think


Weird things:
- the build step was generating the extension id as `reference-network@gmail.com` because [`zotero-plugin/rdf` just does that for some reason](https://github.com/retorquere/zotero-plugin/blob/ab40ae4ba59d2b6a3fcce3222d415d9b5d72b14b/rdf.ts#L16)
  so the extension ID has to be updated in both the `package.json` file as well as the actual `manifest.json` file
