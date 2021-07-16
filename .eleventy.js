const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/_site.js");
  eleventyConfig.setBrowserSyncConfig({
    files: "./public/css/**/*.css",
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  //? tags
  eleventyConfig.addCollection("tagsList", function (collectionApi) {
    const tagsList = new Set();
    collectionApi.getAll().map((item) => {
      if (item.data.tags) {
        // handle pages that don't have tags
        item.data.tags.map((tag) => tagsList.add(tag));
      }
    });
    return tagsList;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
