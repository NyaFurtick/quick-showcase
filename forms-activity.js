/*
*  Nya Furtick
* Using forms in JavaScript
*/



var myForm = document.forms.myForm;
var pos = document.getElementById('userComments');

function addComment(e){
  e.preventDefault();
  var elements = this.elements;
  var errorMessage = document.getElementById('commentLength');
  if(!validComment()){
    var error = document.createTextNode('Comment must be at least 5 characters!');
    errorMessage.appendChild(error);
  }
  else{
    errorMessage.textContent = '';
    var u = document.createElement('p');
    var username = elements.userName.value;
    u.textContent = username;
    u.setAttribute('class', 'theUser');
    pos2 = pos.appendChild(u);
    var c = document.createElement('p');
    c.setAttribute('class', 'comment');
    var comment = elements.comment.value;
    validComment();
    c.textContent = comment;
    pos.appendChild(c);
    checkRadioButtons(pos2);
    elements.userName.value = '';
    elements.comment.value = '';
  }
}

function checkRadioButtons(pos2){

  var like = document.getElementById('thumbsUp');
  var dislike = document.getElementById('thumbsDown');
  like.addEventListener('click', checkRadioButtons, false);
  dislike.addEventListener('click', checkRadioButtons, false);
  like.disabled = false;
  dislike.disabled = false;

  if(like.checked){
    var l = document.createElement('img')
    l.setAttribute('src', 'thumbsUp.png');
    l.setAttribute('height', '20px');
    l.setAttribute('width', '20px');
    l.setAttribute('class', 'addedBtn');
    pos2.appendChild(l);
    like.disabled = true;
  }

  if(dislike.checked){
    var d = document.createElement('img')
    d.setAttribute('src', 'thumbsDown.png');
    d.setAttribute('height', '20px');
    d.setAttribute('width', '20px');
    d.setAttribute('class', 'addedBtn');
    pos2.appendChild(d);
    dislike.disabled = true;
  }
}

function validComment(){
  var valid = commentArea.value.length >= 5;
  if(!valid){
    return false;
  }
  return true;
}

myForm.addEventListener('submit', addComment, false);
