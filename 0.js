~(function(L0SS)
{
	var glitchy = function()
	{
		$('<h1><span>project</span> <span>L0SS</span></h1>').appendTo('body').find('span').each(function()
		{
			var $h = $(this).html(function()
				{
					var text = $(this).text();
					return '<span>' + text + '</span><span>' + text + '</span>';
				}),

				$e = $h.find('span').last(),

				height = $e.height(),
				width = $e.width(),
				rnd = function( a ) { return Math.floor( Math.random() * ( a + 1 ) ) },
				rnda = function( a ) { return Math.random() < .5 ? rnd(a) : rnd(a * -1) },

				glitch = function()
				{
					for ( var i = 0; i <= rnd( 5 ); i++ )
					{
						setTimeout(function()
						{
							$e.css({
								left: rnda( 6 ),
								height: rnd( Math.floor( height * .8 ) ) + 2,
								width: width
							});
						}, rnd( 300 ));
					}

					setTimeout(function() { $e.css({ left: 0, top: 0 }) }, 340);
					setTimeout( glitch, ( rnd(4) + 1 ) * 200 );
				};

			$e.css({
				position: 'absolute',
				height: height,
				width: width
			});

			glitch();

		});
	};

	$(glitchy);

}());

document.title = 'project L0SS';
