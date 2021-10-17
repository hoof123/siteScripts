// listener - onLoad
window.addEventListener('load', function() {

  // elements interacted with
  interact(document.getElementsByTagName('body'));
  
  // interactions
  function interact(nodes) {

    for(let i=0; i < nodes.length; i++) {
      
      // touch
      nodes[i].ontouchstart = nullEvent;
      // nodes[i].ontouchmove = nullEvent;
      // nodes[i].ontouchend = nullEvent;
      nodes[i].ontouchcancel = nullEvent;

      // right click and middle click
      nodes[i].oncontextmenu = nullEvent;
      nodes[i].onauxclick = nullEvent;

      // copy, paste, and cut
      nodes[i].oncopy = nullEvent;
      nodes[i].onpaste = nullEvent;
      nodes[i].oncut = nullEvent;
    }
  }
  
  // null the interaction
  function nullEvent(event) {

    // console.log('protectYaNeck');

    var e = event || window.event;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }
}
);