'use strict';

const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    const response = await fetch(
        "https://translator-service-kyyxofu25q-uc.a.run.app" + "/?content=" + postData.content,
    );
    const data = await response.json();
    return [data["is_english"], data["translated_content"]];
};
