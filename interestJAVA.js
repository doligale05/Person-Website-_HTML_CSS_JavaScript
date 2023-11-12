// Calculating revenue by grabbing element ID's 
    function calculateAndDisplay() {
        document.getElementById('calulateEarnings'); 

        const hours_weekly = parseFloat(document.getElementById('hours_weekly').value);
        const hourly = parseFloat(document.getElementById('hourly').value);
    
        const result = calculateRevenue(hours_weekly, hourly);
    
        document.getElementById('beforeTaxes').textContent = 'Earnings before taxes were taken out: ' + '$' + result.beforeTaxes.toFixed(2);
        document.getElementById('afterTaxes').textContent = 'Earnings after MS taxes were taken out: ' + '$' + result.afterTaxes.toFixed(2);
    }
    
    function calculateRevenue(hours_weekly, hourly) {
        const beforeTaxes = hours_weekly * hourly;
        const taxRate = 0.11; // 11% MS tax rate
        const taxes = beforeTaxes * taxRate;
        const afterTaxes = (Math.floor(beforeTaxes - taxes));
        // Using the Math.floor function even though its not realistic here 
        return {
            beforeTaxes,
            afterTaxes
        };
    }


// This is the dark mode feature with a bool, and as an eventListener with a button. 
    document.addEventListener("DOMContentLoaded", function(event){

        function inverseButton(event){
            var body = document.getElementsByTagName("body")[0];
            var inverseColor = body.style.backgroundColor; 
            var abled; 
            if(inverseColor === "white" || inverseColor === "")
            {
                body.style.backgroundColor = "black"; 
                body.style.color = "white"; 
                abled = true; 
            }
            else {
                body.style.backgroundColor = "white"; 
                body.style.color = "black"; 
                abled = false; 
            }
        
        
            var isDark = document.getElementById("isDark"); 
            if (abled){
                isDark.textContent = "Dark Mode Enabled"; 
            }
            else {
                isDark.textContent = "Dark Mode Disabled"; 
            }
        
        }
        var darkMode = document.getElementById("darkMode");
        darkMode.addEventListener("click", inverseButton); 
        
        }); 
        

    