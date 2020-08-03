/************
 * Data encapsulation
 *
 * Permite esconder detalhes de implementação de um modulo
 * especifico de um escopo externo
 *
 */
// separação de assuntos!!!!!!
//nenhum controller sabe sobre o outro. Resulta em modularidade

//IIFE => privacidade de dados por criar outro escopo
//um objeto contento publicTest()
//GRAÇAS A CLOSURES!
var budgetController = (function () {
  var x = 23;
  //private add function
  var add = function (a) {
    return x + a;
  }
  return {
    publicTest: function (b) {
      return add(b);
    }
  }
})();

var UIController = (function () {
  //Codigo

})();
//independencia dos controllers
var controller = (function (budgetCtrl, UICtrl) {
  //Codigo
  var z = budgetCtrl.publicTest(5);
  return {
    anotherPublic: function () {
      console.log(z);
    }
  }
})(budgetController, UIController);

