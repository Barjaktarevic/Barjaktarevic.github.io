AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})

AOS.init();

const swiper = new Swiper('.mySwiper', {
    
    loop: true,

    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}})

const tabs = document.querySelectorAll('[data-tab-target]')
const sections = document.querySelectorAll('.section')

tabs.forEach(tab =>
    tab.addEventListener('click', function() {
        const target = document.querySelector(tab.dataset.tabTarget)
        sections.forEach(function (section) {
            section.classList.add('inactive')
            section.classList.remove('active')
        })    
        tabs.forEach(function (tab) {
            tab.classList.remove('BG')
        })
        tab.classList.add('BG')
        target.classList.remove('inactive')
        target.classList.add('active')
        
    })
)

const api_url ="https://randomuser.me/api/?results=5";

async function getapi(url)  {
    try {
        const response = await fetch(url);
        const data = await response.json();
        updateTestmonials(data)
    } catch(e) {
        console.log(e)
    }
    }

getapi(api_url)
const quotesArray = ['Brzina kojom ovaj čovjek uči...', 'Nema predanijeg radnika od njega.', 'Ovo nije samo async/await demonstracija, ja sam stvarna osoba!', 'Nećete požaliti ako zaposlite ovog čovjeka.', 'Možda tek počinje, ali ima puno potencijala.', 'Timski igrač.', 'Dobro poznaje strane jezike što je uvijek korisno.', 'Pomogao mi je jednom prilikom s kosačicom.', 'A solidan je, šta ja znam...', 'Radi na sebi svaki dan.', 'Čovjek se ne da vidjeti mjesecima, samo uči kodirati po cijele dane.', 'Oprostite, ali ja ne znam ovu osobu.', 'Kao nastavnik bio je jedan od najboljih i najpouzdanijih.', 'Ima divnu ženu.', 'Ovaj čovjek ne zna što je gubljenje vremena.', 'Viđam ga posvuda u web dev zajednici.', 'Kažu da je jednom potrošio cijelu plaću na 50 udemy tečaja.', 'Da citiram Einsteina: "Zakon je."', 'Ima samo jednu manu: ne zna kad treba odustati', 'Pričaju u narodu da mu je toliko dojadio rad u školi da je spreman na sve.', 'Nema baš neki ukus za glazbu, ali što je, tu je.', 'Ne pije, ne puši, nema poroka, osim što kodira po cijele dane.', 'Živi na 4. katu bez lifta pa ima i dobru kondiciju.', 'Njegov je moto: Nemam moto, što će mi moto?', 'Zaljubljenik u povijest.', 'Jedan od najsigurnijih vozača na cesti.', 'E ček ček, to je onaj lik što vodi podcast "Engleski kroz govorne vježbe"?', "Evo, iskreno, ne znam lika, ali čini se okej.", "Čekajte, zašto sam ja ovdje? Što trebam reći?", "Ma stalno ga viđam na WebDevSimplified, ZTM, Kevin Powell i sličnim kanalima na YouTubeu...", "Kažu da se namjerio biti najbolji up-and-coming web developer 2023. godine.", "Toliko puno kodira da je počeo pisati JSON umjesto Jason na nastavi Engleskog.", "Kad čuje Java, prva asocijacija mu nije otok u Indoneziji.", 'E iskače iz paštete više sa svojim GitHub commits i push requests.', 'Kad misli da je sam, nekad samo uzvikne: "GIIIT".', 'Jedan od rijetkih ljudi koji zna ECMAscript 6 napamet...', 'Napravio mi je par polica za kuću, ali nisam ga vidio kako kodira.', 'Taj će vam i gledanje boje kako se suši pretvoriti u natjecanje...', 'Ha čujte... Bože moj, ima nas svakakvih ljudi.', 'Da citiram onu narodnu: "Dokon pop i jariće krsti."', 'Ima jedno 15 godina kad smo zadnji put surađivali, ali nije bilo problema.', 'Rijetko se čujemo ovih dana, a da vam budem iskren, drago mi je da je tako.', 'Veoma emotivno nezahtjevna osoba. Evo, pametnom dosta.', 'Šuć-muć pa prolij...']

const testimonialsSection = document.querySelector('.testimonials')

function updateTestmonials(data) {
    for (let datum of data.results) {
        const div = document.createElement('div')
        div.classList.add('testimonials-container')

        const img = document.createElement('img')
        img.src = datum.picture.large
        img.classList.add('testimonials-img')
        console.log(datum.picture.large)

        const name = document.createElement('p')
        name.classList.add('testimonials-name')
        name.innerText = datum.name.first + ' ' + datum.name.last

        const quote = document.createElement('p')
        quote.classList.add('testimonials-quote')
        quote.innerText = quotesArray[Math.floor(Math.random() * quotesArray.length)]

        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(quote)
        testimonialsSection.appendChild(div)
      
    }    
 }

//  Projekti
 const projects = [
    {
        title: "Captain's blog",
        description: 'Moj najozbiljniji projekt dosad na kojem sam radio oko tri mjeseca. Riječ je o full-stack aplikaciji za pisanje SF kratkih priča. Sadrži sljedeće funkcionalnosti: PassportJS login i signup uz verifikaciju emailom, pet različitih modela u bazi podataka koji se međusobno referiraju, posts & comments sustav, HTML sanitizaciju i brojne druge. Možete testirati na linku ispod.',
        tags: ["node", "express", "ejs", "full-stack", "mongoDB", "mongoose", "CSS"],
        link: "",
    },
    {
        title: 'Tic-tac-toe',
        description: 'Moj prvi teži projekt kojeg sam izradio mjesec i pol dana nakon početka učenja kodiranja. Spaghetti code all over the place - sve je izrađeno uz pomoć if/else clauses, ali sve radi bez ikakvih bugova. Link na igru ispod.',
        tags: ["HTML", "CSS", "JS"],
        link: "",
    },
    {
        title: 'Progress tracker',
        description: 'Prva aplikacija koju sam izradio za vlastiti potrebe kako bih pratio napredak u učenju. Pamti unose u local storage i ima light i dark mode koje sam izradio u potpunosti iz ničega.',
        tags: ["HTML", "CSS", "JS"],
        link: "https://barjaktarevic.github.io/progress-tracker/",
    },
    {
        title: 'Quote generator',
        description: 'Prva aplikacija kojom sam želio uvježbati fetch API i async/await. Poslužila je i kao vježba za upotrebu animiranih SVG loadera.',
        tags: ["HTML", "CSS", "JS","APIs"],
        link: "https://barjaktarevic.github.io/Quote-generator/",
    },
    {
        title: 'Rock paper scissors lizard spock',
        description: 'Ovo je bila jedina "prava" aplikaciju koju sam napravio prije nego što sam počeo gore-spomenuti tic-tac-toe. Pratio sam tutorial na YouTubeu, ali sam na kraju dodao svoju funkcionalnost.',
        tags: ["HTML", "CSS", "JS"],
        link: "",
    },
    {
        title: 'Weather App',
        description: 'Još jedna aplikaciju za vježbu fetch API-ja; ovaj put puno kompleksnija od generatora citata. Također koristi HTML template cloning, malo kompleksnije switch statements i općenito puno više funkcija od ostalih aplikacija.',
        tags: ["HTML", "CSS", "JS", "APIs"],
        link: "https://barjaktarevic.github.io/Weather-App/",
    },
    {
        title: 'Memory Game',
        description: 'Moj prvi React projekt za koji mogu reći da sam ga napravio bez neke veće pomoći tutorijala. Napravljen u jeku Svjetskog prvenstva u nogometu. Možete testirati na linku ispod kao i sve ostale projekte.',
        tags: ["React", "JS"],
        link: "https://barjaktarevic.github.io/memory-game/",
    },
    {
        title: 'Todo app',
        description: 'Moj prvi TypeScript projekt napravljen uz pomoć Snowpack bundlera. Ima funkcionalnost dodavanja i brisanja zadataka, označavanja zadataka završenim i aktivnim te koristi OOP pristup za generaciju zadataka. Međutim, s obzirom na to da mi je ovo bio prvi pokušaj s bundlerom, nisam dobro odradio Github pages deployment, iako znam gdje sam pogriješio, tako da ovaj projekt nije javno dostupan.',
        tags: ["TypeScript", "HTML", "CSS", "Snowpack"],
        link: "",
    },
    {
        title: 'Book Landing Page',
        description: 'Prvi projekt izrađen uz pomoć Bootstrapa kao vježba.',
        tags: ["HTML", "Bootstrap"],
        link: "https://barjaktarevic.github.io/Book-landing-page-1/",
    },
    {
        title: 'Book Landing page 2',
        description: 'Drugi projekt izrađen uz pomoć Bootstrapa, također kao samostalna vježba.',
        tags: ["HTML", "Bootstrap"],
        link: "https://barjaktarevic.github.io/Book-landing-page-2/",
    },
    {
        title: 'Infinite scroll page',
        description: 'Još jedan od nekoliko fetch API projekata, međutim ovaj upotrebljava i nešto JS-a kako bi odredio položaj scroll bara na stranici i generirao dodatni sadržaj po potrebi. Također prvi projekt koja imi hamburger menu u gornjem lijevom kutu.',
        tags: ["HTML", "CSS", "JS", "APIs"],
        link: "https://barjaktarevic.github.io/Infinite-scroll/",
    },
    // {
    //     title: 'Web Blog',
    //     description: '',
    //     tags: ["React", "CSS Modules", "Firebase"],
    //     link: "",
    // },
    {
        title: 'Form Validator',
        description: 'Jedan manji projekt za validaciju obrazaca koji upotrebljava malo ekstenzivniji HTML i Regex (Regex obrasce iz ovog projekta koristim i u brojnim drugim projektima za front-end validation).',
        tags: ["HTML", "CSS", "JS"],
        link: "https://barjaktarevic.github.io/Form-Validator/",
    },
]


 let images = [...document.querySelectorAll('.project-img')]
 let modal = document.querySelector('[data-modal]')
 let closeButton = document.querySelector('[data-modal-close]')
 let modalTitle = document.querySelector('[data-modal-title]')
 let modalDescription = document.querySelector('[data-modal-description]')
 let modalTags = document.querySelector('[data-modal-tags]')

 for (let i = 0; i < projects.length; i ++) {
    images[i] && images[i].addEventListener('click', () => {
        modalTitle.innerText = projects[i].title
        modalDescription.innerText = projects[i].description
        modalTags.innerText = projects[i].tags
        modal.showModal()
    })
 }

 closeButton.addEventListener('click', () => {
    modal.close()
 })
