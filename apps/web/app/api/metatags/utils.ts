import parse from "node-html-parser";
import he from "he";

export const getHtmlfromURL = async (url: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36",
      },
    };
    const html = await fetch(url, options);
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
};

export const getMetaTags = async (url: string) => {
  // YouTube-specific hack
  if (url.includes("youtube.com")) {
    return {
      title: "YouTube",
      description: "YouTube",
      image: "https://www.youtube.com/img/desktop/yt_1200.png",
    };
  }

  const html = await getHtmlfromURL(url);
  if (!html) {
    console.log("NO HTML BRO");
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

  console.log("object", object);

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
