var $9ESmw$uuid = require("uuid");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Constants", () => $909285a3c8be19a7$export$a002182e51710d39);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $b22a30e24d012f07$exports = {};
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $c4624e4b45f24f32$exports = {};


var $7df69a90004c1fea$exports = {};

$parcel$export($7df69a90004c1fea$exports, "EDITABLE_ATTRS_REACT", () => $7df69a90004c1fea$export$84319ec140429c77);
$parcel$export($7df69a90004c1fea$exports, "EDITABLE_ATTRS", () => $7df69a90004c1fea$export$732d66590d6a3f92);
var $7df69a90004c1fea$export$84319ec140429c77;
(function(EDITABLE_ATTRS_REACT) {
    EDITABLE_ATTRS_REACT["ID"] = "itemID";
    EDITABLE_ATTRS_REACT["TYPE"] = "itemType";
    EDITABLE_ATTRS_REACT["SCOPE"] = "itemScope";
    EDITABLE_ATTRS_REACT["PROP"] = "itemProp";
})($7df69a90004c1fea$export$84319ec140429c77 || ($7df69a90004c1fea$export$84319ec140429c77 = {}));
const $7df69a90004c1fea$export$732d66590d6a3f92 = {
    UUID: "id",
    ID: $7df69a90004c1fea$export$84319ec140429c77.ID.toLowerCase(),
    TYPE: $7df69a90004c1fea$export$84319ec140429c77.TYPE.toLowerCase(),
    SCOPE: $7df69a90004c1fea$export$84319ec140429c77.SCOPE.toLowerCase(),
    PROP: $7df69a90004c1fea$export$84319ec140429c77.PROP.toLowerCase(),
    PARENTID: "parentid",
    EDITOR_BEHAVIOR: "data-editor-behavior"
};


$parcel$exportWildcard($b22a30e24d012f07$exports, $c4624e4b45f24f32$exports);
$parcel$exportWildcard($b22a30e24d012f07$exports, $7df69a90004c1fea$exports);


const $909285a3c8be19a7$var$USER_INPUT_RELAY_MESSAGE = "REMOTE_APP_USER_INPUT";
const $909285a3c8be19a7$var$OVERLAY_INPUT_MESSAGE = "OVERLAY_INPUT_MESSAGE";
const $909285a3c8be19a7$var$DEMO_APP_HOST = "ue-remote-app.adobe.net/?authorHost=https://author-p15902-e145656-cmstg.adobeaemcloud.com&publishHost=https://publish-p15902-e145656-cmstg.adobeaemcloud.com";
const $909285a3c8be19a7$var$DEMO_APP_HOST_PROD = "ue-remote-app.adobe.net";
const $909285a3c8be19a7$var$GRAPHQL_HOST = "universal-editor-message-bus.herokuapp.com";
const $909285a3c8be19a7$var$GRAPHQL_PORT_PUBLIC = 443;
const $909285a3c8be19a7$var$GRAPHQL_PORT_LOCAL = 4000;
const $909285a3c8be19a7$var$GRAPHQL_PATH = "/gql";
const $909285a3c8be19a7$var$CONTAINER_ITEM_TYPE = "container";
const $909285a3c8be19a7$var$COMPONENT_ITEM_TYPE = "component";
const $909285a3c8be19a7$var$GRAPHQL_URL = `${$909285a3c8be19a7$var$GRAPHQL_HOST}:${$909285a3c8be19a7$var$GRAPHQL_PORT_PUBLIC}${$909285a3c8be19a7$var$GRAPHQL_PATH}`;
const $909285a3c8be19a7$var$EDITABLE_SELECTOR = `[${(0, $7df69a90004c1fea$export$732d66590d6a3f92).TYPE}]`;
const $909285a3c8be19a7$var$PARENT_SELECTOR = `[${(0, $7df69a90004c1fea$export$732d66590d6a3f92).SCOPE}][${(0, $7df69a90004c1fea$export$732d66590d6a3f92).ID}]`;
const $909285a3c8be19a7$var$CONTAINER_SELECTOR = `[${(0, $7df69a90004c1fea$export$732d66590d6a3f92).TYPE}=${$909285a3c8be19a7$var$CONTAINER_ITEM_TYPE}]`;
const $909285a3c8be19a7$var$URN_PREFIX = "urn:adobe:aem:editor:";
// To be removed
const $909285a3c8be19a7$var$DEPRECATED_URN_PREFIX = "urn:auecon:";
const $909285a3c8be19a7$var$META_SELECTOR = `meta[name^='${$909285a3c8be19a7$var$URN_PREFIX}'],meta[name^='${$909285a3c8be19a7$var$DEPRECATED_URN_PREFIX}']`;
const $909285a3c8be19a7$var$CANVAS_PATH = "/canvas";
const $909285a3c8be19a7$var$FRAGMENT_TYPE = "reference";
const $909285a3c8be19a7$var$UNIFIED_SHELL_STAGE = "https://experience-stage.adobe.com";
const $909285a3c8be19a7$var$UNIFIED_SHELL_PROD = "https://experience.adobe.com";
const $909285a3c8be19a7$var$HEADLESS_CF_EDITOR_URL = `#/aem/cf/editor/editor`;
const $909285a3c8be19a7$var$TRANSPARENT_BACKGROUND = "rgba(0, 0, 0, 0)";
const $909285a3c8be19a7$var$TARGET_ORIGIN = "*";
const $909285a3c8be19a7$export$a002182e51710d39 = {
    USER_INPUT_RELAY_MESSAGE: $909285a3c8be19a7$var$USER_INPUT_RELAY_MESSAGE,
    OVERLAY_INPUT_MESSAGE: $909285a3c8be19a7$var$OVERLAY_INPUT_MESSAGE,
    DEMO_APP_HOST: $909285a3c8be19a7$var$DEMO_APP_HOST,
    GRAPHQL_HOST: $909285a3c8be19a7$var$GRAPHQL_HOST,
    GRAPHQL_PORT_PUBLIC: $909285a3c8be19a7$var$GRAPHQL_PORT_PUBLIC,
    GRAPHQL_PORT_LOCAL: $909285a3c8be19a7$var$GRAPHQL_PORT_LOCAL,
    GRAPHQL_PATH: $909285a3c8be19a7$var$GRAPHQL_PATH,
    GRAPHQL_URL: $909285a3c8be19a7$var$GRAPHQL_URL,
    EDITABLE_SELECTOR: $909285a3c8be19a7$var$EDITABLE_SELECTOR,
    CANVAS_PATH: $909285a3c8be19a7$var$CANVAS_PATH,
    PARENT_SELECTOR: $909285a3c8be19a7$var$PARENT_SELECTOR,
    URN_PREFIX: $909285a3c8be19a7$var$URN_PREFIX,
    DEPRECATED_URN_PREFIX: $909285a3c8be19a7$var$DEPRECATED_URN_PREFIX,
    META_SELECTOR: $909285a3c8be19a7$var$META_SELECTOR,
    DEMO_APP_HOST_PROD: $909285a3c8be19a7$var$DEMO_APP_HOST_PROD,
    FRAGMENT_TYPE: $909285a3c8be19a7$var$FRAGMENT_TYPE,
    UNIFIED_SHELL_STAGE: $909285a3c8be19a7$var$UNIFIED_SHELL_STAGE,
    UNIFIED_SHELL_PROD: $909285a3c8be19a7$var$UNIFIED_SHELL_PROD,
    HEADLESS_CF_EDITOR_URL: $909285a3c8be19a7$var$HEADLESS_CF_EDITOR_URL,
    CONTAINER_SELECTOR: $909285a3c8be19a7$var$CONTAINER_SELECTOR,
    COMPONENT_ITEM_TYPE: $909285a3c8be19a7$var$COMPONENT_ITEM_TYPE,
    TRANSPARENT_BACKGROUND: $909285a3c8be19a7$var$TRANSPARENT_BACKGROUND,
    TARGET_ORIGIN: $909285a3c8be19a7$var$TARGET_ORIGIN
};



var $49856a0087544515$exports = {};

$parcel$export($49856a0087544515$exports, "getMessageBusEndpoint", () => $412bd680688253f9$export$56d4a4432010e16c);
$parcel$export($49856a0087544515$exports, "getDetailsFromPath", () => $55fc28c10781e136$export$72a2ccb51f32924d);
$parcel$export($49856a0087544515$exports, "obfuscateChannel", () => $e79842964767d4a7$export$8a5bfb505d1f8ad2);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $e79842964767d4a7$export$8a5bfb505d1f8ad2 = ({ channel: channel , broadcast: broadcast  })=>{
    // /canvas/localhost:3000/aaa/bbb/ccc///?hello#world -> localhost:3000/aaa/bbb/ccc
    let sanitized = channel.replace(new RegExp(`(^${(0, $909285a3c8be19a7$export$a002182e51710d39).CANVAS_PATH}\/|\/*$)`, "g"), "");
    // localhost:3000/aaa/bbb/ccc -> localhost:3000
    if (broadcast) sanitized = sanitized.replace(/\/.*/, "");
    return (0, $9ESmw$uuid.v5)(sanitized, (0, $9ESmw$uuid.v5).URL);
};


// path: /canvas/url-to-remote-app.com
// path: /canvas/url-to-remote-app.com/page
// path: /canvas/url-to-remote-app.com/page/sub-page
const $412bd680688253f9$export$56d4a4432010e16c = (path)=>{
    const channel = (0, $e79842964767d4a7$export$8a5bfb505d1f8ad2)({
        channel: path
    });
    const broadcast = (0, $e79842964767d4a7$export$8a5bfb505d1f8ad2)({
        channel: path,
        broadcast: true
    });
    const endpoint = `https://${(0, $909285a3c8be19a7$export$a002182e51710d39).GRAPHQL_URL}/${channel}.${broadcast}`;
    return {
        channel: channel,
        broadcast: broadcast,
        endpoint: endpoint
    };
};


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $55fc28c10781e136$export$72a2ccb51f32924d = ({ path: path  })=>{
    // path: /gql/{channel}.{broadcast}
    // example: /gql/f4ec908f-236e-5f11-8faf-88409a1389f2.1b4db7eb-4057-5ddf-91e0-36dec72071f5
    // channel: f4ec908f-236e-5f11-8faf-88409a1389f2
    // broadcast: 1b4db7eb-4057-5ddf-91e0-36dec72071f5
    const [channel, broadcast] = path.replace(new RegExp(`^${(0, $909285a3c8be19a7$export$a002182e51710d39).GRAPHQL_PATH}/`), "").replace(/\/.*/, "").split(".");
    const result = {
        channel: channel,
        broadcast: broadcast || ""
    };
    return result;
};





$parcel$exportWildcard(module.exports, $b22a30e24d012f07$exports);
$parcel$exportWildcard(module.exports, $49856a0087544515$exports);


//# sourceMappingURL=index.js.map
