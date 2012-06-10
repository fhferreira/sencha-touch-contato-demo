Ext.regController('Contato', {
		
		index : function(){
				if(!this.listaContato){				
					this.listaContato = this.render({
						xtype  : 'listcontato',
						itemId : 'listcontatoId',
 					});
			    }else{
					this.setAtivoListaContato();
				}
		},
		
		setAtivoListaContato: function(){
			this.application.viewport.setActiveItem(this.listaContato, null);
			//Seta Tela ativa e o segundo parametro é a animação
		}	
			
});