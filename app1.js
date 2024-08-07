/*ხელფასი სალარი და ბონუსი. თუ ხელფასი 1000 ზე ნაკლებია მაშინ ხელფასი 20 % არის ბონუსი. 
თუ ხელფასი 3000 ზე < ამ შემთხვევაში ბონუსი არის 10%. თუ 3000 იდან 10000 მდე მაშინ ბონუსი 1 %
თ 10 ზე მეტია მაშნ 0%*/
let salary, bonus;
salary=30500
if (salary <= 1000) {
    bonus =salary * 20/100
}else if(salary<=3000){
    bonus=salary*0.1
}else if(salary<=10000){
    bonus=salary*0.01
}else{
    bonus=`bonusi ar aris`
}
console.log(bonus)
