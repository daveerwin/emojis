// Login to your team through the browser. Run this on the browsers dev tools javascript console
// Originally from https://gist.github.com/lmarkus/8722f56baf8c47045621
// Altered to create yml friendly output
// Copy/paste this into a .yml file to bulk upload using https://github.com/lambtron/emojipacks

var url, name, emoji = [];

$('#custom_emoji .emoji_row') // This is the emoji selector's Custom section.
  .each(function () { 
   // Extract the name
    name = $(this).find(':nth-child(2)')
      .html()
      .replace(/:/g, ''); // without the enclosing colons.
    
    // Extract the url from the background-image property.
    url = $(this).find('span')
      .attr('data-original')
      .replace(/.*["'](.*)['"].*/, '$1'); // Remove the`url("` and `")` portions.
    
    // Dump to console, then copy and paste the results into a file (eg: emojiURLs.txt).
    var string = "- name: " + $.trim(name) + "\n" + "  src: " + $.trim(url);
    console.log(string);
  });