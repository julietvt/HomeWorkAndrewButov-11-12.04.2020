/*1. С помощью оператора if
    №1. вычислить сумму покупки с учетом скидки. cкидка 3% предоставляется, если сумма покупки больше 500 грн.,
    а скидка 5% - если сумма покупки больше 800 грн. cумму покупки вводит пользователь.*/
console.group('Task №1');
    let purchasAmount = +prompt('1. Enter purchase amount');
    console.log("You entered a purchase amount = ",purchasAmount);
    let disc = 0;
    if(purchasAmount >= 500 && purchasAmount <= 799 ){
        disc = 0.03;
        purchasAmount = purchasAmount * (1 - disc);
        console.log("Discount amount = ",purchasAmount,". Your discount =",disc);
    }
    else if(purchasAmount >= 800){
        disc = 0.05;
        purchasAmount = purchasAmount * (1 - disc);
        console.log("Discount amount = ",purchasAmount,". Your discount =",disc);
    } else{
        console.log("Discount amount = ",purchasAmount,". Your discount =",disc);
    }
console.groupEnd('Task №1');

/*2. С помощью switch
    №2. запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если
     пользователь вводит 7 -  выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)*/
console.group('Task №2');
    const dayWeek = +prompt('2. Enter the day of the week as a number from 1 to 7');
    console.log("You entered = ",dayWeek);
switch (dayWeek) {
    case 1 :{console.log('This is Monday.');} break;
    case 2 :{console.log('This is Tuesday.');} break;
    case 3 :{console.log('This is Wednesday.');} break;
    case 4 :{console.log('This is Thursday.');} break;
    case 5 :{console.log('This is Friday.');} break;
    case 6 :{console.log('This is Saturday.');} break;
    case 7 :{console.log('This is Sunday.');} break;
    default:{console.log('There is no such day of the week!');} break;
}
    console.groupEnd('Task №2');

/*3. С помощью цикла for
    №3. вывести каждый 4-й элемент из указаного пользователем диапазона (пользователь указывает минимальное и
    максимальное значения диапазона)*/
console.group('Task №3');
    let minRange = +prompt('3. Enter the minimum range values');
    let maxRange = +prompt('Enter the maximum range values');
    console.log("You entered minimum range value =",minRange,' and maximum range values =',maxRange);
    for (let i = minRange; i <=maxRange; i++)
    {
        if(i%4==0){
            console.log("Every 4th element:",i);
        }
    }
console.groupEnd('Task №3');
/*4. С помощью цикла for
     №4 вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь*/
console.group('Task №4');
    let parameN = +prompt('4. Enter parameter N');
    console.log("You entered parameter N =",parameN);
    let sum = 0;
    for (let i = 1; i <=parameN; i++)
    {
        sum += 1/i;
    }
    console.log("The sum of the first",parameN,"elements of the sequence 1 + 1/2 + 1/3 + ... + 1 /",parameN,"=",sum);
console.groupEnd('Task №4');

/*5. С помощью do-while
    №5. предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит*/
console.group('Task №5');
    let solution;
    do{
        solution = +prompt('5. Solve the example (2 + 2 * 2) =');
        console.log('You entered an incorrect answer =',solution);
    }
    while (solution !== 6 )
    console.log('You entered the correct answer!');
console.groupEnd('Task №5');

/*6. С помощью do-while
     №6. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько раз было
выполнено делений*/
console.group('Task №6');
    let x1 = 1000, count = 0;
    do{
        x1 = x1/2;
        count++;
    }
    while (x1 > 50)
    console.log('6. Number less than 50 =',x1);
    console.log('The number of divisions was =',count);
console.groupEnd('Task №6');

/*7. С помощью while
     №7 Вывести значения функции y = 2x^2 - 5x - 8 в диапазоне (для х) от -2 до 2 с шагом 0.5*/
console.group('Task №7');
    let x = -2, y = 0, step = 0.5;
    while (x <= 2){
        y = 2 * (x**2) - (5 * x) - 8;
        console.log("7. Function values y = 2*(",x,"^2) - (5*",x,") - 8 =",y);
        x = x + step;
        y = 0
    }
console.groupEnd('Task №7');

/*8. С помощью while
    №8 вывести все числа от 1 до 100 который кратные указанному пользователю числу*/
console.group('Task №8');
let numb = +prompt('8. Enter the number'), start = 1;
console.log("You entered the number =",numb);
while (start <= 100){
    if(start%numb == 0){
        console.log("The number entered is a multiple of ",start);
    }else{}
    start++;
}
console.groupEnd('Task №8');

/*Написать функцию
    №9 Которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)*/
console.group('Task №9');
function Simple(number){
    for(let i = 2; i = Math.sqrt(number); i++){
        if(number%i == 0)
            return 'Compound number';
        return 'Simple';
    }
}
let prime = +prompt('9. Get a prime number');
console.log("You entered the number =",prime);
console.log("Number entered",prime,"-",Simple(prime));
console.groupEnd('Task №9');

/*10 Написать функцию<br>
    №10.1 выводит таблицу умножения по числу, который вводит пользователь (например, пользователь вводит 3, вид вывода:*/
console.group('Task №10.1');
    function Multiplication(Number, val){
           return Number*val;
    }
    let tableNumber = +prompt('10.1 Enter table number');
    console.log("Multiplication table for number",tableNumber,":");
    for(let i = 1; i <= 10; i++) {
        console.log(tableNumber, "*", i, "=", Multiplication(tableNumber,i));
    }
console.groupEnd('Task №10.1');

/*№10.2 Вычислить сумму первых N элементов последовательности N + N/2 + N/(2*3) + N/(3*4) + ... + N/(N*(N-1)).*/
console.group('Task №10.2');
    function sumN(numberN){
        let sum = numberN;
        for (let i = 2, n = 1; i <= numberN; i++, n++){
            sum = sum + (numberN/(n*i));
        }
        return sum;
    }
    let parameterN = +prompt('10.2 Enter parameter N');
    console.log("You entered the parameter N =",parameterN);
    console.log("The sum of the first N elements of the sequence N + N / 2 + N / (2 * 3) + N / (3 * 4) + ... + N / (N * (N-1)) =", sumN(parameterN));
console.groupEnd('Task №10.2');

/*11. Реализовать рекурсию
11.Написать рекурсию которая вычисляет сумму ряда чисел. Например, n=3  это сумма 1+2+3*/
console.group('Task №11');
    function rowSum (valueN){
        if(valueN == 1) return 1;
        return rowSum(valueN -1 ) + valueN;
    }
    let rowN = +prompt('11 Enter the number of numbers in a row n');
    console.log("You have entered the number of numbers in a row n =",rowN);
    console.log("Sum of a series of numbers",rowN,"=",rowSum(rowN));
console.groupEnd('Task №11');

/*12 Объекты
12.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.*/
console.group('Task №12.1');
    const student = {
        fname: 'Andrew',
        lname: 'Butov',
        male: true,
        email: "1@gmail.com",
        phoneNumber: 123456789,
    };
    console.log(student);
console.groupEnd('Task №12.1');

/*12.2 Создать объект, который содержит свойства, о факультете и кафедре.*/
console.group('Task №12.2');
    const facultyAndDepartment = {
    faculty: 'FreshCode',
    department: 'Javascript developers',

};
console.log(facultyAndDepartment);
console.groupEnd('Task №12.2');

/*12.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента*/
console.group('Task №12.3');
    student.faculty = facultyAndDepartment.faculty;
    student.department = facultyAndDepartment.department;
    console.log(student);
console.groupEnd('Task №12.3');

/*12.4 Реализовать функцию выводит на экран всю информацию о студенте*/
console.group('Task №12.4');
    const allStudentInformation = {
        fname: student.fname,
        lname: student.lname,
        male: student.male,
        email: student.email,
        phoneNumber: student.phoneNumber,
        faculty: facultyAndDepartment.faculty,
        department: facultyAndDepartment.department,
    };
    console.log(allStudentInformation);
console.groupEnd('Task №12.4');
