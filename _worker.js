export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (["/portal", "/portal/"].includes(url.pathname)) {
      url.pathname = "/portal/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return env.ASSETS.fetch(request);
  }
};
