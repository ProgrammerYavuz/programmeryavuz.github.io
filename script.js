const   piyanoTuslari   =   document.querySelectorAll(".piyano-tuslari .tus"),
        sesAyari        =   document.querySelector(".ses-ayari input"),
        tusTakimi       =   document.querySelector(".tus-takimi input");

let tumTuslar = [],
ses = new Audio("./akorlar/a.wav");

const melodiCal = (tus) => {
    ses.src = `./akorlar/${tus}.wav`; 
    ses.play();

    const tiklananTus = document.querySelector(`[data-tus="${tus}"]`);
    tiklananTus.classList.add("aktif");
    setTimeout(() => {
        tiklananTus.classList.remove("aktif");
    }, 150);
}


piyanoTuslari.forEach(tus => {
    tumTuslar.push(tus.dataset.tus);
    tus.addEventListener("click", () => melodiCal(tus.dataset.tus));
});

const sesDegeri = (e) => {
    ses.volume = e.target.value;
}

const gosterGizle = () => {
    piyanoTuslari.forEach(tus => tus.classList.toggle("gizle"));
}

const basilanTus = (e) => {
    if (tumTuslar.includes(e.key)) melodiCal(e.key);
}

tusTakimi.addEventListener("click", gosterGizle);

sesAyari.addEventListener("input", sesDegeri);

document.addEventListener("keydown", basilanTus);