let DOB=document.querySelector('.DOB');
DOB.addEventListener('input',settingvalues);
let current=new Date();
let currentyear=current.getFullYear();
let currentmonth=current.getMonth()+1;
let currentday=current.getDate();

let calculatebtn=document.querySelector('.calculate');
calculatebtn.addEventListener('click',calculate);

let displayyears=document.querySelector('.pyears');
let displaymonths=document.querySelector('.pmonths');
let displaydays=document.querySelector('.pdays');
let stateyear=document.querySelector('.stateyear');
let statemonth=document.querySelector('.statemonth');
let stateday=document.querySelector('.stateday');



let NoOfDays={
    1:31,
    2:29,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31

}

function checkyear(NoOfDays,year){
    if ((year%4==0) && (year%100!=0) || (year%400==0) ){
        NoOfDays['2']=29;
    }
    else{
        NoOfDays['2']=28;
    }
}

checkyear(NoOfDays,currentyear);


let fullDOB , DOBmonth ,DOBdate ,DOByear ;

function settingvalues(){
    fullDOB=event.target.value
    DOBmonth=parseInt(fullDOB.substr(5,2));
    DOBdate=parseInt(fullDOB.substr(8,2));
    DOByear=parseInt(fullDOB.substr(0,4));
}



function calculate(){ 
    let monthdays=NoOfDays[`${DOBmonth}`];
    let agedays=(monthdays-DOBdate+currentday);
    let agemonths=(currentmonth-DOBmonth-1);
    let ageyears=currentyear-DOByear-1;
    

    if (agemonths<0){
        if (ageyears!=-1){
            agemonths=12-Math.abs(agemonths);
        }
    }
    if (agedays-monthdays>=0){
        agemonths+=1;
        if (agemonths==12){
            ageyears+=1;
            agemonths=0;
        }
        agedays=(agedays-monthdays);
    }

    if (ageyears==-1){
        ageyears=0;
    }
    if (agemonths==-1){
        agemonths=0;
    }
   
    displayyears.textContent=`${ageyears}`;
    displaymonths.textContent=`${agemonths}`;
    displaydays.textContent=`${agedays}`;
    stateyear.classList.remove('state');
    statemonth.classList.remove('state');
    stateday.classList.remove('state');
    stateyear.classList.add('showstate');
    statemonth.classList.add('showstate');
    stateday.classList.add('showstate');

    // console.log(`${ageyears}.....${agemonths}......${agedays}`);
}