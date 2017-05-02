$(document).ready(function(){

	var aryBox0 = '2940743-2940130-3046847-3011269-2940889-3033459-2998418-2999462-3033616-3033073-3033004-2940160';
	var aryBox1 = '3046915-3046833-880840016-3011247-3016466-3007763-3011280-3008953-3016636-3046819-880757347-3011291';
	var aryBox2 = '3033540-3033650-2940860-3033004-2940889-3033459-2940232-3033470-2940899-2939976-3033528-3033616';
	var aryBox3 = '2940743-3033506-2940394-2999404-3033042-3028166-2999802-2940160-2999602-2940317-2999360-3033596';

	/* Call AJAX Box1 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox0},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox0').append($newProduct);
					}       
					else{
						console.log('box0: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox0').slick({
					autoplay: true,
					arrows: true,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					prevArrow: '<button type="button" class="arrow-preview"><i class="fa fa-angle-left" aria-hidden="true"></i><span>anterior</span></button>',
					nextArrow: '<button type="button" class="arrow-next"><span>siguiente</span><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					responsive: [
					{
						breakpoint: 640,
						settings: {
							arrows: false,
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 0);

	/* Call AJAX Box1 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox1},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox1').append($newProduct);
					}       
					else{
						console.log('box1: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox1').slick({
					autoplay: true,
					arrows: true,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					prevArrow: '<button type="button" class="arrow-preview"><i class="fa fa-angle-left" aria-hidden="true"></i><span>anterior</span></button>',
					nextArrow: '<button type="button" class="arrow-next"><span>siguiente</span><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 20);

	/* Call AJAX Box2 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox2},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox2').append($newProduct);
					}       
					else{
						console.log('box2: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox2').slick({
					autoplay: true,
					arrows: true,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					prevArrow: '<button type="button" class="arrow-preview"><i class="fa fa-angle-left" aria-hidden="true"></i><span>anterior</span></button>',
					nextArrow: '<button type="button" class="arrow-next"><span>siguiente</span><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 40);

	/* Call AJAX Box3 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox3},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox3').append($newProduct);
					}       
					else{
						console.log('box4: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox3').slick({
					autoplay: true,
					arrows: true,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					prevArrow: '<button type="button" class="arrow-preview"><i class="fa fa-angle-left" aria-hidden="true"></i><span>anterior</span></button>',
					nextArrow: '<button type="button" class="arrow-next"><span>siguiente</span><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							arrows: false,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 60);
	

});