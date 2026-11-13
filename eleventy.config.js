
export default  function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.jpeg");
    eleventyConfig.addPassthroughCopy("**/*.js");



}