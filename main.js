const myForm = document.querySelector('#my-form')
const nizBrojevaInput = document.querySelector('#nizBrojeva')
const odabraniBroj = document.querySelector('#odabraniBroj')
const msg = document.querySelector('.msg')
const msgReza = document.querySelector('.msgReza')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
  e.preventDefault();

  if(nizBrojevaInput.value === '' || odabraniBroj=== ''){
    msg.classList.add('error')
    msg.innerHTML = 'Molimo unesite brojeve u polje'
  }
  
  else{
    let odabraniBrojInt = parseInt(odabraniBroj.value)
    let sum = 0
    let tempBroj = odabraniBrojInt
    //dohvaca brojeve iz unosa(N), razdvaja ih po razmacima, te sortira od najveceg do najmanjeg
    let brojevi = nizBrojevaInput.value.split(' ').map(Number)
    .sort(function(a, b){return b - a})

    let tempLista = new Array()
    let tempLista2 = new Array()

    //pretvaram ucitane brojeve u int, te ih spremam u temp listu
    brojevi.forEach(broj => {
      tempLista.push(parseInt(broj))
    });

    tempLista.forEach(broj => {
      //svaki broj iz templiste koji je manji od ranije odabranog broja(B),  oduzimam od odabranog broja(B), te ga spremam u drugu temp listu. to se vrti sve dok vise temp broj (ranije odabrani broj), ne bude manji ili jednaki sa nekim brojem iz liste 
      while (broj <= tempBroj){
        tempBroj = tempBroj - broj;
        tempLista2.push(broj);
      }
    });

    //ovo sluzi samo za provjeru da li se moze dobiti zbroj brojeva iz liste(N) koji bi bio jednak sa odabranim brojem(B), kako se ne bi dogodio primjer 3 iz pdfa
    tempLista2.forEach(broj => {
      sum += broj
    });

    if (sum!=odabraniBrojInt)
        msgReza.innerHTML = "Output: -1"

    else{
        msgReza.innerHTML = "Output: "+tempLista2.length;
        }

    //cisti unose
    nizBrojevaInput.value = ''
    odabraniBroj.value = ''
  }
}