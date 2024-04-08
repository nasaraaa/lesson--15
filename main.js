for(let i = 0; i <= 20; i++){
    console.log(i)
    console.log(`text`)
}
let i = 0;
while(i <=30){
    console.log(i);
    i++;
    console.log(`text2`)
}
let b = 0;
do{
    console.log(b)
    b++
}while(b <= 30)

const numbers = [1,2,5,7,8,10,23,24,26]
for(let i = 0; i <= numbers.length;i++){
    console.log(numbers[i])
    if (numbers[i] % 2===0) {
		console.log(numbers[i]);
	}
}

const currentDay = new Date().getDay();

switch(currentDay){
    case 0:
        console.log(`kvira`)
        Date
        break;
    case 1:
        console.log(`orshabati`);
        break;
     case 2:
		console.log("samshabati");
		break;
	case 3:
		console.log("otxshabati");
		break;
	case 4:
		console.log("xutshabati");
		break;
	case 5:
		console.log("paraskevi");
		break;
	case 6:
		console.log("shabati");
		break;
}

// bolos ver mivxvdi didad