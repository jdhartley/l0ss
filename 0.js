$(function()
{
  console.log('blast.off!');

  var $h = $('h1').html(function()
  {
    var $span = $('<span>').text( $(this).text() );
    return [$span.clone(), $span];
  }),

    $e = $h.find('span').last(),

    height = $e.height(),
    width = $e.width();

  $e.css({
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width,
    overflow: 'hidden',
    'background-color': '#000'
  });

  var rnd=function(a)
  {
    return Math.floor(Math.random()*(a+1));
  },

  rnda = function(a)
  {
    return Math.random() < .5 ? rnd(a) : rnd(a * -1);
  },

  g = function()
  {
    for ( var i = 0; i <= rnd( 5 ); i++ )
    {
      setTimeout(function()
      {
        $e.css( Math.random() < 0.5
          ? {
            top: rnda( 6 ),
            width: rnd( Math.floor( width * .8 ) ) + 2,
            height: height
          }
          : {
            left: rnda( 6 ),
            height: rnd( Math.floor( height * .8 ) ) + 2,
            width: width
          }
        );
      }, rnd( 300 ));
    }

    setTimeout(function()
    {
      $e.css({ left: 0, top: 0 })
    }, 340);

    setTimeout( g, ( rnd(4) + 1 ) * 200 );
  }

  g();

});
