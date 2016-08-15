(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];

    /* @ngInject */
    function MainController() {
        var main = this;
        main.title = 'MainController';
        main.incomeEntries = [];
        main.expenseEntries = [];
        main.totalExpenses = 0;
        main.totalIncome = 0;
        main.lengthOfHighExpenses = 0;
        


        main.addToArray = function(whichArray) {
            var arr;
            var newVal;
            var total;
            if (whichArray === 'income') {
                arr = main.incomeEntries;
                newVal = main.income;
            } else if(whichArray === 'expense') {
                arr = main.expenseEntries;
                newVal = main.expense;
            } else {
                console.log('error. array passed to addToArray must be income or expense.')
            }

            arr.push({
                description: newVal.newDescription,
                amount: newVal.newAmount
            });
            
            main.calculateTotals();
            calculateLengthOfHighExpenses();
            
            

            newVal.newDescription = '';
            newVal.newAmount = '';

            

        }

        main.calculateTotals = function() {
            main.totalIncome = 0;
            main.totalExpenses = 0;
            main.incomeEntries.forEach(function(x) {
                main.totalIncome += x.amount;
      
            }); 

            main.expenseEntries.forEach(function(x) {
                main.totalExpenses += x.amount;
                
            });  
        };

        var calculateLengthOfHighExpenses = function() {
            if(main.expenseEntries.length < 4) {
                main.lengthOfHighExpenses = 0;
            } else if(main.expenseEntries.length < 7) {
                main.lengthOfHighExpenses = 2;
            } else {
                main.lengthOfHighExpenses = 5;
            }
        }

       

        

        
        

        

        activate();

        ////////////////

        function activate() {
        }
    }
})();