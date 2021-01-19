document.addEventListener('DOMContentLoaded', function(event) {
    var hunLanguage = document.getElementById("hun-lang");
    var engLanguage = document.getElementById("eng-lang");

    translations = {
        'eng' : {
            'mentorRefText': "Gery is quite a solution-focused person who has the ability to change the perspective of challeging situations. With his positive attitude, he can boost his teammates while he puts extra efford to achieve the common goal. He is a really humble collegue with the necessary skills of a proffesional developer. Gery is really accountable who delivers in time and communicate transparently.",
            'classRefText': "Even while being super professional and hard working, Gery's coding skills are the less important thing why working with him is amazing. Not only is he great at delivering his tasks, he is also very nice and chilled person, who deals with stressful situations or last minute deadliness superbly and helps resolving any conflict situations between team members might they come up doring the sprint.",
            't1': "Contact",
            't2': "Education",
            't2-1': "Software Developer School",
            't2-2': "European Union Trade Manager",
            't2-3': "Budapest Business School",
            't2-4': "Graduation",
            't2-5': "Leövey Klára High School",
            't3': "References",
            't4': "Spoken Languages",
            't4-1': "Hungarian, Native language",
            't4-2': "English, Upper intermediate",
            't5-1': "Gergely",
            't5-2': "Esztojka",
            't5-3': "Software Developer",
            't6': "Main Interests",
            't6-1': "I characterize myself as an open, hardworking and communicative person, who likes to learn and experience new things in life. I've been told that I can communicate with people easily and they like to work with me on a daily basis, which is a plus when doing jobs with others. I can learn and you use new knowledge in a short period of time and I believe everything can be learned.",
            't7': "Work Experience",
            't7-1': "Junior Software Developer",
            't7-1-1': "August 2019 - May 2020",
            't7-1-2': "infinitrac Kft., Budapest - Hungary",
            't7-1-3': "Implement back-end server logic in MSSQL, ASP.NET Core, Azure DevOps environment. Creating Xamarin mobile application for Apple & Android store. Maintenances of LAMP stack with joomla website. Researching, providing architectural and solution ideas for given problems.",
            't7-2': "Head Waiter and Restaurant Manager",
            't7-2-1': "April 2014 - November 2016",
            't7-2-2': "Inver Lodge Hotel & Chez Roux Restaurant, Lochinver - Scotland",
            't7-2-3': "Training new staff for the current season. Managing restaurant work. Solving complains and prepare for returning guests' routine.",
            't7-3': "Take Out Waiter",
            't7-3-1': "May 2013 - February 2014",
            't7-3-2': "Gundel Restaurant, Budapest - Hungary",
            't7-3-3': "Opening and closing procedures of the restaurant. Prepare and serve in-house or outdoor events. Serving food and drinks to the costumer and occasionally work at the bar section.",
            't7-4': "Assistant Manager",
            't7-4-1': "December 2011 - June 2012",
            't7-4-2': "A-Tech Europe Company, Gödöllő - Hungary",
            't7-4-3': "Active use of English language. Communicaion with costumers (main partner: SAMSUNG). Frequently work in the storage hall and perform logistic tasks.",
            't7-5': "IT Trainee",
            't7-5-1': "February 2011 - July 2011",
            't7-5-2': "The Aquincum Hotel, Budapest - Hungary",
            't7-5-3': "IT support for the hotel departents. Technical service for costumers. Server maintenance and e-mail account management.",
            't8': "Skills",
            't8-1': "Good Listener",
            't8-2': "Flexibility",
            't8-3': "Friendliness",
            't8-4': "Desire to Learn",
            't9': "Interesting Things About Me",
            't9-1': "In my free time I like to play board games, learn new interesting facts, reading books. I like to spend time outside as well, go hiking, play table tennis, tennis with my friends."
        },
        'hun' : {
            'mentorRefText': "Gery egy olyan személy, aki a megoldásra koncentrál, és meg van rá a képessége, hogy megváltoztassa kihívást jelentő helyzeteket. A pozitív hozzáállásával, segíti a csapatszellemet, miközben extra erőfeszítéseket tesz a közös cél érdekében. Ő egy igazán alázatos munkatárs, akiben megvan minden képesség, hogy professzionális fejlesztő legyen. Gery megbízható, aki mindig időre teljesít és nyíltan kommunikál.",
            'classRefText': "Szorgalmas, professzionális, és nem legkisebb érdemben a kódolási tudása mellett Gery-vel dolgozni nagyszerű. Nem csak, hogy remekül ellátja feladatait, de kedves és nyugodt személyisége segíti, hogy stresszes helyzetekben is megállja a helyét legyen az csapaton belül vagy a sprint idő rövídsége miatt.",
            't1': "Elérhetőség",
            't2': "Képzésék",
            't2-1': "Software Fejlesztő Képzés",
            't2-2': "Európai Uniós Szakmenedzser",
            't2-3': "Budapesti Gazdasági Főiskola",
            't2-4': "Érettségi",
            't2-5': "Leövey Klára Gimnázium és Szakközép Iskola",
            't3': "Referencia",
            't4': "Beszélt Nyelvek",
            't4-1': "Magyar, Anyanyelv",
            't4-2': "Angol, Felső-Haladó szint",
            't5-1': "Esztojka",
            't5-2': "Gergely",
            't5-3': "Software Fejlesztő",
            't6': "Magamról",
            't6-1': "Szorgalmas, nyitott és barátságos személynek tartom magam, aki szeret új dolgokat tanúlni és tapasztalni. Könnyen tudok egyedül és csapatban is dolgozni. Elmondások alapján szeretnek a kollégák velem dolgozni a segítőkészségem miatt. Képes vagyok rövid idő alatt tudást felvenni és alkalmazni is.",
            't7': "Munka Tapasztalat",
            't7-1': "Junior Software Fejlesztő",
            't7-1-1': "Augusztus 2019 - Május 2020",
            't7-1-2': "infinitrac Kft., Budapest - Magyarország",
            't7-1-3': "Back-end logika fejlesztése MSSQL, ASP.NET Core, Azure DevOps környezetben. Mobil applikáció készítése Apple & Android store-ba. Joomla weblap karbantartása LAMP környezetben. Kutatás, szerkezeti problémákra megoldás ajánlása.",
            't7-2': "Főpincér és Éttermi Vezető",
            't7-2-1': "Április 2014 - November 2016",
            't7-2-2': "Inver Lodge Hotel & Chez Roux Restaurant, Lochinver - Skócia",
            't7-2-3': "Adott szezonra új kollégák betanítása. Éttermi munka ellátása. Előkészülni visszajáróvendégekre, esetleges panaszok kezelése.",
            't7-3': "Pincér",
            't7-3-1': "Május 2013 - Február 2014",
            't7-3-2': "Gundel Étterem, Budapest - Magyarország",
            't7-3-3': "Nyitási és zárási munkák ellátása. Előkészülni és felszolgálni házon belüli vagy külső eseményeken. Étel és ital megfelelő felszolgálása, esetenként bár területen segítségnyújtás.",
            't7-4': "Assistant Manager",
            't7-4-1': "December 2011 - Június 2012",
            't7-4-2': "A-Tech Europe Company, Gödöllő - Magyarország",
            't7-4-3': "Napi szinten angol használat írásban és szóban. Kapcsolat tartás az ügyfelekkel (fő partner: SAMSUNG). Rendszeresen felügyelni a raktárkészletet és logisztikai munkák ellátása.",
            't7-5': "IT Gyakornok",
            't7-5-1': "Február 2011 - Július 2011",
            't7-5-2': "The Aquincum Hotel, Budapest - Magyarország",
            't7-5-3': "IT támogatás a hotel részlegeinek. Technikai segítség a szállóvendégeknek. Szerverek karbantartása és e-mail fiókok kezelése.",
            't8': "Készségek",
            't8-1': "Jó hallgatóság",
            't8-2': "Rugalmasság",
            't8-3': "Barátságos",
            't8-4': "Tanulási vágy",
            't9': "Érdekességek Rólam",
            't9-1': "Szabadidőmben szeretek társasjátékokkal játszani, új és érdekes dolgokról tanúlni, könyvet olvasni. Szabadban szeretek nagyokat kirándulni, teniszezni vagy asztali teniszezni a barátaimmal."
        }
    };

    hunLanguage.addEventListener('click', function(event) {
        document.title = "Önéletrajz - Esztojka Gergely"
        document.getElementById("ref-mentor").innerHTML = translations['hun']['mentorRefText']
        document.getElementById("ref-class").innerHTML = translations['hun']['classRefText']
        document.getElementById("t1").innerHTML = translations['hun']['t1']
        document.getElementById("t2").innerHTML = translations['hun']['t2']
        document.getElementById("t2-1").innerHTML = translations['hun']['t2-1']
        document.getElementById("t2-2").innerHTML = translations['hun']['t2-2']
        document.getElementById("t2-3").innerHTML = translations['hun']['t2-3']
        document.getElementById("t2-4").innerHTML = translations['hun']['t2-4']
        document.getElementById("t2-5").innerHTML = translations['hun']['t2-5']
        document.getElementById("t3").innerHTML = translations['hun']['t3']
        document.getElementById("t4").innerHTML = translations['hun']['t4']
        document.getElementById("t4-1").innerHTML = translations['hun']['t4-1']
        document.getElementById("t4-2").innerHTML = translations['hun']['t4-2']
        document.getElementById("t5-1").innerHTML = translations['hun']['t5-1']
        document.getElementById("t5-2").innerHTML = translations['hun']['t5-2']
        document.getElementById("t5-3").innerHTML = translations['hun']['t5-3']
        document.getElementById("t6").innerHTML = translations['hun']['t6']
        document.getElementById("t6-1").innerHTML = translations['hun']['t6-1']
        document.getElementById("t7").innerHTML = translations['hun']['t7']
        document.getElementById("t7-1").innerHTML = translations['hun']['t7-1']
        document.getElementById("t7-1-1").innerHTML = translations['hun']['t7-1-1']
        document.getElementById("t7-1-2").innerHTML = translations['hun']['t7-1-2']
        document.getElementById("t7-1-3").innerHTML = translations['hun']['t7-1-3']
        document.getElementById("t7-2").innerHTML = translations['hun']['t7-2']
        document.getElementById("t7-2-1").innerHTML = translations['hun']['t7-2-1']
        document.getElementById("t7-2-2").innerHTML = translations['hun']['t7-2-2']
        document.getElementById("t7-2-3").innerHTML = translations['hun']['t7-2-3']
        document.getElementById("t7-3").innerHTML = translations['hun']['t7-3']
        document.getElementById("t7-3-1").innerHTML = translations['hun']['t7-3-1']
        document.getElementById("t7-3-2").innerHTML = translations['hun']['t7-3-2']
        document.getElementById("t7-3-3").innerHTML = translations['hun']['t7-3-3']
        document.getElementById("t7-4").innerHTML = translations['hun']['t7-4']
        document.getElementById("t7-4-1").innerHTML = translations['hun']['t7-4-1']
        document.getElementById("t7-4-2").innerHTML = translations['hun']['t7-4-2']
        document.getElementById("t7-4-3").innerHTML = translations['hun']['t7-4-3']
        document.getElementById("t7-5").innerHTML = translations['hun']['t7-5']
        document.getElementById("t7-5-1").innerHTML = translations['hun']['t7-5-1']
        document.getElementById("t7-5-2").innerHTML = translations['hun']['t7-5-2']
        document.getElementById("t7-5-3").innerHTML = translations['hun']['t7-5-3']
        document.getElementById("t8").innerHTML = translations['hun']['t8']
        document.getElementById("t8-1").innerHTML = translations['hun']['t8-1']
        document.getElementById("t8-2").innerHTML = translations['hun']['t8-2']
        document.getElementById("t8-3").innerHTML = translations['hun']['t8-3']
        document.getElementById("t8-4").innerHTML = translations['hun']['t8-4']
        document.getElementById("t9").innerHTML = translations['hun']['t9']
        document.getElementById("t9-1").innerHTML = translations['hun']['t9-1']
    });

    engLanguage.addEventListener('click', function(event) {
        document.title = "Resume - Esztojka Gergely"
        document.getElementById("ref-mentor").innerHTML = translations['eng']['mentorRefText']
        document.getElementById("ref-class").innerHTML = translations['eng']['classRefText']
        document.getElementById("t1").innerHTML = translations['eng']['t1']
        document.getElementById("t2").innerHTML = translations['eng']['t2']
        document.getElementById("t2-1").innerHTML = translations['eng']['t2-1']
        document.getElementById("t2-2").innerHTML = translations['eng']['t2-2']
        document.getElementById("t2-3").innerHTML = translations['eng']['t2-3']
        document.getElementById("t2-4").innerHTML = translations['eng']['t2-4']
        document.getElementById("t2-5").innerHTML = translations['eng']['t2-5']
        document.getElementById("t3").innerHTML = translations['eng']['t3']
        document.getElementById("t4").innerHTML = translations['eng']['t4']
        document.getElementById("t4-1").innerHTML = translations['eng']['t4-1']
        document.getElementById("t4-2").innerHTML = translations['eng']['t4-2']
        document.getElementById("t5-1").innerHTML = translations['eng']['t5-1']
        document.getElementById("t5-2").innerHTML = translations['eng']['t5-2']
        document.getElementById("t5-3").innerHTML = translations['eng']['t5-3']
        document.getElementById("t6").innerHTML = translations['eng']['t6']
        document.getElementById("t6-1").innerHTML = translations['eng']['t6-1']
        document.getElementById("t7").innerHTML = translations['eng']['t7']
        document.getElementById("t7-1").innerHTML = translations['eng']['t7-1']
        document.getElementById("t7-1-1").innerHTML = translations['eng']['t7-1-1']
        document.getElementById("t7-1-2").innerHTML = translations['eng']['t7-1-2']
        document.getElementById("t7-1-3").innerHTML = translations['eng']['t7-1-3']
        document.getElementById("t7-2").innerHTML = translations['eng']['t7-2']
        document.getElementById("t7-2-1").innerHTML = translations['eng']['t7-2-1']
        document.getElementById("t7-2-2").innerHTML = translations['eng']['t7-2-2']
        document.getElementById("t7-2-3").innerHTML = translations['eng']['t7-2-3']
        document.getElementById("t7-3").innerHTML = translations['eng']['t7-3']
        document.getElementById("t7-3-1").innerHTML = translations['eng']['t7-3-1']
        document.getElementById("t7-3-2").innerHTML = translations['eng']['t7-3-2']
        document.getElementById("t7-3-3").innerHTML = translations['eng']['t7-3-3']
        document.getElementById("t7-4").innerHTML = translations['eng']['t7-4']
        document.getElementById("t7-4-1").innerHTML = translations['eng']['t7-4-1']
        document.getElementById("t7-4-2").innerHTML = translations['eng']['t7-4-2']
        document.getElementById("t7-4-3").innerHTML = translations['eng']['t7-4-3']
        document.getElementById("t7-5").innerHTML = translations['eng']['t7-5']
        document.getElementById("t7-5-1").innerHTML = translations['eng']['t7-5-1']
        document.getElementById("t7-5-2").innerHTML = translations['eng']['t7-5-2']
        document.getElementById("t7-5-3").innerHTML = translations['eng']['t7-5-3']
        document.getElementById("t8").innerHTML = translations['eng']['t8']
        document.getElementById("t8-1").innerHTML = translations['eng']['t8-1']
        document.getElementById("t8-2").innerHTML = translations['eng']['t8-2']
        document.getElementById("t8-3").innerHTML = translations['eng']['t8-3']
        document.getElementById("t8-4").innerHTML = translations['eng']['t8-4']
        document.getElementById("t9").innerHTML = translations['eng']['t9']
        document.getElementById("t9-1").innerHTML = translations['eng']['t9-1']
    });
});