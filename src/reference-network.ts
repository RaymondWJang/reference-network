var ReferenceNetwork = {
  id: null,
  version: null,
  rootURI: null,
  initialized: false,
  addedElementIDs: [],

  init({ id, version, rootURI }) {
    if (this.initialized) return;
    this.id = id;
    this.version = version;
    this.rootURI = rootURI;
    this.initialized = true;
  },

  log(msg) {
    Zotero.log("Reference Network: " + msg);
  },

  toggleGreen(enabled) {
    // `window` is the global object in overlay scope
    let docElem = document.documentElement;
    // Element#toggleAttribute() is not supported in Zotero 6
    if (enabled) {
      docElem.setAttribute("data-green-instead", "true");
    } else {
      docElem.removeAttribute("data-green-instead");
    }
  },

  async main() {
    // `window` is the global object in overlay scope
    var host = new URL("https://foo.com/path").host;
    this.log(`Host is ${host}`);

    this.log(
      `Intensity is ${Zotero.Prefs.get(
        "extensions.make-it-red.intensity",
        true
      )}`
    );
  },
};
