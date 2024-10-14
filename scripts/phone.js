console.log('phone hunting now');
const loadPhones=async(searchText='13')=>{
    const url=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await url.json();
    const phones= data.data;
    // console.log(phones)
    displayPones(phones);
}
const displayPones=(phones)=>{
    // console.log(phones)
    const phonesContainer= document.getElementById('phones-container');
    phonesContainer.textContent='';

    // show more button when 12 or more phone
    const showMoreContainer= document.getElementById('show-more-container');
    if(phones.length>12){
      
      showMoreContainer.classList.remove('hidden');
    }
    else{
      showMoreContainer.classList.add('hidden');
    }
    console.log(phones.length)

    phones=phones.slice(0,12);
    // show no found when no phone found
    const noPhoneContainer=document.getElementById('no-phone-container');
    if(phones.length==0){
      noPhoneContainer.classList.remove('hidden');
    }
    else{
      noPhoneContainer.classList.add('hidden');
    }
    // display phone container
    phones.forEach(phone=>{
        // console.log(phone)
        const phoneDiv=document.createElement('div');
        phoneDiv.classList=`card card-compact bg-base-100 w-96 shadow-xl`;
        phoneDiv.innerHTML=`
            <figure>
                      <img
                        src="${phone.image}" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Details</button>
                      </div>
                    </div>
        `;
        phonesContainer.appendChild(phoneDiv);
   
       
    });
    loadSpinner(false);  
   
     
}
// handle search by search button

const handleSearch=()=>{
     // find the phone name from input field
     
     loadSpinner(true);
     const searchField= document.getElementById('search-field');
     const searchText= searchField.value;
     searchField.value='';
     console.log(searchText)
    
 loadPhones(searchText);
}
// handle search by enter key
document.getElementById('search-field').addEventListener('keypress',function(event){
 
  const searchField= document.getElementById('search-field');
     const searchText=searchField.value;
 
     if(event.key==='Enter'){
      loadPhones(searchText);
      loadSpinner(true);
      searchField.value='';
     }
     
})

// load spinner handeling
const loadSpinner=(isLoading)=>{
  const loadSpinner= document.getElementById('spinner-loader-container');
  if(isLoading===true){
     loadSpinner.classList.remove('hidden');
  }
  else{
    loadSpinner.classList.add('hidden');
  }
}

loadPhones()