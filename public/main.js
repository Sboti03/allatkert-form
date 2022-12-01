

const AllatFaj = {
    kutya: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mudi_portrait.jpg',
        decs: 'A kutya vagy eb (Canis lupus familiaris) ujjon járó emlős ragadozó állat, a szürke farkas (Canis lupus) egy már kihalt alfajának háziasított formája. Az egyetlen olyan emlős állatfaj, amely tudományos nevében megkapta a familiaris, azaz a családhoz tartozó jelzőt. A kutyákat szokás a társállatok sorában emlegetni. '
    },
    macska: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg',
        decs: 'A macska, más néven házi macska (Felis silvestris catus) kisebb termetű húsevő emlős, amely a ragadozók rendjén belül a macskafélék (Felidae) családjának Felis neméhez és vadmacska (Felis silvestris) fajához tartozik. A vadmacska alfaja. Ügyes ragadozó, több mint 1000 faj tekinthető a zsákmányának. Emellett meglehetősen intelligens, beidomítható egyszerű parancsok végrehajtására vagy szerkezetek működtetésére – illetve képes önállóan is kisebb feladatok betanulására.'
    },
    majom: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Gorilla.jpg',
        decs: 'A majomalkatúak (Simiiformes) az emlősök (Mammalia) osztályába a főemlősök (Primates) rendjébe az orrtükör nélküliek (Haplorrhini) alrendjébe tartozó alrendág.'
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    let allat;
    if(document.getElementById('macska') != null) {
        allat = AllatFaj.macska;
    } else if(document.getElementById('kutya') != null) {
        allat = AllatFaj.kutya;
    } else  {
        console.log(document)
        allat = AllatFaj.majom;
    }

    let kep = document.createElement('img');
    
    kep.src = allat.img;

    let adatok = document.createElement('p');
    adatok.classList.add('leiras')
    adatok.textContent = allat.decs;

    let out = document.getElementById('out')
    out.append(kep)
    out.append(adatok)
})