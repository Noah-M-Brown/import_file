function getStyle(program_id) {
  var styleEl=document.getElementsByTagName("style")[0]
  console.log(styleEl)
  $.getJSON("https://www.khanacademy.org/api/internal/show_scratchpad?scratchpad_id="+program_id+"&casing=camel&topic_slug=computer-programming&lang=en&_=1443392559115&callback=?",function(data) {
    styleEl.innerHTML=data.scratchpad.revision.code; 
  });
}
