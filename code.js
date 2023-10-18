var listaArray = new Array;


   function adicionaCt(){
                         var lista = document.getElementById('lista');
                         var boxContato = document.getElementById('boxContato'); 
                         var option = document.createElement('option');
                         var tes = boxContato.value;   
                                  boxContato.focus();
                                  if(tes.length == 0){   
                                    alert("Digite o nome do Contato");
                                   return;
                                   }
                           option.text = boxContato.value;
                          listaArray[listaArray.length] = boxContato.value;                  
                          lista.add(option);                    
                          alert(lista.options[lista.options.length-1].text + ' adicionado com sucesso.');
                          boxContato.value="";
                          boxContato.focus();
                         }
                       
                           
    function removeCt(){ 
                        var l = document.getElementById('lista');
                        var apontador = l.selectedIndex;
                         if(apontador <= -1){   
                                    alert("Seleciona um Contato para Remover.");
                                   return;
                                   }
                         if (confirm('Deseja remover ' + l.options[l.selectedIndex].text + ' ?' )){   
                          listaArray.splice(apontador,1);
                        var fim = listaArray.length-1;
                          alert(l.options[l.selectedIndex].text + ' foi removido com sucesso');
                          l.innerText = "";
                          l.innerHTML = "";
                        for(i=0;i<=fim;i++){
                                            var o = document.createElement('option');
                                            o.text = listaArray[i];
                                            l.add(o);          
                     }                    }                                                       }
                       
                       
     function movePraBaixo(){
                             var l = document.getElementById('lista');
                             var i = 1;
                             var apontador = l.selectedIndex;
                             if(apontador <= -1){
                                                alert("Seleciona um Contato pra Mover Pra Baixo.");
                                               return;
                                                }
                              if(apontador == listaArray.length-1){
                                                                 return;
                                                                }
                            var alx = listaArray[apontador+1];
                            var fim = listaArray.length-1;
                            var selected = selected;
                             listaArray[apontador +1] = listaArray[apontador];
                             listaArray[apontador] = alx;
                             l.innerText = "";
                             l.innerHTML = "";
                            for(i=0;i<=fim;i++){
                                                var o = document.createElement('option');
                                                o.text = listaArray[i];
                                                l.add(o);          
                          }                    }
                           
                       
     
     function movePraCima(){
                            var l = document.getElementById('lista');
                            var i = 1;
                            var apontador = l.selectedIndex;
                             if(apontador <= -1){
                                                alert("Seleciona um Contato pra Mover Pra Cima.");
                                               return;
                                                }
                             if(apontador == 0){
                                              return;
                                             }
                            var alx = listaArray[apontador-1];
                            var fim = listaArray.length-1;
                            listaArray[apontador-1] = listaArray[apontador];
                            listaArray[apontador] = alx;
                            l.innerText = "";
                            l.innerHTML = "";
                            for(i=0;i<=fim;i++){
                                                var o = document.createElement('option');
                                                o.text = listaArray[i];
                                                l.add(o)           
                          }                    }
