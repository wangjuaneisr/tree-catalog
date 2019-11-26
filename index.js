var data =  [
    {
        name:"AAA",
        kids:[{
            name:"aaa",
            kids:[
                {
                    name:"aaa-1"
                },
                {
                    name:"aaa-2",
                    kids:[{
                        name:"aaaaa-end"
                    }]
                }
            ]
        },{
            name:"aaaa"
        },{
            name:"aaaaa",
            kids:[
                {
                    name:"aaaaa-1"
                }
            ]
        }]
    },{
        name:"BBB",
        kids:[{
            name:"bbb2",
            kids:[
                {
                    name:"bbb3-1"
                },
                {
                    name:"bbb4-2"
                }
            ]
        },{
            name:"bbbb3"
        },{
            name:"bbbbb4",
            kids:[
                {
                    name:"bbbb4-1"
                }
            ]
        }]
    },{
        name:"CCC",
        kids:[{
            name:"cccc1",
            kids:[
                {
                    name:"ccc1-1"
                },
                {
                    name:"ccc1-2"
                }
            ]
        },{
            name:"cccc2"
        },{
            name:"cccc3",
            kids:[
                {
                    name:"cccc3-1"
                }
            ]
        }]
    },{
        name:"DDDD",
        kids:[{
            name:"dddd1",
            kids:[
                {
                    name:"dddd1-1"
                },
                {
                    name:"dddd1-2"
                }
            ]
        },{
            name:"dddd2"
        },{
            name:"dddd3",
            kids:[
                {
                    name:"ddddd3-1"
                }
            ]
        }]
    }
]


let level = data.length-1;

let innHtml = addKids(data);

function addKids(data){
    let ul = document.createElement('ul');
    
    // level ++;
    // console.log(addKids(data[0].kids));
    for(var i = 0; i < data.length; i ++){

        ul.setAttribute('number',i);

        let li = document.createElement('li')

        let p = document.createElement('p');

        p.innerHTML = data[i].name;

        li.appendChild(p);

        if(data[i].kids && data[i].kids.length > 0){
            
            li.appendChild(addKids(data[i].kids));
           
        }

        ul.appendChild(li);
    }
       return ul;
}

document.body.append(innHtml);


let domP = document.getElementsByTagName('p');
// console.log(domP[0])
for(var i = 0;i < domP.length;i++){
    domP[i].addEventListener('click',function(e){
        // console.log(i)
        if(this.parentElement.childNodes.length > 1){
            let sib = this.parentElement.childNodes[1];
            if(sib.getAttribute('class') == 'hide'){
                sib.setAttribute('class','');
            }else{
                sib.setAttribute('class','hide');
            }
            
        }
    },false)
   
}    
