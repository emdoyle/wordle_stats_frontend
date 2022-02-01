/**
 * Resize images with a Cloudflare worker to support Next.js' automatic image optimization.
 * @param {Context} context
 */
export async function onRequestGet(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
  const BASE_URL = "https://wordle.0x63problems.dev";

  // Parse request URL to get access to query string
  let url = new URL(request.url);

  // Cloudflare-specific options are in the cf object.
  let options = { cf: { image: {} } };

  // Copy parameters from query string to request options.
  // You can implement various different parameters here.
  if (url.searchParams.has("fit"))
    options.cf.image.fit = url.searchParams.get("fit");
  if (url.searchParams.has("width"))
    options.cf.image.width = url.searchParams.get("width");
  if (url.searchParams.has("height"))
    options.cf.image.height = url.searchParams.get("height");
  if (url.searchParams.has("quality"))
    options.cf.image.quality = url.searchParams.get("quality");

  // Your Worker is responsible for automatic format negotiation. Check the Accept header.
  const accept = request.headers.get("Accept");
  if (/image\/avif/.test(accept)) {
    options.cf.image.format = "avif";
  } else if (/image\/webp/.test(accept)) {
    options.cf.image.format = "webp";
  }

  // Get URL of the original (full size) image to resize.
  // You could adjust the URL here, e.g., prefix it with a fixed address of your server,
  // so that user-visible URLs are shorter and cleaner.
  const imageURL = url.searchParams.get("src");
  if (!imageURL) return new Response('Missing "src" value', { status: 400 });

  let href;
  try {
    const parsedURL = new URL(imageURL, BASE_URL);
    href = parsedURL.href;
    // Optionally, only allow URLs with JPEG, PNG, GIF, or WebP file extensions
    // @see https://developers.cloudflare.com/images/url-format#supported-formats-and-limitations
    if (!/\.(jpe?g|png|gif|webp)$/i.test(parsedURL.pathname)) {
      return new Response("Disallowed file extension", { status: 400 });
    }
  } catch (err) {
    return new Response(`Invalid "image" value (${err})`, { status: 400 });
  }

  // Build a request that passes through request headers
  const imageRequest = new Request(href, {
    headers: request.headers,
  });

  // Returning fetch() with resizing options will pass through response with the resized image.
  return fetch(imageRequest, options);
}
