window.alert = function(text) {
  var iframe = document.createElement('iframe');
      iframe.setAttribute('text', '-');
      iframe.style.display = 'none';
      
      document.documentElement.appendChild(iframe);
      iframe.contentWindow.alert(text);
      iframe.parentNode.removeChild(iframe);
}

alert('JavaScript');
