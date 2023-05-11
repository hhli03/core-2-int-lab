module.exports = function(eleventyConfig) {
    // Return your Object options:

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };