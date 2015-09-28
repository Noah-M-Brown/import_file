function getStyle(program_id,type) {
  var styleEl=document.getElementsByTagName(type)[0];
  $.getJSON("https://www.khanacademy.org/api/internal/show_scratchpad?scratchpad_id="+program_id+"&casing=camel&topic_slug=computer-programming&lang=en&_=1443392559115&callback=?",function(data) {
    if(styleEl===undefined) {
      styleEl=document.createElement(type);
      document.head.appendChild(styleEl);
    }
    styleEl.innerHTML=data.scratchpad.revision.code; 
  });
}
