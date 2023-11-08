const API_URL = "https://httpbin.org/json";

(async () => {
  // Let's make a request
  // https://httpbin.org/json
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data);
    if (!!data?.slideshow?.author) {
      window.parent.postMessage(JSON.stringify(data), {
        targetOrigin: "*",
      });
      alert("It works");
    }
  } catch(e) {
    console.error(e);
  }
})();
