var Access = require('./../../access.js');
var PaginaRecuperaSenha = require('../pages/PaginaRecuperaSenha.js');
// recover-spec.js
describe('Página de recuperar senha', function() {
	var page;
	var correctLogin = access.email;
	var wrongLogin = 'wrong@login.com'
	
	beforeEach(function(){
		page = new PaginaRecuperaSenha();
		page.get();
	});
	
	// it ('Não deve recuperar senha de e-mail não cadastrado', function() {
		// browser.get(url)
		
		// element(by.className('is-outbound')).click();
		// element(by.name('email')).sendKeys('invalid.invalid@invalid.com');
		// element(by.className('is-primary')).click();
		
		// expect($('.is-danger').getText()).toContain('Conta não encontrada para o e-mail abaixo.');
	// });
	
	// it ('create new account', function() {
		// browser.get(url);
		// element(by.className('btn btnRounded menuItem likeButton trackThis')).click();
		// element(by.id('hs_cos_wrapper_module_147729282573122524')).click();
		// element(by.id('firstname-b43b4977-9d04-440c-81ff-690a876077d3')).sendKeys('Gustavo Luis Bady Hemb');
		// element(by.id('email-b43b4977-9d04-440c-81ff-690a876077d3')).sendKeys('gustavohemb93@gmail.com');
		// element(by.id('business-b43b4977-9d04-440c-81ff-690a876077d3')).sendKeys('Stefanini');
		// element(by.id('mobilephone-b43b4977-9d04-440c-81ff-690a876077d3')).sendKeys(5189452441);
		// //element(by.id('possui_base_de_contatos_de_clientes_0-b43b4977-9d04-440c-81ff-690a876077d3')).click();
		// // element.all(by.className.get(1).click();
		// // element(by.id('message-b43b4977-9d04-440c-81ff-690a876077d3')).sendKeys('testing');
		// // element(by.className('recaptcha-checkbox-checkmark')).click();
		// // element(by.className('hs-button primary large')).click();
	// });
	
	// it ('Criar chatbot simples', function() {
		// browser.get(url)
		
		// element(by.id('signin-email')).sendKeys(email);
		// element(by.id('signin-password')).sendKeys(correctPass);
		// element(by.id('btn-signin')).click();
		
		// element(by.id('btnBots')).click();
		
		// expect($('h1').getText()).toEqual('Meus chatbots');
		
		// element(by.css('a[routerlink="/home/workflow/new"]')).click();
		// expect($('h1').getText()).toEqual('Novo chatbot');
		
		// element(by.css('h6')).click();
		
		// element(by.name('workflowname')).sendKeys('Meu bot automático');
		// // element(by.css('button[type="submit"]')).click();
		
		// // // not working yet
		// // browser.actions()
			// // .mouseMove(element(by.css('canvas')))
			// // .mouseMove({x: 600, y: 100})
			// // .doubleClick()
			// // .perform();
			
		// // expect(element(by.css('canvas')).getText()).toEqual('This text is displayed if your browser does not support the Canvas HTML element.');		
		
		// // browser.sleep(100000);
	// });
	
	// POSSÍVEIS PRÓXIMOS PASSOS:
	
	// Refatorar testes
	// Separar em classes
	// Criar testes para deletar bots existentes (usando each?) (ou fazer clean up ao final de cada teste)
	// Criar teste para criar usuário (mas não rodar sempre)
	// Criar usuário com e-mail pessoal e senha compartilhada
	// Colocar algo variável no nome dos novos bots
	// Tentar posicionamento do mouse pra interagir com Canvas
	
	// NA APLICAÇÃO: 
	// Colocar ID nos elementos
	
});