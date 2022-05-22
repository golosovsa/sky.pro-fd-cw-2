salary = +prompt("Введи свою зарплату");
bonus = salary * 0.2;
tax = 0.13 * (salary + bonus);
income = salary + bonus - tax;
daily = income / 31;
alert(`Your sallary: ${salary}\nBonus: ${bonus}\nTAX: ${tax}\nNet income: ${income}\nDaily budget: ${daily}`);