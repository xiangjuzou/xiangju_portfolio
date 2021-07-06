class Msg {
    constructor(id, datum, inkomen, uitgeven, categorieën, opmerking) {
        this.datum = datum;
        this.opmerking = opmerking;
        this.categorieën=categorieën;
        this.inkomen=  isNaN(Number(inkomen))? 0 : Number(inkomen);
        this.uitgeven =  isNaN(Number(uitgeven))? 0 : Number(uitgeven);
        this.id = id;
    }
}

class UI {
    constructor () {
        this.Id = 1;
    }

    addItem(msg) {
      const list=document.querySelector('#list');
      const row = document.createElement('tr');
      row.innerHTML= `
      <td>${msg.datum}</td>
      <td>${msg.inkomen}</td>
      <td class="nr">${msg.uitgeven}</td>
      <td>${msg.categorieën}</td>
      <td>${msg.opmerking}</td>
      <td> <a href="#" class="btn btn-danger delete" data-id="${msg.id}"> x </a></td>
      `;
      list.appendChild(row);
   }
                 
    clearFiled(){
        document.querySelector('#datum').value ="";
        document.querySelector('#inkomen').value ="";
        document.querySelector('#categorieën').value ="";
        document.querySelector('#opmerking').value="";
        document.querySelector('#uitgeven').value="";
    }

    deleteItem(ele){
         ele.parentElement.parentElement.remove();
    }

    handelDelete(e) {
        if(e.target.classList.contains('delete')) {
            this.deleteItem(e.target);
            mymessages.remove(e.target.getAttribute("data-id"));
           }
    }

    handleAdd(e){
        e.preventDefault();

        const datum = document.querySelector('#datum').value;
        const inkomen = document.querySelector('#inkomen').value;
        const uitgeven = document.querySelector('#uitgeven').value;
        const categorieën = document.querySelector('#categorieën').value;
        const opmerking = document.querySelector('#opmerking').value;
        const msg = new Msg(this.Id, datum,inkomen,uitgeven,categorieën,opmerking);
        this.addItem(msg);
        mymessages.add(msg);
        this.clearFiled();
        this.Id +=1;
    }
}

class messages {
    constructor() {
        this.msgarray = [];
    }

    add(msg) {
        this.msgarray.push(msg);
    }

    remove(id) {
        this.msgarray = this.msgarray.filter( (v) => v.id != id);
    }

    getTotal() {
        let total = 0;
        this.msgarray.forEach( (msg) => {
            total +=  msg.uitgeven;
        });
        console.log(total);
        return total.toString();
    }
  
     getSavings(){
        let ammount = 0;
      this.msgarray.forEach( (msg)=>{
         ammount += msg.inkomen-msg.uitgeven
      });
      console.log(ammount);
        return ammount.toString();
     }
}

/*main*/

const mymessages = new messages();
const myUI = new UI();

const form = document.querySelector('form');
form.addEventListener('submit', (e) => myUI.handleAdd(e));
document.querySelector('#list').addEventListener('click', (e) => myUI.handelDelete(e));


// Totale uitgaven knopje (met jquery)
$('#total').on('click', ()=>{
   $('#TOTALEUITGAVEN').text(mymessages.getTotal());
   $('#totalenmodal').modal('show');
});

$('#savings').on('click', ()=>{
    $('#SAVINGS').text(mymessages.getSavings());
    $('#savingsmodal').modal('show');
 });


