export default function meta(metaTags) {
  const metaObj = { meta: {} };
  if (!metaTags) {
    return metaObj;
  }
  if (metaTags.title) {
    metaObj.title = metaTags.title;
    metaObj.meta.ogTitle = { name: "og:title", content: metaTags.title };
    metaObj.meta.twitterTitle = {
      name: "twitter:title",
      content: metaTags.title,
    };
  }
  if (metaTags.description) {
    metaObj.meta.description = {
      name: "description",
      content: metaTags.description,
    };
    metaObj.meta.ogDescription = {
      name: "og:description",
      content: metaTags.description,
    };
    metaObj.meta.twitterDescription = {
      name: "twitter:description",
      content: metaTags.description,
    };
  }
  if (metaTags.url) {
    metaObj.meta.ogUrl = { name: "og:url", content: metaTags.url };
    metaObj.meta.twitterUrl = {
      name: "twitter:url",
      content: metaTags.url,
    };
    metaObj.meta.canonical = { rel: "canonical", href: metaTags.url };
  }
  if (metaTags.img) {
    metaObj.meta.ogImage = { name: "og:image", content: metaTags.img };
    metaObj.meta.twitterImage = {
      name: "twitter:image",
      content: metaTags.img,
    };
  }
  return metaObj;
}
