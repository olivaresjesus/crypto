var appCrypto = angular.module('appCrypto',['ngRoute','ngMaterial','ngSanitize'])
						.config(function($mdDateLocaleProvider) {
						  $mdDateLocaleProvider.formatDate = function(date) {
						    return moment(date).format('YYYY-MM-DD');
						  };
						});

appCrypto.config( ['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider$log){

	$routeProvider.when('/', {
		redirectTo: '/crypto/en'
	})
	.when('/crypto/:lang', {
		templateUrl: 'template/home.html',
		controller:'home'
	})
	.when('/about/:lang', {
		templateUrl: 'template/about.html',
		controller: 'about'
	})
	.when('/services/:lang',{
		templateUrl: 'template/services.html',
		controller: 'services'
	})
	.when('/contact/:lang',{
		templateUrl: 'template/contact.html',
		controller: 'contact'
	})
	.when('/acount/:lang',{
		templateUrl: 'template/acount.html',
		controller: 'acount'
	})
	.when('/404', {
		templateUrl: 'template/404.html',
		controller: 'unknow'
	})
	.when('/users/',{
		templateUrl: 'template/user.html',
		controller: 'users'
	})
	.when('/exit',{
		templateUrl: 'template/exit.html',
		controller: 'exit'
	})
	.otherwise({
		redirectTo: '/404'
	})
}]);

appCrypto.constant( 'configuracionGlobal', {

	'nombreDelSitio': 'Corporación Rajuela',
	'api_url': 'http://localhost/crypto',
	'carpeta_imagenes': '/img/',
	'logo': 'athenacryptobank.png',
	'img': {
		'historia': 'historia.png',
		'calculadora': 'calculadora.jpeg',
		'home_principal': 'home-principal.png',
		'criptomonedas': ["criptomonedas/1.jpg","criptomonedas/2.jpg","criptomonedas/3.png","criptomonedas/4.jpg","criptomonedas/5.png","criptomonedas/6.jpg","criptomonedas/7.png","criptomonedas/8.jpg","criptomonedas/9.png","criptomonedas/10.png","criptomonedas/11.jpg","criptomonedas/12.jpg","criptomonedas/13.png","criptomonedas/14.jpg"],
		'pagos': ['pagos/1.jpg','pagos/2.jpg','pagos/3.png','pagos/4.png','pagos/5.png','pagos/6.png'],
		'telegram': 'telegram.png',
		'whatsapp': 'whatsapp.jpg',
		'conect': 'conect.png',
		'logo_grande': 'logo-grande.png',
		'cambio': 'cambio.png',
		'boveda': 'boveda.png',
		'invertir': 'invertir.png',
		'espanyol': 'es.jpeg',
		'english': 'en.jpeg',
		'italian': 'it.jpeg',
		'modalidades': 'modalidades.jpg',
		'business': 'business.png'
	},
	'lang': {
			'es': {
				'home': [
					'ATHENA CRYPTO BANK',
					'INVIERTE ',
					'DEPOSITA',
					'COMPRA Y VENDE',
					'Athena Crypto Bank fué creada para que tus Criptomonedas y tus ahorros estén seguros. Athena Crypto Bank te da tambien la posibilidad de invertir en el sector de la Criptomoneda de manera simple sin arriesgar en su gran volatilidad y obteniendo una ganancia mensual segura, te permite tambien depositar criptomonedas en modo seguro con un portafolio offline o comprar y vender criptomenda al mejor precio del mercado. Tu asesor personal te ayudará a comprar o vender con la modalidad que prefieras metiendote en contacto con otros de nuestros clientes. ',
					'¿Listo para iniciar con nosotros?',
					'REGISTRATE',
					'CRYPTOMONEDAS',
					'MODALIDADES DE PAGO',
					'INVIERTE SEGURO',
					'¿Te gustaría invertir en la criptomoneda pero tienes miedo de su gran volatilidad?',
					'Athena Crypto Bank te permite invertir de modo seguro en la Criptomoneda  sin preocuparte si esta sube o baja. Athena Crypto Bank compra Criptomonedas en países donde el precio es más bajo y vende instantaneamente en países donde el precio es más alto, esto nos permite garantizar una ganancia mensual y sin riegos de hasta un 10%. El dinero invertido y la ganancia generada serán enviadas en la misma modalidad en la que se realice el pago inicial despúes de 30 días. ',
					'',
					'CAMBIO',
					'CRYPTO BANK',
					'El problema con la Criptomoneda es la seguridad. Cada día los hackers del mundo atacan sitios que almacenan criptomonedas, incluso si un sitio es importante y bien protegido pues, un ataque coordinado puede eludir la seguridad de los sitios más grandes. Pero, ¿Tambien Coinbase? Si, Coinbase es un de los sitios más grandes del mundo que tiene la funcion de portafolio, pero es siempre un sitio que mantiene tus monedas online y por lo tanto expuestas a un riesgo.',
					'¡Athena Crypto Bank es diferente! Tus Criptomonedas estarán seguras en un Portafolio Hardware Offline imposible de penetrar. <br><br>Pondrá estar en contacto con su asesor solo a través de Whatsapp y Telegram, él se encargará de su solicitud y se lo transmitirá a nuestro equipo de expertos en seguridad informática que lo ejecutará de inmediato. Es por eso que Athena Crypto Bank es más seguro que otros sitios. Servicio disponible solo para usuarios Gold y Platino.',
					"¡Y MUCHAS MÁS!",
					"Athena Crypto Bank ha sido creada para que tus criptomonedas estén seguras. Te da la posibilidad de Invertir sin arriesgar tu capital y obteniendo una ganancia mensual. Deposita tus criptomonedas en portafolios offline a prueba de hackers y compra o vende al mejor precio del mercado.",
					"ACCETTA CRYPTO NELLA TUA ATTIVITA",
					"Quando vendi un prodotto, che tu lo faccia per lavoro con la tua impresa o per ragioni personali specifica che accetti cryptomoneta! elaboreremo noi il pagamento e ti manderemo un bonifico bancario dell importo che avevi richiesto all acquirente. puoi avere un tasso di cambio instantaneo, e ricevere i tuoi soldi in 24 ore direttamente sul tuo conto bancario e in qualunque parte del mondo con l importo corrispondente. Elaboriamo pagamenti in Euro - Gbp - Usd e altre valute.",
					"Consegna il prodotto solo una volta che ti confermeremo l invio dell importo tramite bonifico verso il tuo conto bancario, in modo che accettare criptomoneta non diventi pericoloso. In massimo 2 ore dal pagamento avvenuto da parte dell acquirente, eseguiremo il bonifico sul iban da te impostato. <br> Il servizio è gratuito."
					
				],
				'about': [
						'ATHENA CRYPTO BANK',
						'INVIERTE, DEPOSITA, COMPRA Y VENDE',
						'Una criptomoneda es una moneda equitativa, descentralizada y digital cuya implementación se basa en los principios de la criptografía para validar las transacciones y la generación de dinero en sí. Al igual que cualquier moneda digital permite realizar pagos de manera rápida, segura y económica.',
						'¿QUIENES SOMOS?',
						'CONFIANZA',
						'Athena Crypto Bank es un proyecto certificado y administrado por Athena Up SA. La idea es brindar la posibilidad incluso al usuario menos tecnológico acercarse con seguridad al mundo de Criptomoneda, es un sitio seguro y simple que te permite administrar tus criptomonedas a través de aplicaciones como WhatsApp, nuestros clientes tendrán la oportunidad de invertir con métodos seguros, depositar criptomonedas en portafolios impenetrables y realizar pedidos para la compra y venta de criptomonedas.',
						'Para nosotros lo más importante es la confianza, por lo que responderemos cualquier pregunta relacionada con el funcionamiento del sitio a través de Whatsapp o Telegram, nuestro equipo de soporte H24 estará encantado de ayudarte con cualquier problema.',
						'USUARIOS',
						'USUARIO NORMAL:',
						'Inversión +3% de ganancia mensual – Almacenamiento de Criptomonedas no habilitado – Compraventa del 11% al 15% de comisión - Asistencia activa de las 11.00 a las 17.00 hrs. solo por Telegram.',
						'USUARIO ORO:',
						'Inversión +6% de ganancia mensual - Almacenamiento de Criptomonedas habilitado –Compraventa del 7% al 10% de comisión - Asistencia activa de las 8.00 a 20.00 hrs. a través de Telegram y Whatsapp. ',
						'USUARIO PLATINO:',
						'Inversión +10% de ganancia mensual y la acreditación de un % sobre las inversiones de los amigos que invito - Almacenamiento de Criptomonedas habilitado - Compraventa del 3% al 6% de comisión - tarjeta de débito para compras en línea bajo pedido y asistencia H24 a través de Telegram, Whatsapp Y Signal.',
						'CONTÁCTANOS',
						'​Obtén nuestra confianza respetando los pedidos y obtén increíbles beneficios.​',
						'TELEGRAM-WHATSAPP-SIGNAL',
						'0052 1 984 229 6332',
						'support@athenacryptobank.com',
						'Realiza todas las operaciones de forma personalizada, resuelve todas tus dudas sobre nuestros servicios y luego de haberte registrado, recibirás asesoramiento y consejos sobre inversiones en criptomonedas.',
						['SERVICIO GRATUITO'," SÓLO  149 USD AL AÑO ",' SÓLO  399 USD AL AÑO '],
						"<br><br><br>En sus casi 8 años de existencia, las Criptomonedas ganaron gradualmente la atención del público y los medios. Desde 2011, el interés ha aumentado rápidamente, especialmente durante el vertiginoso aumento de Bitcoin en abril del año 2013."
						],
				'service': [
					'INVERTIR',
					'​INVIERTE CON ATHENA CRYPTO BANK Y RECIBE CADA MES UNA GANANCIA DE HASTA EL 10% EN RELACIÓN CON TU INVERSIÓN, MODALIDAD SEGURA PARA INVERTIR EN LA CRIPTOMONEDA Y SIN PREOCUPACIONES POR LA OSCILACIÓN DE SU VALOR.<br><br><br><br>',
					'SERVICIO DE BANCO',
					'UTILIZA ATHENA CRYPTO BANK PARA DEPOSITAR TUS CRIPTOMONEDAS EN SEGURIDAD TOTAL, DEJALAS ALMACENADAS POR AÑOS SIN PREOCUPACIONES DE  CONTRASEÑAS U OLVIDOS DE LLAVES DE SEGURIDAD. SOLICITA TAMBIEN EL MODO DE RECONOCIMIENTO AVANZADO.',
					'COMPRAVENTA',
					'​​CON ATHENA CRYPTO BANK LA COMPRA Y VENTA DE CRIPTOMONEDAS NUNCA HA SIDO TAN FÁCIL, BASTA CONSULTAR A TRAVÉS DE TELEGRAM A NUESTROS ASESORES EL MEJOR PRECIO DEL MOMENTO CON LOS DIFERENTES MÉTODOS DE PAGO. <br> <br> <br> <br>',
					'SERVICIOS',
					"Términos y condiciones de uso:",
					"Modalidad de pago: ",
					"-Tarjeta de Débito y Crédito  ",
					" (Costos cargados al usuario)",
					"-Paypal",
					" (Costos de paypal a cargo del usuario)",
					"-Transferencia Bancaria",
					" (Sin costo aplicable)",
					"-Criptomoneda",
					" (Sin costo aplicable)",
					"Retiro de la inversión:",
					"-La inversión puede ser retirada en su totalidad con el beneficio generado después de 30 días. si el usuario no lo solicita, se reutilizarán otros 30 días, en el momento de la solicitud de retiro se acreditará toda la inversión más las ganancias generadas dentro de las siguientes 48 horas hábiles.",
					"Para la acreditación, se usará la misma moneda y el mismo método de pago inicial utilizado por el usuario.",
					"Ejemplo: Inversión de 100 euros trámite transferencia bancaria recibida el 15 marzo 2018 – Enviaremos una transferencia de 110 euros el 14 de abril 2018. <br> <br> <br> <br> <br> <br> <br> <br> <br>",
					"Términos y condiciones de uso:",
					"Monedas depositables:",
					"-BTC - ​BCH - BTG - DASH - DOGE - ETH - ETC - LTC - NEO - XST - XRP - XLM  - ZEC - XVG - BCN",
					"A pedido podrían ser aceptadas tambien otras monedas que no figuran en la lista, contacta el equipo de soporte para cualquier pedido personalizado.",
					"Retiro de monedas:",
					"-Las monedas se pueden retirar en cualquier momento sin costo adicional.",
					"Solo se cobrará el costo de envío de Blockchain.",
					"Suscripción no reembolsable. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>",
					"Términos y condiciones de uso:",
					"Monedas Disponibles: ",
					"-BTC - ​BCH - BTG - DASH - DOGE - ETH - ETC - LTC - NEO - XST - XRP - XLM  - ZEC - XVG - BCN",
					"A pedido podrían ser aceptadas tambien otras monedas que no figuran en la lista, contacta el equipo de soporte para cualquier pedido personalizado.",
					"Retiro de monedas:",
					"El retiro de monedas depende de varios factores:",
					"Tipo de cuenta - Cantidad comprada - Valor de operación - Modalidad de pago.",
					"Para evitar pagos fraudulentos, debemos establecer un límite de compra o retiro como medida para la demostración de que pago sea legal.Entonces, si pago por transferencia bancaria, ¿No puedo retirar mi criptomoneda de inmediato? ¡Por supuesto! sin embargo, podríamos solicitar una videollamada con un documento a nombre del titular de la cuenta bancaria utilizada o esperando a que expire el tiempo para los informes fraudulentos.Para el retiro de las monedas compradas a través de Paypal, la operación es similar, puede ser necesaria una declaración de “nada que esperar después de recibido” o esperar el plazo para la apertura de una disputa. Las monedas compradas se mantendrán seguras en un portafolio hardware offline independientemente del tipo de cuenta abierta.",
					"​Suscripción no reembolsable."
				],
				'contact': [
							'CONTÁCTANOS',
							'Nombre:',
							'Correo:',
							'Asunto:',
							'Mensaje:',
							'Athena Crypto Bank',
							'Telefono: <br> 0052 1 984 229 6332',
							'Correo: support@athenacryptobank.com',
							' ENVIAR'
					],
				'acount': [
							'MIS INVERSIONES',
							'Fecha',
							'QUIERO INVERTIR',
							'RETIRAR  INVERSION',
							'¿NECESITAS AYUDA?',
							'BANCO',
							'MIS MONEDAS',
							'QUIERO DEPOSITAR',
							'QUIERO RETIRAR',
							'¿NECESITAS AYUDA?',
							'COMPRAVENTA',
							'OBTEN AL MOMENTO UN PRECIO ORIENTATIVO',
							'WHATSAPP',
							'TELEGRAM',
							'SIGNAL',
							'0052 1 984 229 6332',
							'COMPRA',
							'VENTA',
							'¿NECESITAS AYUDA?',
							'HAZ CLICK AQUI PARA REGRESAR A LA HOME',
							'Cerrar sesión',
							'Correo:',
							'Constraseña:',
							'Email/Phone o Contrasena Incorrecta'

				],
				'footer': 'Copyright © Athena Crypto Bank',
				'menu': ['HOME','NOSOTROS','SERVICIOS','CONTACTO','MI CUENTA']
			},
			'en': {
				'home': [
					'Athena Crypto Bank',
					'INVEST',
					'DEPOSIT',
					'BUY AND SELL',
					'Athena Crypto Bank was created so that your Cryptocurrencies and your savings are safe. <br> Athena Crypto Bank also gives you the possibility to invest in the Cryptocurrency sector in a simple way without risking its great volatility where you can obtain a secure monthly profit, it also allows you to deposit cryptocurrencies in safe mode with an offline wallet or buy and sell crypto at the best market price. Your personal advisor will help you buy or sell using which ever medium you prefer also by introducing you to other clients.',
					'Ready to start with us?',
					'SIGN UP',
					'CRYPTOCURRENCY',
					'PAYMENT METHOD',
					'SECURE INVESTMENT',
					'Would you like to invest in the Cryptocurrency but are you afraid of its volatile nature?',
					'Athena Crypto Bank allows you to invest safely in the Cryptocurrency without worrying if it goes up or down. Athena Crypto Bank buys Cryptocurrencies in countries where the price is lower and sells instantly in countries where the price is higher, this allows us to guarantee a monthly profit without risk of up to 10%. The money invested and the profit generated will be sent through the same medium in which the initial payment was made after 30 days.',
					'',
					'CHANGE',
					'CRYPTO BANK',
					'The problem with the cryptocurrency is security. Every day hackers around the world attack sites that store cryptocurrencies, even if a site is important and well protected because a coordinated attack can elude the security of larger websites. Website giants like Coinbase can be affected, Coinbase is one of the largest sites in the world that has a portfolio function but it is always a site that keeps your currencies online and therefore exposed to risk.',
					"Athena Crypto Bank is different! Your Cryptocurrencies will be secure in an impossible to penetrate Hardware Portfolio. <br><br> You will be in touch with your adviser only through WhatsApp and Telegram, the support will take care of your request and will transmit it to our team of computer security experts who will execute it immediately. That's why Athena Crypto Bank is safer than other sites.  This service available only to Gold and Platinum users.",
					"AND MANY MORE!",
					"Athena Crypto Bank was created in order to make your crypts safe. It gives you the opportunity to invest without risking, earning a fixed profit, depositing in hacker-proof offline portfolios without having to remember passwords and buy or sell Crypto at the best price on the market.",
					"ACCETTA CRYPTO NELLA TUA ATTIVITA",
					"Quando vendi un prodotto, che tu lo faccia per lavoro con la tua impresa o per ragioni personali specifica che accetti cryptomoneta! elaboreremo noi il pagamento e ti manderemo un bonifico bancario dell importo che avevi richiesto all acquirente. puoi avere un tasso di cambio instantaneo, e ricevere i tuoi soldi in 24 ore direttamente sul tuo conto bancario e in qualunque parte del mondo con l importo corrispondente. Elaboriamo pagamenti in Euro - Gbp - Usd e altre valute.",
					"Consegna il prodotto solo una volta che ti confermeremo l invio dell importo tramite bonifico verso il tuo conto bancario, in modo che accettare criptomoneta non diventi pericoloso. In massimo 2 ore dal pagamento avvenuto da parte dell acquirente, eseguiremo il bonifico sul iban da te impostato. <br> Il servizio è gratuito."
				],
				'about': [
						'ATHENA CRYPTO BANK',
						'INVEST, DEPOSIT, BUY AND SELL',
						'A cryptocurrency is an equitable, decentralized and digital currency whose implementation is based on the principles of cryptography to validate transactions and the generation of money itself. Like any digital currency, it allows payments to be made quickly, safely and economically.',
						'ABOUT US',
						'RELIABILITY',
						"Athena Crypto Bank is a project certified and managed by Athena Up SA. The idea is to offer the possibility even to the least technological user to safely approach the world of Cryptocurrency, it is a safe and simple site that allows you to manage your cryptocurrencies through applications such as WhatsApp, our clients will have the opportunity to invest with safe methods, deposit cryptocurrencies in impenetrable portfolios and place orders for the purchase and sale of cryptocurrencies.",
						'For us, the most important thing is trust, so we will answer any questions related to the operation of the site through Whatsapp or Telegram, our support team works 24hours and will be happy to help you with any problem.',
						'USERS',
						'NORMAL USER: ',
						'Investment + 3% of monthly profit - Cryptocurrency storage not enabled - Trading of 11% to 15% commission - Active assistance from 11 a.m. to 5 p.m. only by Telegram',
						'GOLD USER:',
						'Investment + 6% monthly profit - Cryptocurrency storage enabled -Trading from 7% to 10% commission - Active assistance from 8 a.m. to 8 p.m. through Telegram and Whatsapp.',
						'PLATINUM USER:',
						'Investment + 10% monthly profit and credit a % on the investments of the friends that I invite - Cryptocurrency storage enabled - 3% to 6% commission purchase - debit card for on-line purchases upon request and 24hours assistance through Telegram, Whatsapp and Signal.',
						'CONTACT US',
						'Earn our trust by respecting orders and get incredible benefits.',
						'TELEGRAM - WHATSAPP - SIGNAL',
						'0052 1 984 229 6332',
						'support@athenacryptobank.com',
						'Do all your operations in a personalized way, solve all your doubts about our services and after having registered, you will receive training and advice on investments in cryptocurrencies.',
						['FREE SERVICE','ONLY 149 USD ​ANNUALLY','ONLY 399 USD ​ANNUALLY'],
						'<br><br><br>In its almost 8 years of existence, Cryptocurrencies gradually gained the attention of the public and the media. Since 2011, interest has increased rapidly, especially during the sharp rise in Bitcoin in April 2013.'
				],
				'service': [
						'INVEST',
						"INVEST WITH ATHENA CRYPTO BANK AND RECEIVE A MONTHLY PROFIT OF UP TO 10% IN RELATION TO YOUR INVESTMENT, SAFE PAYMENT METHOD TO INVEST IN THE CRYPTOCURRENCY WITHOUT ANY CONCERN FOR THE FLUCTUATION  OF ITS VALUE<br><br>",
						'BANK SERVICE',
						'USE ATHENA CRYPTO BANK TO DEPOSIT YOUR CRYPTOCURRENCY IN TOTAL SECURITY, CAN BE STORED FOR YEARS WITHOUT PASSWORD CONCERNS OR FORGOTTEN SECURITY KEYS. ALSO YOU CAN REQUEST THE ADVANCED RECOGNITION MODE.',
						'TRADING',
						'WITH ATHENA CRYPTO BANK THE PURCHASE AND SALE OF CRIPTOMONEDAS HAS NEVER BEEN SO EASY, IT IS ENOUGH TO CONSULT THROUGH TELEGRAM TO OUR ADVISORS THE BEST PRICE OF THE MOMENT WITH THE DIFFERENT METHODS OF PAYMENT. <br><br>',
						"SERVICES",
						"Terms and conditions of use",
						"Payment Method:",
						"-Debit and Credit Card",
						"(Costs charged to the user)",
						"-Paypal   ",
						"(Paypal costs charged to the user)",
						"-Bank transfer",
						"(Cost do not apply)",
						"-Cryptocurrency",
						"(Cost do not apply)",
						"Withdrawal of the investment:",
						"-he investment can be withdrawn in full with the profit generated after 30 days. If the user does not request it, another 30 days will be reused. At the time of the withdrawal request, all the investment plus the generated profits will be credited within the following 48 business hours.",
						"For accreditation, the same currency and the same initial payment method used by the user will be used.",
						"Example: Investment of 100 euros through bank transfer received on March 15, 2018 - We will send a transfer of 110 euros on April 14, 2018.  <br> <br> <br> <br> <br> <br> <br>",
						"Terms and conditions of use:",
						"Depositing currencies:",
						"-BTC - ​BCH - BTG - DASH - DOGE - ETH - ETC - LTC - NEO - XST - XRP - XLM  - ZEC - XVG - BCN",
						"On request, other currencies that are not listed may also be accepted, contact the support team for any personalized order.",
						"Withdrawal of coins:",
						"-Coins can be withdrawn at any time at no additional cost.",
						"Only the cost of sending Blockchain will be charged.",
						"Non-refundable subscription. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> ",
						"Terms and conditions of use",
						"Available coins:",
						"-BTC - ​BCH - BTG - DASH - DOGE - ETH - ETC - LTC - NEO - XST - XRP - XLM  - ZEC - XVG - BCN",
						"On request, other currencies that are not listed may also be accepted, contact the support team for any personalized order.",
						"Withdrawal of coins:",
						"The withdrawal of coins depends on several factors:",
						"Type of account - Amount purchased - Value of the operation – Payment method.",
						'To avoid fraudulent payments, we must establish a purchase or withdrawal limit as a means of demonstrating that payment is legal.So, if I pay by bank transfer, I cannot  withdraw my cryptocurrency immediately? Of course! however, we could request a video call with a document in the name of the holder of the bank account used or waiting for the time for fraudulent reports to expire.For the withdrawal of the coins purchased through Paypal, the operation is similar, it may be necessary a declaration of "nothing to wait after receipt" or wait for the deadline for the opening of a dispute. The purchased coins will remain secure in an offline hardware portfolio regardless of the type of account opened.',
						"Non-refundable subscription."
						],
				'contact': [
						'CONTACT US',
						'Name',
						'Email',
						'Subject',
						'Message',
						'Athena Crypto Bank',
						'Phone:  <br>  0052 1 984 229 6332',
						'Email:  support@athenacryptobank.com',
						' SEND'
				],
				'acount': [
					'MY INVESTMENTS',
					'Date',
					'I WANT TO INVEST',
					'WITHDRAW INVESTMENT',
					'NEED HELP?',
					'BANK',
					'MY COINS:',
					'I WANT TO DEPOSIT',
					'I WANT TO WITHDRAW',
					'NEED HELP?',
					'BUY AND SELL',
					'GET AN ORIENTATIVE PRICE AT THE MOMENT',
					'WHATSAPP',
					'TELEGRAM',
					'SIGNAL',
					'0052 1 984 229 6332',
					'BUY',
					'SELL',
					'NEED HELP?',
					'CLICK HERE AND GO BACK TO HOME',
					'Log Out',
					'Email:',
					'Password:',
					'Incorrect Email/Phone or Password'
					] ,
				'footer': 'Copyright © Athena Crypto Bank',
				'menu': ['HOME','ABOUT US','SERVICE','CONTACT','MY ACCOUNT']
			},
			'it': {
				'home': [
					'Athena Crypto Bank',
					'INVESTI',
					'DEPOSITA',
					'COMPRA E VENDI',
					'Athena Crypto Bank è stata creata per rendere le vostre monete crypto e il vostro risparmio sicuro. Athena Crypto Bank ti dà anche la possibilità di investire nel settore della Crypto in modo semplice e facile senza rischiare nelle sua grande volatilità ottenendo un guadagno mensile fisso, depositare crypto in modo sicuro con wallet offline o comprare e vendere crypto al miglior prezzo sul mercato. Il tuo consulente personale ti aiuterà a acquistare o vendere con la modalità che preferisci mettendoti in contatto con altri nostri clienti.',
					'Pronto per iniziare con noi?',
					'REGISTRATI',
					'CRYPTOMONETE',
					'MODALITÁ DI PAGAMENTO',
					'INVESTIMENTO SICURO',
					'Ti piacerebbe investire nel Criptomoneda ma hai paura della sua grande volatilità?',
					'Athena Crypto Bank ti permette di investire in modo sicuro nella valuta Crypto senza preoccuparsi se va su o giù. Athena Crypto Bank acquisisce Crypto in paesi dove il prezzo è più basso e vende istantaneamente in paesi dove il prezzo è più alto, questo ci permette di garantirvi un profitto mensile senza rischi fino al 10%. I soldi investiti e il profitto generato saranno inviati nella stessa modalità usata per il pagamento dopo 30 giorni.',
					'',
					'CAMBIO',
					'CRYPTO BANK',
					"Il problema con la Cryptovaluta è la sicurezza. Ogni giorno gli hacker del mondo attaccano siti che detengono monete crypto, anche se un sito è importante e ben protetto un attacco coordinato può eludere la sicurezza dei siti più grandi. Ma anche Coinbase? Sì, Coinbase è uno dei più grandi siti al mondo che ha la funzione di portafoglio, ma è sempre un sito che mantiene le vostre valute online e quindi esposte a un rischio.",
					"Athena Crypto Bank è diversa! Le vostre monete Crypto saranno al sicuro in un Portafoglio Hardware Offline impossibile da penetrare. Entrerete in contatto con il vostro consulente solo tramite Whatsapp e Telegram il quale prenderà in carico la vostra richiesta e la passerà al nostro team di esperti in sicurezza informatica che la eseguirà nell immediato. Ecco perché Athena Crypto Bank è più sicuro degli altri siti. Servizio disponibile solo per utenti Gold e Platinum.",
					"E MOLTE ALTRE!",
					"Athena Crypto Bank è stato creato in modo che le vostre cripto siano al sicuro. Vi dà la possibilità di investire senza rischiare, guadagnando un profitto fisso, depositare in portafogli offline a prova di hacker senza dover ricordare password e acquistare o vendere Cripto al miglior prezzo sul mercato.",
					"ACCETTA CRYPTO NELLA TUA ATTIVITA",
					"Quando vendi un prodotto, che tu lo faccia per lavoro con la tua impresa o per ragioni personali specifica che accetti cryptomoneta! elaboreremo noi il pagamento e ti manderemo un bonifico bancario dell importo che avevi richiesto all acquirente. puoi avere un tasso di cambio instantaneo, e ricevere i tuoi soldi in 24 ore direttamente sul tuo conto bancario e in qualunque parte del mondo con l importo corrispondente. Elaboriamo pagamenti in Euro - Gbp - Usd e altre valute.",
					"Consegna il prodotto solo una volta che ti confermeremo l invio dell importo tramite bonifico verso il tuo conto bancario, in modo che accettare criptomoneta non diventi pericoloso. In massimo 2 ore dal pagamento avvenuto da parte dell acquirente, eseguiremo il bonifico sul iban da te impostato. <br> Il servizio è gratuito."
					],
				'about': [
						'ATHENA CRYPTO BANK',
						'INVESTIRE, DEPOSITARE, COMPRARE E VENDERE',
						"Una criptovaluta (o crittovaluta o criptomoneta) è una valuta paritaria, decentralizzata e digitale la cui implementazione si basa sui principi della crittografia per convalidare le transazioni e la generazione di moneta in sé. Come ogni valuta digitale, consente di effettuare pagamenti piu veloci, sicuri e economici. ",
						'CHI SIAMO?',
						'FIDUCIA',
						"​Athena Crypto Bank è un progetto certificato e Gestito da Athena Up SA l'idea è dare la possibilità anche all utente meno tecnologico di avvicinarsi in sicurezza al mondo della Cryptomoneta, è un sito sicuro e semplice che permette di gestire le vostre cryptomonete attraverso applicazioni di messaggeria come WhatsApp, i nostri clienti avranno la possibilità di investire con metodi sicuri, depositare le crypto in wallet impenetrabili e gestire gli ordini per acquisto e vendita di cryptovalute.",
						'Per noi la cosa più importante è la fiducia, quindi risponderemo a qualunque dubbio riguardo il funzionamento del sito tramite Whatsapp o Telegram e il nostro supporto H24 sarà lieto di aiutarvi in qualunque problematica. ',
						'UTENTI',
						'UTENTE NORMALE: ',
						'Investimento +3% mensile - Deposito Crypto Valute non Abilitato - Compravendita dal 11% al 15% di commissione - Assistenza attiva dalle 11.00 alle 17.00 tramite Telegram',
						'UTENTE ORO:',
						'Investimento +6% mensile - Deposito Crypto Valute Abilitato - Compravendita dal 7% al 10% di commissione - Assistenza attiva dalle 8.00 alle 20.00 tramite Telegram​​​ e Whatsapp',
						'UTENTE PLATINO:',
						'Investimento +10% mensile e accredito di una % sugli investimenti degli amici che hai presentato - Deposito Crypto Valute Abilitato - Compravendita dal 3% al 6% di commissione - carta di debito per acquisti online su richiesta  e assistenza H24 tramite Telegram, Whatsapp e Signal',
						'CONTATTACI',
						'Ottieni la nostra fiducia rispettando i tuoi ordini e otterrai benefici incredibili.',
						'TELEGRAM - WHATSAPP - SIGNAL',
						"0052 1 984 229 6332 ",
						"support@athenacryptobank.com",
						"Eseguire tutte le operazioni in modo personalizzato, risolvere tutti i tuoi dubbi riguardo i nostri servizi e dopo esserti registrato ricevere consulenza e consigli su investimenti in cryptovalute.",
						['SERVIZIO GRATUITO',"SOLO 149 USD L'ANNO","SOLO 399 USD L'ANNO"],
						"<br><br><br>Nei suoi quasi 8 anni di esistenza, le Cryptomonete hanno progressivamente ottenuto l'attenzione del pubblico e dei media. Dal 2011, l'interesse è aumentato rapidamente, soprattutto durante l'ascesa vertiginose di Bitcoin nel aprile 2013."
						],
				'service': [
						'INVESTIRE',
						'​​​​INVESTI CON ATHENA CRYPTO BANK E RICEVI OGNI MESE UN RITORNO FINO AL 10% SULL INVESTIMENTO, MODALITA SICURA PER INVESTIRE IN CRYPTOMONETA SENZA PREOCCUPARSI DELL OSCILLAZIONE DELLA CRYPTOVALUTA <br><br><br>',
						'SERVIZIO BANCA',
						'UTILIZZA ATHENA CRYPTO BANK PER DEPOSITARE IN TOTALE SICUREZZA LE TUE CRYPTOMONETE, LASCIARLE DEPOSITATE ANNI SENZA PREOCCUPAZIONI DI PASSWORD O DI DIMENTICARE LE CHIAVI DI SICUREZZA. PUOI ANCHE RICHIEDERE L ATTIVAZIONE DI MODALITA DI RICONOSCIMENTO AVANZATE.',
						'COMPRAVENDITA',
						"CON ATHENA CRYPTO BANK COMPRARE E VENDERE NON E' MAI STATO COSI FACILE, BASTA CHIEDERE TRAMITE TELEGRAM AI NOSTRI CONSULENTI IL MIGLIOR PREZZO AL MOMENTO PER DIVERSE MODALITA DI PAGAMENTO. <br> <br> <br> ",
						"SERVIZI",
						"Condizioni e Termini di Utilizzo:",
						"Modalità di pagamento:",
						"-Carta di Debito e Credito",
						"(costi carta a carico dell utente)",
						"-Paypal",
						"(costi Paypal a carico dell utente)",
						"-Bonifico Bancario",
						"(Nessun Costo Applicabile)",
						"-Cryptomoneta",
						"(Nessun Costo Applicabile)",
						"Ritiro investimento:",
						"-L'investimento può essere ritirato nel suo totale con il profitto generato dopo 30 giorni. nel caso l utente non ne faccia richiesta verranno riutilizzati altri 30 giorni, al momento della richiesta di prelievo sarà accreditato l' intero investimento più i profitti generati entro le 48 ore lavorative successive.",
						"Per l accredito verrà utilizzata la stessa valuta e modalità di pagamento utilizzata dall utente. ",
						"Esempio: Investimento di 100 euro tramite bonifico bancario ricevuto il 15 marzo 2018- Invieremo bonifico di 110 euro il 14 aprile 2018.  <br> <br> <br> <br> <br> <br> <br> <br> <br>",
						"Condizioni e Termini di Utilizzo:",
						"Monete depositabili:",
						"-BTC - ​BCH - BTG - DASH - DOGE - ETH - ETC - LTC - NEO - XST - XRP - XLM  - ZEC - XVG - BCN",
						"Su richiesta potrebbero essere accettate anche altre monete non elencate, contattare il supporto per qualche richieste personalizzate. ",
						"Ritiro monete:",
						"-Le monete sono ritirabili in qualunque momento senza costi extra. ",
						"Verrà addebitato solo il costo di invio dato della Blockchain.",
						"Abbonamento non rimborsabile. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> ",
						"Condizioni e Termini di Utilizzo:",
						"Monete Acquistabili:",
						"-BTC - ​BCH - BTG - DASH - DOGE - ETH - ETC - LTC - NEO - XST - XRP - XLM  - ZEC - XVG - BCN",
						"Su richiesta potrebbero essere acquistate o vendute anche altre monete non elencate, contattare il supporto per richieste personalizzate.  ",
						"Ritiro monete:",
						"Il ritiro monete dipende da diversi fattori:",
						"Tipo di account - Quantità Acquistate - Valore dell operazione - Modalità usata per il pagamento.",
						'Per prevenire pagamenti fraudolenti dobbiamo porre un limite acquistabile o ritirabile fino a dimostrazione che il pagamento sia lecito. Quindi se pago con bonifico bancario non posso ritirare subito le mie crypto? Certo! però potrebbe essere richiesta una video chiamata con Documento a nome del account bancario utilizzato oppure aspettare che scada il tempo per le segnalazioni fraudolente. Per il ritiro di monete acquistate tramite Paypal il funzionamento è simile, potrà essere richiesta una "dichiarazione di niente a che pretendere dopo il ricevimento" o aspettare i termini di scadenza per l apertura di una disputa. Le monete acquistate verranno mantenute in sicureza nei Wallet Hardware a prescindere dal tipo di account aperto. ',
						"Abbonamento non rimborsabile."
						],
				'contact': [
							'CONTATTACI',
							'Nome:',
							'Email :',
							'Oggetto:',
							'Messaggio:',
							'Athena Crypto Bank',
							'Telefono: <br>  0052 1 984 229 6332',
							'Email:  support@athenacryptobank.com',
							' INVIA'
					],
					'acount': [
								'I MIEI INVESTIMENTI',
								'Data',
								'VOGLIO INVESTIRE',
								"RITIRARE INVESTIMENTO",
								'HAI BISOGNO DI AIUTO?',
								'BANCA',
								'LE MIE MONETE',
								'VOGLIO DEPOSITARE',
								'VOGLIO PRELEVARE',
								'HAI BISOGNO DI AIUTO?',
								'COMPRA-VENDITA',
								'OTTIENI UN PREZZO ORIENTATIVO ',
								'WHATSAPP',
								'TELEGRAM',
								'SIGNAL',
								'0052 1 984 229 6332',
								'COMPRARE',
								'VENDERE',
								'HAI BISOGNO DI AIUTO?',
								'FAI CLIC QUI E TORNA ALLA HOME',
								'Esci',
								'Email:',
								'Password:',
								'Email/Phone o Password non Corrette'
					],
				'footer': 'Copyright © Athena Crypto Bank',
				'menu': ['HOME','CHI SIAMO','SERVIZI','CONTATTI','MIO ACCOUNT']
			}
	}
});

appCrypto.service("bancoInversion",function($http, configuracionGlobal){
	
	//this.saldos = {"banco": 0, "inversion": 0};
	this.saldoActual = function(user){
		this.user = user;
		return $http({ //importante verificar que este instalado este sevicio
		url: configuracionGlobal.api_url + "/api/controller.php",
		method: "POST",
		data: { "usuario": user,
				"accion": "saldoActual" },
		headers: {'Content-Type': 'aplication/x-www-form-urlencoded'}//esto mejora la compatibilidad de la aplicacion
		});
	}
});

appCrypto.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

