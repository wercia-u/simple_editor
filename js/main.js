//Kolorki Pani Kasi
$(document).ready(function(){
	zainicjalizuj('#box_background', '#wynik', 'background');
	zainicjalizuj('#box_color', '#wynik', 'color');
	font_buttons();
	
	$('#text').keyup(function(){
		$('#wynik p').text($(this).val());
	});
});


function zainicjalizuj(box_selektor, wynik_selektor, css ){
	
	$(box_selektor).data('wynik',wynik_selektor);
	$(box_selektor).data('css',css);
	
	zrob_knefle(box_selektor, 'r');
	zrob_knefle(box_selektor, 'g');
	zrob_knefle(box_selektor, 'b');
	styluj_knefle(box_selektor);
	sluchaj_knefli(box_selektor);
	koloruj(box_selektor);
}

function zrob_knefle(box_selektor, typ){
		if($(box_selektor).data('css')=='color'){
			$(box_selektor).data(typ,'0');
		}
		else{
			$(box_selektor).data(typ,'F');
		}
		label = '<div class="label">';
		if(typ == 'r'){
			label += '<div class="red">red: </div>';
		}else if(typ == 'g'){
			label += '<div class="green">green:</div> ';
		}else if(typ == 'b'){
			label += '<div class="blue">blue: </div>';
		}
		label += '</div>';
		$(box_selektor).append(label);
		for(i = 0; i <= 15; i++){
			rgb_value = zamien_na_hex(i.toString());
			var klasa = 'knefel_'+typ+'_'+rgb_value;
			box = '<div class="knefel '+ klasa + '" data-val="'+rgb_value+'" data-type="'+typ+'" >'+rgb_value+'</div>';
			$(box_selektor).append(box);
		}
		
}


function styluj_knefle(box_selektor){
	$(box_selektor).addClass('anim');
	zaznacz_domyslne(box_selektor);
}

function zaznacz_domyslne(box_selektor){
	$(box_selektor + ' .knefel_r_'+$(box_selektor).data('r')).addClass('aktywny');
	$(box_selektor + ' .knefel_g_'+$(box_selektor).data('g')).addClass('aktywny');
	$(box_selektor + ' .knefel_b_'+$(box_selektor).data('b')).addClass('aktywny');
	
}

function sluchaj_knefli(box_selektor){
		$(box_selektor + ' .knefel').on('click', function(){
			type = $(this).data('type');
			if(type == 'r'){
				$(box_selektor).data('r', $(this).data('val'));
			}else if(type == 'g'){
				$(box_selektor).data('g',$(this).data('val'));
			}else if(type == 'b'){
				$(box_selektor).data('b', $(this).data('val'));
			}
			koloruj(box_selektor);
			$(box_selektor + ' .knefel').removeClass('aktywny');
			zaznacz_domyslne(box_selektor);
		});
}

function koloruj(box_selektor){
	$($(box_selektor).data('wynik'))
		.css($(box_selektor).data('css'), '#'+$(box_selektor).data('r')+$(box_selektor).data('g') + $(box_selektor).data('b'));
}

function zamien_na_hex(wartosc){
		switch(wartosc){
			case '10': text = 'A'; break;
			case '11': text = 'B'; break;
			case '12': text = 'C'; break;
			case '13': text = 'D'; break;
			case '14': text = 'E'; break;
			case '15': text = 'F'; break;
			default: text = wartosc;
		}
		return text;
}

function font_buttons() {
	$('<button class="btn btn-default btn-md" type="button" data-font="Arial" >Arial</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Georgia" >Georgia</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Times New Roman" >Times New Roman</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Verdana" >Verdana</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Impact" >Impact </button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Comic Sans MS" >Comic Sans MS</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Palatino Linotype" >Palatino Linotype</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Tahoma" >Tahoma</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Courier New" >Courier New</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Lucida Console" >Lucida Console</button>').click(on_font_button_click).appendTo('.font');
	$('<button class="btn btn-default btn-md" type="button" data-font="Book Antiqua" >Book Antiqua</button>').click(on_font_button_click).appendTo('.font');
}

function on_font_button_click(){
	$('#wynik').css('font-family', '"' + $(this).data('font') + '"');
}

