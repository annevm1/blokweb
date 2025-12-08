# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Anne van Mill 

  #### Je startniveau:
  Blauw (kies uit zwart, rood óf blauw)

  #### Je focus:
  Responsive (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
      <link rel="thebodyshop" href="https://thebodyshop.nl/" />
  #### Screenshot(s) van de eerste pagina (small screen): 
  <img src="readme-images/bodyshophomepagina.png" width="375px" alt="homepagina bodyshop">

  #### Screenshot(s) van de tweede pagina (small screen):
  <img src="readme-images/paginamaken.png" width="375px" alt="winkelwagen">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/bodyshophomepagina.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

link naar figma breakdown schets geheel 

  <link rel="figma breakdown" href="https://www.figma.com/proto/99cxJ3oCvlksaJLmzPMKTp/FED-break?node-id=0-1&t=LPtRHy2lMBXBFXcU-1" />

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Over het algemeen gaat het coderen best goed. Wel heb ik geprobeerd om een hamburgermenu te maken, dit ging nog niet goed dus ik ben eerst bezig met het samenstellen van mijn HTML-code en daarbij alvast wat CSS te maken. 
  


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

  Wat wil ik vragen tijdens het voortgangsgesprek?
  - Ziet de code er semantisch correct uit?
  - Hoe website goed op GitHub zetten?



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Code goed opstellen met spaties -> Prettier gebruiken
  - Breakdown schets gedetailleerder maken -> alle elementen erin zetten
  - Toegankelijkheidstest uitwerken
  - Minder classes gebruiken -> elementen aanroepen in css niet door aparte classes, geef section een klas maar roep de verschillende elementen apart aan -> wordt overzichtelijker 

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken

 -  Minder classes gebruikt -> nog te veel?
 - Met wat hulp van Ivo heb ik de carousel kunnen maken zoals ik wil dus dat gaat goed. Ik ben nogsteeds bezig met het hamburgermenu maken, dat is nog niet gelukt. Het linken van de extra pagina gaat goed.
 - Ik wil onder alle cirkels de titels van de producten zetten, ik weet nog niet hoe ik dit ga doen. 
 - Ook is mijn website niet over heel de breedte als je uitzoomt, dit wil ik aanpassen. 


  ### Agenda voor meeting
  samen met je groepje opstellen


  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

Wat wil ik vragen tijdens het voortgangsgesprek?
- HTML code doornemen en kijken of alles klopt (kloppen de classes, sections en divs, gebruik van h1 etc goed?)

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Kijken naar de H1 en H2, teveel gebruik gemaakt van H, alle H moet een H2 worden 
  - Alleen de section met de info over gratis verzending kopjes mogen H3 worden
  - Maak een transparante H1 als titelpagina maar zorg ervoor dat hij niet zichtbaar is in de website maar wel voor een screenreader 
  - Cirkelclasses kunnen weg en kunnen aangeroepen worden als .items img

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Op dit moment ben ik bezig met het responsive maken van mijn website, ik heb de afbeeldingen met een mediaquery erin gezet zodat deze verschuiven bij verschillende formaten. Ook de carousel met producten schuiven mee. Daarnaast heb ik in mijn HTML-code de lijst met producten en de cirkels veranderd naar <Li> ipv losse divs en p'tjes. Ook heeft Ivo mij gehoplen om de namen onder de cirkels te krijgen en dat deze naar de productpagina leiden als je erop klikt.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

Wat wil ik vragen tijdens het voortgangsgesprek? 
- Is de content genoeg op de website?
- Is de code correct?
- De eerste lijst met <li> items heeft geen <ul> omdat als ik deze toevoeg verschuiven de items, hoe los ik dit op?
- Hoe hamburger menu maken?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Javascript link buiten de <footer> plaatsen
  - <ul> om de eerste lijst met <li> zetten door de class om de <ul> te zetten en niet om de section
  - Om de juiste fonts te krijgen die worden gebruikt op de officiele website moet ik kijken bij Inspecteren -> Network. En dan de juiste fonts downloaden en de link in html zetten
  - Code van de hamburger opdracht op de FED Dlo pagina nog een keer proberen

</details>


## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>