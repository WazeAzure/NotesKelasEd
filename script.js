var db = firebase.database();
var tgs = db.ref('tugas');
var btn = document.getElementById('submit')
var btn_rmv = document.getElementById('submit-rmv');

btn_rmv.addEventListener('click', RemoveAll);
btn.addEventListener('click', UpdateAll);

function RemoveAll(){
  var nomor = document.getElementById('no-rmv').value;
  tgs.child(nomor-1).remove();

}

function UpdateAll(){
  var numb = document.getElementById('no').value;
  var namaTugas = document.getElementById('name').value;
  var dead = document.getElementById('deadline').value;
  var desc = document.getElementById('desc').value;

tgs.on('value', show, showError);

var contoh = {
    [numb-1] : {
    name : [namaTugas],
    deadline : [dead],
    deskripsi : [desc],
    no : [numb]}
}
tgs.update(contoh);
}

function show(items){
  var _ul = document.getElementsByTagName('ul')[0];
  var _content = '';

  items.forEach((child) => {
    if(child.val().name === undefined){
      return;
    } else {
      _content += `<li>${child.val().no}. ${child.val().name} [${child.val().deadline}] <br> ${child.val().deskripsi}</li>`;
    }
  })
  _ul.innerHTML = _content;
  console.log(items.val());
}

function showError(error){
  alert("Oops.. sesuatu erro");
  console.log(error);
}
