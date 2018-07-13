

$(document).ready( () => {
    document.getElementById('fetch-all').onclick = function(){
    getFullList()
  }


  document.getElementById('fetch-one').onclick = function(){
    
    const id = document.getElementsByName('character-id')[0].value;
    getOneRegister(id);
  }

  document.getElementById('new-character-form').onsubmit = function() {
    event.preventDefault(); 

    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;

   if (name ==='') {
     alert('Fill in the "name" field');
   } else if (occupation ==='') {
    alert('Fill in the "occupation" field');
   } else if (weapon ===''){
    alert('Fill in the "weapon" field');
   } else {
     const newCharacter = {
       name: document.getElementsByName('name')[0].value,
       occupation: document.getElementsByName('occupation')[0].value,
       debt: document.getElementsByName('cartoon')[0].checked,
       weapon: document.getElementsByName('weapon')[0].value
      }
    console.log("New Character: ", newCharacter);
    createOneRegister(newCharacter);
   }

  }

document.getElementById('edit-character-form').onclick = function(){
  event.preventDefault(); 
  

  const id = document.getElementsByName('chr-id')[0].value;
  console.log(id);
  const name = document.getElementsByName('name')[1].value;
  const occupation = document.getElementsByName('occupation')[1].value;
  const debtCartoon = document.getElementsByName('cartoon')[1].checked;
  const weapon = document.getElementsByName('weapon')[1].value;

  

  const updCharacter = {};
 
  if (name !=='') { updCharacter.name = name}
  if (occupation !=='') { updCharacter.occupation = occupation}
  if (debtCartoon === true) { updCharacter.debt = debtCartoon}
  if (weapon !=='') { updCharacter.weapon = weapon}


  updateOneRegister (id, updCharacter);
  console.log(updCharacter) 

}


document.getElementById('delete-one').onclick = function(){
    const id = document.getElementsByName("character-id-delete")[0].value;
    console.log("The charcter with ", id, " has been deleted");
    deleteOneRegister(id);
  };



});

