import parse from "node-html-parser";

export const getHtmlfromURL = async (url: string) => {
    try {
        const html = await fetch(url);
        return html.text()
    } catch (error) {
        return null
    }
}

export const getHeadTag = (url: string) => {
    const parsedHTML = parse(url)
    const metaTags = parsedHTML.querySelectorAll("meta").map(({ attributes }) => {
        return {
            property: attributes.property || attributes.name || attributes.href,
            content: attributes.content
        }
    })
    const title = parsedHTML.querySelector("title")?.innerText
    return {
        metaTags,
        title
    }
    // console.log('parsed html : ', title);
}

export const getMetaTags = async (url: string) => {
    const html = await getHtmlfromURL(url);
    if (!html) {
        return {
            title: null,
            description: "No description",
            image: null,
        }
    }
    const { title: titleTag, metaTags } = getHeadTag(html)
    const ogTitle = metaTags.find(tag => tag.property === 'og:title')?.content;
    const ogDescription = metaTags.find(tag => tag.property === 'og:description')?.content;
    const ogImage = metaTags.find(tag => tag.property === 'og:image')?.content;
    const twitterImage = metaTags.find(tag => tag.property === 'twitter:image')?.content;
    const imageSrc = metaTags.find(tag => tag.property === 'image_src')?.content;

    // Fall back to description meta tag if og:description is not found
    const description = ogDescription || metaTags.find(tag => tag.property === 'description')?.content || "No description";

    return {
        title: ogTitle || titleTag || url,
        description,
        image: ogImage || twitterImage || imageSrc || null
    };
}