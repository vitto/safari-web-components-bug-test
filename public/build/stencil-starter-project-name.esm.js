import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-0b3d4f97.js';
export { s as setNonce } from './index-0b3d4f97.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.25.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["mds-input",[[65,"mds-input",{"autocomplete":[513],"autofocus":[516],"await":[516],"controlsLayout":[513,"controls-layout"],"controlsIcon":[513,"controls-icon"],"controlIncreaseLabel":[513,"control-increase-label"],"controlDecreaseLabel":[513,"control-decrease-label"],"datalist":[16],"disabled":[516],"icon":[513],"max":[513],"maxlength":[514],"min":[520],"minlength":[514],"name":[513],"pattern":[513],"placeholder":[513],"readonly":[516],"required":[516],"variant":[513],"tip":[513],"step":[513],"type":[513],"typography":[513],"value":[1537],"hasFocus":[32],"language":[32],"isPasswordVisible":[32],"setFocus":[64],"getInputElement":[64]},null,{"value":["valueChanged"],"disabled":["disabledChanged"]}]]]], options);
});

//# sourceMappingURL=stencil-starter-project-name.esm.js.map