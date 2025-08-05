const input = document.querySelector('#inputNama');
const tombol = document.querySelector('#tombol')
const eror = document.querySelector('.eror');


tombol.addEventListener('click',()=>{
    const nama = input.value;
    if (nama === 'ningg'){
        window.location.href = 'dashboard.html';
    } else{
        const namaEror = document.querySelector('#namaEror');
        namaEror.textContent = nama;
        input.value = '';
        eror.style.display = 'block';
    }
})

const cta = document.querySelector('.cta');
cta.addEventListener('click',()=>{
    eror.style.display = 'none';
    input.focus();
})

