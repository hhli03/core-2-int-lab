const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addFilter("markdownify", function (content) {
    const md = new markdownIt();
    return md.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
