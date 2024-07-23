// Soal 2 - Javascript
let dataArray = [["Jasa Instalasi Pipa",300000], ["Catering", 50000], ["",85000], ["Jasa Kebersihan",50000]]

for (let i = 0; i < dataArray.length; i++) {
  var a = dataArray[i]
  if (a[0].includes("Jasa")){
    a.push(a[1]*0.02)
  }
  else if (a[0].includes("Catering")){
    a.push(a[1]*0.005)
  }
  else if (a[0] == ""){
    a.push(0)
  }
}

console.log(dataArray);


// Soal 3 - Javascript
function main (){
  const baselineDate = new Date("2024-05-22")
  const holidayList = [new Date("2024-05-09"), new Date("2024-05-10"), 
                       new Date("2024-05-23")]
  console.log(CalculateDueDate(baselineDate, 3, holidayList))
  //return Tanggal 28 Mei 2024
}

function CalculateDueDate(baselineDate, duration, holidayList){
  var dates = [];
  var addDuration = new Date(baselineDate);
  Date(addDuration.setDate(addDuration.getDate() + duration));
  var endDate = addDuration;
  
 while (baselineDate <= endDate){
    if (!holidayList.some(i => i.getTime() === baselineDate.getTime()) 
        && baselineDate.getDay() % 6 != 0){
      var datesCount = new Date(baselineDate);
      dates.push(datesCount);
    }
    else{
      Date(endDate.setDate(endDate.getDate() + 1));
      }
   baselineDate.setDate(baselineDate.getDate() + 1);
  }
 return dates.slice(-1)[0].toLocaleDateString('id-id', {year: 'numeric', month: 'long', day: 'numeric'});
}

main();
