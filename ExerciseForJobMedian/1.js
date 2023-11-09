////Wyznacz medianę wydatków do pierwszej niedzieli (włącznie) każdego miesiąca (np. dla 2023-09 i 2023-10 są to dni 1, 2, 3 wrz i 1 paź). - wersja sumy wydatków każdego miesiąca
var expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        },
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
}

function get_median_of_first_week_expenses(expenses) {
    let result = null
    let sum = 0;
    let middle = 0;
    let array = [];
    Object.keys(expenses).forEach((months) =>{
        if (Object.keys(expenses[months]).length === 0){
            array.push(0);
            middle++;
        }
        let year = months.substr(0,4);
        let month = months.substr(5,6);
        let date = new Date (year, month-1, 1);
        let day = date.getDay();
        let maxDay = (8-day)%7;
        Object.keys(expenses[months]).forEach((theDay) =>{
            let theDays = parseInt(theDay)
            if(theDays<=maxDay){
                if (expenses[months][theDay] != null){
                if (expenses[months][theDay].food != null ){
                    if (expenses[months][theDay].food.length>0){
                        for (let i=0; i<expenses[months][theDay].food.length; i++){
                            sum += expenses[months][theDay].food[i];
                        }
                    }
                }
                if (expenses[months][theDay].fuel != null){
                    if (expenses[months][theDay].fuel.length>0){
                        sum += expenses[months][theDay].fuel[0];
                    }
                }
                array.push(sum);
                sum=0;
                middle++; 
                }
            }
        });
    });
    array.sort(function(a, b) {
        return a - b;
    });
    middle=Math.floor(middle/2);
    console.log(middle);
    if (middle%2==0){
        result=(array[middle-1]+array[middle])/2;
        result = result.toFixed(2);
        return result;
    }
    else {
        console.log(array);
        console.log(middle);
        console.log(array[middle]);
        result= array[middle];
        result = result.toFixed(2);
        return result;
    }
}
console.log(get_median_of_first_week_expenses(expenses))