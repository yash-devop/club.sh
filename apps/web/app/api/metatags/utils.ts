import parse from "node-html-parser";
import he from "he";

export const getHtmlfromURL = async (url: string) => {
  try {
    const html = await fetch(url, {
      headers: {
        "User-Agent": "Club Metatag API (https://club.yashstack.com)",
      },
    });
    const text = await html.text();
    return text;
  } catch (error) {
    return null;
  }
};

export const getHeadTag = (html: string) => {
  const parsedHTML = parse(html);
  const metaTags = parsedHTML.querySelectorAll("meta").map(({ attributes }) => {
    return {
      property: attributes.property || attributes.name || attributes.href,
      content: attributes.content,
    };
  });
  const title = parsedHTML.querySelector("title")?.innerText;
  return {
    metaTags,
    title,
  };
  // console.log('parsed html : ', title);
};

export const getMetaTags = async (url: string) => {
  const html = await getHtmlfromURL(url);
  if (!html) {
    return {
      title: url,
      description: "No description",
      image: null,
    };
  }
  const { metaTags, title: titleTag } = getHeadTag(html);

  let object: { [key: string]: string | undefined } = {};

  Object.entries(metaTags).forEach(([key, { property, content }]) => {
    if (property && !object[property]) {
      object[property] = content && he.decode(content);
    }
  });

  console.log('object',object);

  const title = object["og:title"] || object["twitter:title"] || titleTag;

  const description =
    object["description"] ||
    object["og:description"] ||
    object["twitter:description"];

  const image =
    object["og:image"] ||
    object["twitter:image"] ||
    object["image_src"] ||
    object["icon"] ||
    object["shortcut icon"];

  return {
    title: title || url,
    description: description || "No description",
    image,
  };
};
