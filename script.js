$(document).ready(function() {
    $('.enigme2').hide();
    $('.enigme3').hide();
    $('.enigme4').hide();
    $('.enigme5').hide();
    $('.enigme6').hide();
    $('.enigme7').hide();
    $('.enigme8').hide();
    $('.enigme9').hide();
    $('.enigme10').hide();
    $('.drama').hide();
    $('.enigme11').hide();
    $('.end').hide();

    // Pour passer de la page d'accueil au jeu
    $('#start').click(function() {
        window.location.href = 'main.html';
    });

    // ENIGME__________1 ==> 2
    $('#submitBtn1').click(function() {
        var answer = $('#answer1').val().trim();      
        if (answer === "48°50'29 NORD 2°13'44 EST" || answer === "48°50'29NORD 2°13'44EST" || 
        answer === "48°50'29 NORD2°13'44EST" || answer === "48°50'29NORD2°13'44 EST" || 
        answer === "48°50'29 NORD 2°13'44EST" || answer === "48°50'29 N 2°13'44 E" || 
        answer === "48°50'29N 2°13'44E" || answer === "48°50'29N2°13'44E" || 
        answer === "48°50'29N 2°13'44E" || answer === "48°50'29N2°13'44 E") {
            alert('Très bien, rendez-vous aux coordonnées GPS près de la station Boulogne Porte de St-Cloud !');
            $('.enigme1').hide();
            $('.enigme2').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map2').setView([48.84145254895848, 2.228976272502428], 20);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>").openPopup();
        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });

    // ENIGME__________2 ==> 3
    $('#submitBtn2').click(function() {
        var answer = $('#answer2').val().toLowerCase().trim();         
        if (answer === 'kyoto') {
            alert("Bravo, allez à la station Bir-Hakeim dès à présent.");
            $('.enigme2').hide();
            $('.enigme3').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map3').setView([48.855446670832045, 2.291664954615917], 16);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            
            //Polygone de recherche
            var coordonnees = [[48.85535601639898, 2.289090703292858],[48.857728518698295, 2.2906482225452747],[48.8556376316901, 2.294072025257418],[48.854343091488744, 2.2923087684090713],[48.852619352716516, 2.29062234016047],[48.854828590357954, 2.288507512243825]];
            var polygon = L.polygon(coordonnees, {color: 'red', "opacity": 0.5, fillColor: '#f04', fillOpacity: 0.2}).addTo(maps).bindPopup("<p>Zone de recherche</p>");

        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });

    // ENIGME__________3 ==> 4
    $('#submitBtn3').click(function() {
        var answer = $('#answer3').val().toLowerCase().trim();      
        if (answer === 'la culture' || answer === 'culture') {
            alert("Excellent, maintenant dirigez-vous vers la station Monceau !");
            $('.enigme3').hide();
            $('.enigme4').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map4').setView([48.87950540990075, 2.309255169927417], 16);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");

            //Polygone de recherche
            var coordonnees = [[48.87954452614572, 2.304975296480551],[48.88041670007663, 2.309010169273864],[48.88083954855163, 2.3126913913617426],[48.87947051528965, 2.314331027372029],[48.877556478467355, 2.310236389219869],[48.87736200750239, 2.3067420477159026],[48.87808144734409, 2.305245240108126]];
            var polygon = L.polygon(coordonnees, {color: 'red', "opacity": 0.5, fillColor: '#f04', fillOpacity: 0.2}).addTo(maps).bindPopup("<p>Zone de recherche</p>");
            
        } else {
            alert("Ce n'est pas la bonne réponse. Cherchez les indices autour de vous pour trouver la solution.");
        }
    });

    // ENIGME__________4 ==> 5
    $('#submitBtn4').click(function() {
        var answer = $('#answer4').val().toLowerCase().trim();      
        if (answer === 'musee henri cernuschi' || answer === 'musée henri cernuschi' || answer === 'musee cernuschi' || answer === 'musée cernuschi' || answer === 'henri cernuschi' || answer === 'cernuschi') {
            alert("Entrez dans ce temple et admirez ses trésors, puis continuez votre quête. Prochaine étape station Pyramides.");
            $('.enigme4').hide();
            $('.enigme5').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map5').setView([48.86590520997638, 2.3369690117123114], 15);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
            // Marqueur 3
            var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");

            //Polygone de recherche
            var coordonnees = [[48.87034690370439, 2.3324561257226524],[48.86818840063922, 2.3436019502342558],[48.867348845673625, 2.3439870430935694],[48.86672831164501, 2.343862626783882],[48.860937231814034, 2.3408381756159495],[48.86535115435347, 2.327314521682423]];
            var polygon = L.polygon(coordonnees, {color: 'red', "opacity": 0.5, fillColor: '#f04', fillOpacity: 0.2}).addTo(maps).bindPopup("<p>Zone de recherche</p>");

        } else {
            alert("Ce n'est pas la bonne réponse. Cherchez les indices autour de vous pour trouver la solution.");
        }
    });

    // ENIGME__________5 ==> 6
    $('#submitBtn5').click(function() {
        var answer = $('#answer5').val().toLowerCase().trim(); 
        if (answer === 'maneki-neko' || answer === 'maneki neko' || answer === 'manekineko') {
            alert("Ne serait t-il pas temps de faire une pause gourmande avant de reprendre ?");
            $('.enigme5').hide();
            $('.enigme6').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map6').setView([48.82793850493718, 2.3268208271142394], 14);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
            // Marqueur 3
            var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");
            // Marqueur 4
            var marker4 = L.marker([48.866303882376556, 2.3355447311286803]).addTo(maps).bindPopup("<p>Maneki-neko</p>");

            //Polygone complexe, zone recherche a partir de donnees geojson 
            var coordonnees = new XMLHttpRequest();
            coordonnees.onreadystatechange = () => {
                if(coordonnees.readyState == 4){
                    if(coordonnees.status == 200){
                        //Chargement du fichier geojson
                        var geojson = JSON.parse(coordonnees.responseText);
                        var geojsonLayer = L.geoJSON(geojson, {
                            style: {
                                "color": "red", // couleur bordure
                                "opacity": 0.5, // opacite bordure
                                "fillColor": "red", // couleur dans le polygone
                                "fillOpacity": 0.2 // opacite couleur du polygone
                            }
                        }).addTo(maps);
                        geojsonLayer.bindPopup("<p>Zone de recherche</p>")
                    }else{
                        console.log(coordonnees.statusText);
                    }
                }
            }
            coordonnees.open("GET", "14.geojson", true);
            coordonnees.send(null); 

        } else if (answer === 'chat porte-bonheur' || answer === 'chat porte bonheur' || answer === 'chat bonheur' || answer === 'chat qui attire la fortune' || answer === 'chat bonne fortune' || answer === 'chat fortune') {
                alert("Et comment appelle t-on un chat porte-bonheur en japonais ?");

        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });

    // ENIGME__________6 ==> 7
    $('#submitBtn6').click(function() {
        var answer = $('#answer6').val().toLowerCase().trim();      
        if (answer === 'cité universitaire internationale' || answer === 'cite universitaire internationale' || answer === 'cité internationale' || answer === 'cite internationale' || answer === 'cité universitaire' || answer === 'cite universitaire') {
            alert("Le temps presse, rendez-vous à Cité universitaire.");
            $('.enigme6').hide();
            $('.enigme7').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map7').setView([48.81933370385988, 2.3374910938355384], 16);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
            // Marqueur 3
            var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");
            // Marqueur 4
            var marker4 = L.marker([48.866303882376556, 2.3355447311286803]).addTo(maps).bindPopup("<p>Maneki-neko</p>");

            //Polygone de recherche
            var coordonnees = [[48.82205732641635, 2.330398004503359],[48.819699931191415, 2.341361745761767],[48.819324639528546, 2.344475180594848],[48.817377399589326, 2.3439038945998005],[48.816871135798614, 2.3433769961871387],[48.81675806187432, 2.342627653583968],[48.81700290526825, 2.33830472909499],[48.81694163481749, 2.3365224231190496],[48.81790946707593, 2.334311840948889],[48.8186248275081, 2.333111495820279],[48.81888423011517, 2.332083607392881],[48.81961823617016, 2.329349499736906]];
            var polygon = L.polygon(coordonnees, {color: 'red',"opacity": 0.5, fillColor: '#f04', fillOpacity: 0.2}).addTo(maps).bindPopup("<p>Zone de recherche</p>");

        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });

    // ENIGME__________7 ==> 8
    $('#submitBtn7').click(function() {
        var answer = $('#answer7').val().toLowerCase().trim();      
        if (answer === 'tsugouharu foujita' || answer === 'leonard foujita' || answer === 'foujita' ) {
            alert('Vous êtes sur la bonne voie, continuez comme ça ! Allez au point suivant en vous arrêtant Porte de Choisy.');
            $('.enigme7').hide();
            $('.enigme8').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map8').setView([48.823710672378155, 2.361888866008242], 18);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
            // Marqueur 3
            var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");
            // Marqueur 4
            var marker4 = L.marker([48.866303882376556, 2.3355447311286803]).addTo(maps).bindPopup("<p>Maneki-neko</p>");
            // Marqueur 5
            var marker5 = L.marker([48.81898849931225, 2.341928469140332]).addTo(maps).bindPopup("<p>Tsugouharu Foujita</p>");
            //Cercle 6
            var circle = L.circle([48.823710672378155, 2.361888866008242], {
                color: 'red',
                "opacity": 0.5,
                fillColor: '#f04',
                fillOpacity: 0.2,
                radius: 75
            }).addTo(maps);
            circle.bindPopup("<p>Zone de recherche</p>").openPopup();
        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });


    // ENIGME__________8 ==> 9
    $('#submitBtn8').click(function() {
        var answer = $('#answer8').val().toLowerCase().trim();      
        if (answer === 'un portail' || answer === 'portail' || answer === 'un portillon' || answer === 'portillon' || 
        answer === 'une porte' || answer === 'porte' || answer === 'une arche' || answer === 'arche' || 
        answer === 'un torii' || answer === 'torii' || answer === 'un porche' || answer === 'porche' || 
        answer === 'un arc' || answer === 'arc' || answer === 'une entrée' || answer === 'entrée' || 
        answer === 'un entree' || answer === 'entree' || answer === 'une sortie' || answer === 'sortie') {
            alert("Ne perdons pas de temps et passons à l'étape suivante.");
            $('.enigme8').hide();
            $('.enigme9').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map9').setView([48.83927218768536, 2.3895515317943543], 14);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
            // Marqueur 3
            var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");
            // Marqueur 4
            var marker4 = L.marker([48.866303882376556, 2.3355447311286803]).addTo(maps).bindPopup("<p>Maneki-neko</p>");
            // Marqueur 5
            var marker5 = L.marker([48.81898849931225, 2.341928469140332]).addTo(maps).bindPopup("<p>Tsugouharu Foujita</p>");
            // Marqueur 6
            var marker6 = L.marker([48.82377095968572, 2.362109342001792]).addTo(maps).bindPopup("<p>Tsugouharu Foujita</p>");

            //Polygone complexe, zone recherche a partir de donnees geojson 
            var coordonnees = new XMLHttpRequest();
            coordonnees.onreadystatechange = () => {
                if(coordonnees.readyState == 4){
                    if(coordonnees.status == 200){
                        //Chargement du fichier geojson
                        var geojson = JSON.parse(coordonnees.responseText);
                        var geojsonLayer = L.geoJSON(geojson, {
                            style: {
                                "color": "red", // couleur bordure
                                "opacity": 0.5, // opacite bordure
                                "fillColor": "red", // couleur dans le polygone
                                "fillOpacity": 0.2 // opacite couleur du polygone
                            }
                        }).addTo(maps);
                        geojsonLayer.bindPopup("<p>Zone de recherche</p>")
                    }else{
                        console.log(coordonnees.statusText);
                    }
                }
            }
            coordonnees.open("GET", "12.geojson", true);
            coordonnees.send(null); 

        } else {
            alert("Ce n'est pas la bonne réponse. Si vous avez saisie plusieurs mots, sachez que la reponse tient en un mot.");
        }
    });


    // ENIGME__________9 ==> 10
    $('#submitBtn9').click(function() {
        var answer = $('#answer9').val().toLowerCase().trim();      
        if (answer === 'bois de vincennes' || answer === 'bois vincennes' || answer === 'parc de vincennes' || answer === 'parc vincennes' || answer === 'vincennes') {
            alert("Vous touchez au but ! Destination Porte Dorée.");
            $('.enigme9').hide();
            $('.enigme10').show();

            //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
            var maps = L.map('map10').setView([48.829998402295864, 2.412757491079443], 15);
            
            //Chargement des Tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(maps);

            // Marqueur 1
            var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
            // Marqueur 2
            var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
            // Marqueur 3
            var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");
            // Marqueur 4
            var marker4 = L.marker([48.866303882376556, 2.3355447311286803]).addTo(maps).bindPopup("<p>Maneki-neko</p>");
            // Marqueur 5
            var marker5 = L.marker([48.81898849931225, 2.341928469140332]).addTo(maps).bindPopup("<p>Tsugouharu Foujita</p>");
            // Marqueur 6
            var marker6 = L.marker([48.82377095968572, 2.362109342001792]).addTo(maps).bindPopup("<p>Porte</p>");

            //Polygone de recherche
            var coordonnees = [[48.834785452746075, 2.4081743603111847],[48.83363439627337, 2.412743235831874],[48.83227890507482, 2.415609631397564],[48.830416469648426, 2.4180853877000534],[48.82869770161304, 2.4192689962853016],[48.827032830185814, 2.4193420520920657],[48.82422292594388, 2.4196571504551403],[48.82494450873935, 2.416205730819738],[48.82483080471305, 2.4125170281696557],[48.82533203670309, 2.409889056545016],[48.827405227242146, 2.406571111058599],[48.829844909833845, 2.4043126902449834],[48.8320493834143, 2.403879285356186],[48.83340660677151, 2.406111867217001]];
            var polygon = L.polygon(coordonnees, {color: 'red',"opacity": 0.5, fillColor: '#f04', fillOpacity: 0.2}).addTo(maps).bindPopup("<p>Zone de recherche</p>");

        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });


    // ENIGME__________10 ==> DRAMA
    $('#submitBtn10').click(function() {
        var answer = $('#answer10').val().toLowerCase().trim();      
        if (answer === "de l'eau" || answer === "l'eau" || answer === "eau" ) {
            alert("Enfin !");
            $('.enigme10').hide();
            $('.drama').show();

        } else {
            alert('Désolé, mauvaise réponse. Essayez à nouveau !');
        }
    });


    // ENIGME__________DRAMA ==> 11
    $('#continue').click(function() {
            $('.drama').hide();
            $('.enigme11').show();

        //Utilisation de Leaflet pour initialisation de la carte OpenStreetmap, zoom par defaut de 20.
        var maps = L.map('map11').setView([48.84755824952425, 2.3269535673575397], 12);
                    
        //Chargement des Tuiles
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 11,
            maxZoom: 20
        }).addTo(maps);

        // Marqueur 1 Albert-Khan
        var marker1 = L.marker([48.84145254895848, 2.228976272502428]).addTo(maps).bindPopup("<p>48°50'29.2''N 2°13'44.3''E</p>");
        // Marqueur 2 Maison de la culture du Japon
        var marker2 = L.marker([48.85479845316118, 2.2896411281007008]).addTo(maps).bindPopup("<p>Kyoto</p>");
        // Marqueur 3 Cernuschi
        var marker3 = L.marker([48.879757887377316, 2.3124390370523407]).addTo(maps).bindPopup("<p>Musée Cernuschi</p>");
        // Marqueur 4 Rue St Anne
        var marker4 = L.marker([48.866303882376556, 2.3355447311286803]).addTo(maps).bindPopup("<p>Maneki-neko</p>");
        // Marqueur 5 Pavillon du Japon
        var marker5 = L.marker([48.81898849931225, 2.341928469140332]).addTo(maps).bindPopup("<p>Tsugouharu Foujita</p>");
        // Marqueur 6 Arche
        var marker6 = L.marker([48.82377095968572, 2.362109342001792]).addTo(maps).bindPopup("<p>Porte</p>");
        // Marqueur 7 Statue Vincennes
        var marker7 = L.marker([48.82906840806047, 2.4137365894110454]).addTo(maps).bindPopup("<p>Eau</p>");

        //La grande vague de Kanagawa
        var coordonnees = [[48.84145254895848, 2.228976272502428], // Albert-Khan
        [48.844250, 2.249889],
        [48.848556, 2.262167],
        [48.847750, 2.272583],
        [48.85479845316118, 2.2896411281007008], // Maison de la culture du Japon
        [48.864639, 2.293556],
        [48.875889, 2.303167],
        [48.879757887377316, 2.3124390370523407], // Musee Cernuschi
        [48.882889, 2.324222],
        [48.880472, 2.335056],
        [48.880417, 2.340444],
        [48.875778, 2.348222],
        [48.874361, 2.355389],
        [48.869028, 2.355583],
        [48.865639, 2.347056],
        [48.866303882376556, 2.3355447311286803], // Rue St-Anne
        [48.856306, 2.331694],
        [48.834444, 2.332639],
        [48.81898849931225, 2.341928469140332], // Pavillon du Japon
        [48.82377095968572, 2.362109342001792], // Porte Chinoise
        [48.82906840806047, 2.4137365894110454], // Statue Vincennes
        [48.814556, 2.413917],
        [48.812944, 2.229889]
    ];
        var polygon = L.polygon(coordonnees, {color: 'blue',"opacity": 0.6, fillColor: '#blue', fillOpacity: 0.2}).addTo(maps);
    });


    // ENIGME__________11 ==> end
    $('#submitBtn11').click(function() {
        var answer = $('#answer11').val().toLowerCase().trim();      
        if (answer === 'h' || answer === 'katsushika hokusai' || answer === 'hokusai') {
            alert("Félicitations, vous avez réussi !");
            $('.enigme11').hide();
            $('.end').show();

        } else if (answer === "l'o" || answer === 'o') {
            alert("C'est exacte, le texte est un lipogramme. Donc l'élément que l'on cherche est...");

        } else {
            alert('Pas encore la bonne réponse, mais ne baissez pas les bras. La solution est à portée de main !');
        }
    });


    // Fin du jeu retour a la page d'accueil
    $('#end').click(function() {
        window.location.href = 'index.html';
    });
});


