console.log('phone hunting now');
const loadPhones=async(searchText)=>{
    const url=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await url.json();
    const phones= data.data;
    // console.log(phones)
    displayPones(phones);
}
const displayPones=(phones)=>{
    // console.log(phones)
    const phonesContainer= document.getElementById('phones-container');
    
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

    
        // find the phone name from input field

        const searchField= document.getElementById('search-field');
        const searchText= searchField.value;
        // console.log(searchText)
       
    loadPhones(searchText);
}

// loadPhones()