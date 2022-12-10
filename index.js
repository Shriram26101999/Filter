let employee = document.getElementById('employee');
let e=document.getElementById('prof');

let prof = [
    {id:1,name:"john",profession:"developer",age:"18"},
    {id:2, name:"jack", profession:"developer",age:"20"},
    {id:3, name:"karen",profession:"admin",age:"19"}
]

let strProf='';
function selectProf(){
    // strProf=e.options[e.selectedIndex].text;
    strProf=e.options[e.selectedIndex].value;;
    console.log(strProf);
}
// prof = prof.map(item => ({...item,age:parseInt(item.age,10)}))
prof = prof.map(function(item,index){
    return ({
        id:item.id,
        name:item.name,
        age: parseInt(item.age,10),
        profession:item.profession
    })
})

prof.forEach(item => {
    // result.push({...item,age:item.name =='john' ? 19 : item.age})
    if(item.name =='john'){
        item.age=19;
    }
})


let profTwo = [
    {id:4,name:"jack",profession:"admin",age:20},
    {id:5, name:"jill", profession:"admin",age:21},
    {id:6, name:"kevin",profession:"developer", age:22}
    ]
const list=[...prof,...profTwo];



function render(item){
    employee.innerHTML = item.reduce((htmlString, item) => {
        return htmlString + `
            <div class="employeeItem">
                <span>
                    ${item.id}.
                </span>
                <span>
                    name: ${item.name}
                </span>
                <span>
                    age: ${item.age}
                </span>
                <span>
                    profession: ${item.profession}
                </span>
                
            </div>
        `;
    }, "");
}

render(list);
function filter(){
    console.log(strProf)
    if(strProf=='') return alert('Please select Profession')
    result=list.filter(item => item.profession==strProf);
    render(result);
    console.log(result)

}
