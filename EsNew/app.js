const data = [
    {
        name:'srikanth',
        age:'34',
        gender:'male',
        lookingfor:'female',
        location:'Boston MA',
        image:'./images/eng.jpg'
    },
    {
        name:'ravi',
        age:'38',
        gender:'male',
        lookingfor:'female',
        location:'hyd',
        image:'some image2'
    },
    {
        name:'srija',
        age:'32',
        gender:'female',
        lookingfor:'male',
        location:'caifornia',
        image:'some image3'
    }
]

document.getElementById('next').addEventListener('click',nextProfile);
function nextProfile(){
    const currentProfile = profiles.next().value;
    document.getElementById('profileDisplay').innerHTML = `
   <ul>
   <li>Name: ${currentProfile.name}</li>
   <li>Name: ${currentProfile.age}</li>
   <li>Name: ${currentProfile.gender}</li>
   <li>Name: ${currentProfile.lookingfor}</li>
   <li>Name: ${currentProfile.location}</li>
   </ul>

    `
    document.getElementById('imageDisplay').innerHTML = `
    <img src='${currentProfile.image}>'
    `
}
const profiles = profileIterator(data);

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++],done:false} : {
                done:true
            }
        }
    }
}