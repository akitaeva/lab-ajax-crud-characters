const baseurl = "https://ih-crud-api.herokuapp.com";


 function getFullList () {
   axios.get(baseurl + '/characters')
   .then(res => {
    $('.characters-container').empty();
    res.data.forEach((oneCharacter) => {
        // console.log("oneCharacter: ", oneCharacter)
        const newChar = 
        `
        <div>
        <div>Name: ${oneCharacter.name}</div>
        <div>Occupation: ${oneCharacter.occupation}</div>
        <div>Debt: ${oneCharacter.debt}</div>
        <div>Weapon: ${oneCharacter.weapon}</div>
        <div>ID:${oneCharacter.id}  </div>
        </div>
        <hr>
        `
        $('.characters-container').append(newChar);
      });
    })
   .catch(err => console.log(err));
}


  function getOneRegister (id) {
    axios.get(baseurl + '/characters/' + id)
    .then(res => {
    $('.characters-container').empty();
    const newChar = 
    `
    <div>
    <div>Name: ${res.data.name}</div>
    <div>Occupation: ${res.data.occupation}</div>
    <div>Debt: ${res.data.debt}</div>
    <div>Weapon: ${res.data.weapon}</div>
    </div>
    <hr>
    `
    $('.characters-container').append(newChar);

    })
    .catch(err => console.log(err));

  }

 function createOneRegister (data) {
   axios.post(baseurl + '/characters/', data)
   .then(res => console.log("the Character has been added:", res))
   .catch(err => console.log(err));
  }

  function updateOneRegister (id, data) {
    axios.patch(baseurl + '/characters/' + id, data)
    .then(res => console.log(id, ' the element updated', res))
    .catch(err => console.log(err)); 
  }

 function deleteOneRegister (id) {
   axios.delete(baseurl + '/characters/' + id)
   .then(res => console.log("Deleting complete", res))
   .catch(err => console.log(err));

  }

