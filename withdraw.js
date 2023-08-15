// withdraw section 
        // step 1 : get the withdraw button 
        document.getElementById('withdraw-btn').addEventListener('click', function(){
            // step 2 get  the input area 
            const withdrawField = document.getElementById('withdraw-ammount');
            const newWithdrawAmountString = withdrawField.value;
            const newWithdrawAmount = parseFloat(newWithdrawAmountString);
            console.log(typeof newWithdrawAmount)

            // step 3 get the total  withdraw 
            const withdrawTotalElement = document.getElementById('total-withdraw');
            const previousWithdrawTotalString = withdrawTotalElement.innerText;
            const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
           

            // step : 6 
            const balaneTotalElement = document.getElementById('balance-total');
            const previousBalanceTotalString = balaneTotalElement.innerText;
            const previousBalanceTotal = parseFloat(previousBalanceTotalString);

            // step clear the input value 
            withdrawField.value = '';

            if(newWithdrawAmount > previousBalanceTotal){
                alert('Not enough balance')
                return;
            }

             // step 4 : calculate current and previous withdraw 
             const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
            // step 5 : now calculate total withdraw 
             withdrawTotalElement.innerText = currentWithdrawAmount;

            // step 7 
            const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
            balaneTotalElement.innerText = newBalanceTotal;

            
        })