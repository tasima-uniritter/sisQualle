'use strict';
var RecoveryPasswordPage = require('../pages/RecoveryPasswordPage.js');
var Access = require('./../access.js');

describe('B) Suite case of RecoveryPasswordPage:', function () {
	var page;

	var correctLogin = Access.email;
	var wrongLogin = 'wrong@login.com'

	beforeEach(function () {
		page = new RecoveryPasswordPage();
		page.get();
	});

	it('1. Página de recuperação de senha está acessível.', function () {
		expect(browser.getTitle()).toEqual('Zenvia Conversational Cloud');
	});

	it('2. Não deve recuperar senha sem e-mail.', function () {
		page.recoverEmail('');
		expect(page.failMessage()).toContain('O valor informado não é um e-mail válido.');
	});

	it('3. Não deve recuperar senha de e-mail não cadastrado.', function () {
		page.recoverEmail(wrongLogin);
		expect(page.failMessage()).toContain('ERRORS.UserNotFoundError');
	});

	it('4. Deve recuperar senha de e-mail cadastrado.', function () {
		page.recoverEmail(correctLogin);
		expect(page.successMessage()).toContain('Um e-mail foi enviado.');
	});

	it('5. Deve retornar para a tela inicial de login.', function () {
		page.returnToLoginPage();
		expect(page.loginPageValidation()).toBe('https://app.zenvia.com/signin');
	});

});