$(document).ready(function(){

  $('form').on('submit', function(){

      var item1 = $('#a1');
      var item2 = $('#a2')
      var todo = {
        typeOfTest: item1.val(),
        description: item2.val()
      };

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

/*
  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });
*/

});
