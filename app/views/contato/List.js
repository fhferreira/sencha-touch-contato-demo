Ext.ns('ContatoDemo.views.contato');

ContatoDemo.views.contato.List = Ext.extend(Ext.List,{	
	grouped    : false,
	indexBar   : false,
	fullscreen : true,
	itemTpl    : '{nome} {sobrenome}',
	store      : 'Contatos'
});

Ext.reg('listcontato', ContatoDemo.views.contato.List);
//Registra o componente