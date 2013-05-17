var world = document.getElementById( 'world' ),
  viewport = document.getElementById( 'viewport' ),
  
  d = 0,
  worldXAngle = 0,
  worldYAngle = 0;

window.addEventListener( 'mousewheel', onContainerMouseWheel );
window.addEventListener( 'DOMMouseScroll', onContainerMouseWheel ); 

window.addEventListener( 'mousemove', function( e ) {
  worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
  worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
  updateView();
} );

function updateView() {
  var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
  world.style.webkitTransform = t;
  world.style.MozTransform = t;
  world.style.oTransform = t;
}

function onContainerMouseWheel( event ) {
    
  event = event ? event : window.event;
  d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
  updateView();
  
}

