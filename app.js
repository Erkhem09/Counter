// define
var too1 = document.querySelector('.too');
// check
function nemeh(){
    for(i=0; i<=10; i++){
        too1 = too1 + i;
        for(j=0; j<=10; j++){
            too1 = too1 + j;
        }
    }
    too1.innertext = too1;
}