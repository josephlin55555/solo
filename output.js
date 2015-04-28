$('.submit').on('click', function() { //submit handles click and enter
  //grab message and user
  var message = $('.inputMessage').val();
  var user = $('.inputUser').val();
  
  //clear input box
  $('.inputMessage').val('');
  if(!user || !message) {
    console.log('Need to populate both user and message fields');
    return;
  }

  var buttons = '<button class="like">Like</button> <button class="dislike">Dislike</button>';

  $('.output').prepend('<div class="container"><span class="message">' + user + ' says '  + message + '</span>' + buttons + '</div> </span>');

  $('.like').on('click', function() {

  });


  $('.dislike').on('click', function() {

  });

});





