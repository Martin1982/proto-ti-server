var io = require('socket.io'),
  uri = 'ws://' + Alloy.Globals.liveproto.server + ':' + Alloy.Globals.liveproto.port,
  socket = io.connect(uri);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

socket.on('connect', function applyPrototyping() {

  function setHandlers(children) {
    // Iterate tags
    if (children) {
      children.forEach(function (tag) {
        // If current tag has an id property
        if (tag['id']) {
          tag.addEventListener('click', function() {
            socket.emit('element', tag);
          });
        }
        // think about the children!
        setHandlers(tag.views || tag.children);
      });
    }
  }
  // initial call, wrap in an array
  setHandlers([__parentSymbol]);
});



socket.on('refresh-element', function(data){
  function findElement(id, children) {
    // Iterate tags
    if (children) {
      children.forEach(function (tag) {
        // If current tag has an id property
        if (tag['id'] && tag['id'] === id) {
          tag['set' + capitalizeFirstLetter(data['property'])](data['value']);
        }
        // think about the children!
        findElement(id, tag.views || tag.children);
      });
    }

  }
  findElement(data['id'], [__parentSymbol]);
});