const getMonthName = (monthNumber) => {
  let monthName = "";
  switch (monthNumber) {
    case 1:
      monthName = "Jan";
      break;
    case 2:
      monthName = "Fev";
      break;
    case 3:
      monthName = "Mar";
      break;
    case 4:
      monthName = "Abr";
      break;
    case 5:
      monthName = "Mai";
      break;
    case 6:
      monthName = "Jun";
      break;
    case 7:
      monthName = "Jul";
      break;
    case 8:
      monthName = "Ago";
      break;
    case 9:
      monthName = "Set";
      break;
    case 10:
      monthName = "Out";
      break;
    case 11:
      monthName = "Nov";
      break;
    default:
      monthName = "Dez";
  }
  return monthName;
};

export { getMonthName };
