document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-menu')) {
        this.nextElementSibling.classList.toggle('show');
      }
    });
  });

//hide the deep drop down menu on clicking on any of the parent's Items
document.querySelectorAll('.dropdown .dropdown-item').forEach(function(element){
  element.addEventListener('click', function (e) {
    if(!this.classList.contains('dropdown-toggle'))
    {
      let currentLi = this.parentElement.parentElement.childNodes[0];
      while(currentLi=currentLi.nextElementSibling)
      {
          for (let child of currentLi.childNodes) {
            //nodeType 1 -> element node   3 ->text node  8 -> comment node
            if(child.nodeType === 1 && child.classList.contains('dropdown-menu'))
            {
              child.classList.remove('show')
            }
          }
          
      }
  }
  });
});

  //hide the deep drop down menu on hiding the drop down menu by toggling 
  document.querySelectorAll('.dropdown .dropdown-toggle').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
      if (this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-menu')) {
        if(!this.nextElementSibling.classList.contains('show'))
          document.getElementById('internalList').classList.remove('show');
      }
    });
  });

  //hide the deep drop down menu on item click
  document.querySelectorAll('.dropend .dropdown-menu .dropdown-item').forEach(function(element){
    element.addEventListener('click', function (e) {
      // e.stopPropagation();
      this.parentElement.parentElement.classList.remove('show')
    })});