module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("app/assets/dist");

  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: "app/",
      output: "dist"
    },
    passthroughFileCopy: true
  }
};