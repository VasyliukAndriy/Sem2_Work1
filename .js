let User_Name = prompt("Введіть своє ім'я: ");
alert("Вітаю, " + User_Name + "\nЯкого числа твоє день народження, хочаааа... ні! Не кажи давай я спробую вгадати ;)");

let bd_User = prompt("Число дня твого народження необхідно помножити на 2. " +
                     "\nПотім до результату обчислень додати 5. " +
                     "\nПісля цього отриману суму помножити на 50 " +
                     "та до результату додати число місяця народження. Впишіть результат обчислень");

let bdr_User = parseInt(bd_User) - 250;

let bd_arr = Array.from(String(bdr_User), Number);

let day_bd = bd_arr.slice(0, -2).join('');
let mon_bd = bd_arr.slice(-2).join('');

switch (mon_bd) {
    case "01": mon_bd = "січеня"; break;
    case "02": mon_bd = "лютого"; break;
    case "03": mon_bd = "березеня"; break;
    case "04": mon_bd = "квітня"; break;
    case "05": mon_bd = "травня"; break;
    case "06": mon_bd = "червня"; break;
    case "07": mon_bd = "липня"; break;
    case "08": mon_bd = "серпня"; break;
    case "09": mon_bd = "вересня"; break;
    case "10": mon_bd = "жовтня"; break;
    case "11": mon_bd = "листопада"; break;
    case "12": mon_bd = "грудня"; break;
}

alert("Вітаю! Твій ДН: " + day_bd + "-го " + mon_bd);
