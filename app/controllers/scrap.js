function(arr) {
    arr.forEach(function(entry, index) {
                     
                    var ea = parseFloat(entry.amount);
                    //if entry amount is larger then stored greatest number
                    //set stored greatest number (amountStore) to the entry amount
                    if (ea > amountStore) {
                        amountStore = ea;
                        currentHigh = entry;
                    }
                });
                //remove entry from temp array and add to mostCostly
                tempArray.splice(arr.indexOf(currentHigh));
                main.mostCostlyExpenses.push(currentHigh);

}

main.expenseEntries.forEach(function(entry) {
                tempArray.push(entry);
            });

            

            

                
                //loop through temp array to find largest value
                tempArray.forEach(function(entry, index) {
                     
                    var ea = parseFloat(entry.amount);
                    //if entry amount is larger then stored greatest number
                    //set stored greatest number (amountStore) to the entry amount
                    if (ea > amountStore) {
                        amountStore = ea;
                        currentHigh = entry;
                    }
                });
                //remove entry from temp array and add to mostCostly
                tempArray.splice(tempArray.indexOf(currentHigh));
                main.mostCostlyExpenses.push(currentHigh);
                    console.log(main.mostCostlyExpenses);
            
