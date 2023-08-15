  // Deposite section
        //stpe 1 : get the deposite event listner
        document.getElementById('deposite-btn').addEventListener('click',function(){
            // step 2 
          const depositeField = document.getElementById('deposite-ammount');
          const newDepositeAmountString = depositeField.value;
          const newDepositeAmount = parseFloat(newDepositeAmountString);
         
            
            // step : 3 
            const depositeTotalElement = document.getElementById('total-amount');
            const previousDepositeTotalString = depositeTotalElement.innerText;
            const previousDepositeTotal = parseFloat(previousDepositeTotalString);
            
            //step : 4 added Deposide amount and previous amount
            const currentDeposideAmount =  previousDepositeTotal + newDepositeAmount ;         
            
            //step :5 Previous amount and current amount added and show
            depositeTotalElement.innerText = currentDeposideAmount;

            // step : 6 balance total 
            const balaneTotalElement = document.getElementById('balance-total');
            const previousBalanceTotalString = balaneTotalElement.innerText;
            const previousBalanceTotal = parseFloat(previousBalanceTotalString);

            // step : 7 added balance total 
            const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
            
            // step : 8 Deposite and new balance show in 
            balaneTotalElement.innerText = currentBalanceTotal; 

            //stpe : last
            depositeField.value = '';
        })