const form = document.getElementById('form')

const fName = document.getElementById('fn')
const lName = document.getElementById('ln')
const email = document.getElementById('email')
const password = document.getElementById('pwd')


form.addEventListener('submit', (e) => {
    // console.log('clicked')
   
    // console.log(lName.placeholder)
    checkInputs();
    // console.log(checkInputs());
    e.preventDefault();
});

const checkInputs = () => {
    // todo get values 
    const inputs =[
            fName,
            lName,
            email,
            password
    ]

    const res =inputs.filter( input => !input.value)

    for(let i of res){
        const small = document.createElement('small')
        small.innerHTML =`${i.placeholder} cannot be empty`;
        small.classList.add('small')
        const parent = i.parentElement;
        i.nextElementSibling.style.display = 'block'
        parent.appendChild(small)

        setTimeout( () => {
             i.nextElementSibling.style.display = 'none';
//              small.style.display = 'none';
            parent.removeChild(small)
             clearFields()

        }, 2000)
      
    }

    const clearFields = () => {
        const reset = inputs.map( i => {
            i.value="";
            return i

        })
        return reset;
    }
           
    return res
}

