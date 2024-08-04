/** main function */
(async function main() {
  // import module
  await Promise.all([
    $.getScript('/js/common/base-button.js'),
    $.getScript('/js/components/aplayer.js'),
  ])
})()