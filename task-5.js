const china = 'китай'
const chili = 'чили'
const australia = 'австралия'
const india = 'индия'
const jamaica = 'ямайка'

const userAnswer = prompt('Введите название страны доставки')
switch (userAnswer.toLowerCase()) {
    case china :
        console.log(`Доставка в ${userAnswer} будет стоить 100 кредитов`)
        break;

    case chili :
            console.log(`Доставка в ${userAnswer} будет стоить 250 кредитов`);
            break;

            case australia :
                console.log(`Доставка в ${userAnswer} будет стоить 170 кредитов`)
                break;

                case india :
                    console.log(`Доставка в ${userAnswer} будет стоить 80 кредитов`)
                    break;

                    case jamaica :
                        console.log(`Доставка в ${userAnswer} будет стоить 120 кредитов`)
                        break;
                        
                  default:
                      alert('В вашей стране нет доставки, досвидос')      
}




