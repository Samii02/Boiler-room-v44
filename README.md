# Boiler-room-v44

Boiler Room Vecka 44: Bygg en To-Do Applikation
Tema
Den här veckan kommer ni att tillämpa era kunskaper om arrayer, objekt och funktioner genom att bygga en interaktiv To-Do applikation i JavaScript.

Projektbeskrivning
Uppgift:
Skapa en enkel To-Do applikation där användaren kan:
Lägga till nya uppgifter.
Visa alla aktuella uppgifter.
Markera uppgifter som klara.
Ta bort uppgifter.
Använd arrayer för att lagra listan av uppgifter.
Varje uppgift ska representeras som ett objekt med egenskaper som id, beskrivning, klar (boolean).
Använd funktioner för att strukturera koden och hantera olika operationer.
Implementera ett menybaserat gränssnitt i konsolen för användarinteraktion.
Förklaring för sista punkten:

Att implementera ett menybaserat gränssnitt i konsolen innebär att ni skapar en interaktiv meny som visas för användaren i konsolen (terminalen eller webbläsarens utvecklarkonsol). Genom denna meny kan användaren interagera med ert program genom att välja olika alternativ. Användaren gör sina val genom att ange ett kommando eller ett nummer som motsvarar ett menyval, och programmet utför sedan en specifik funktion baserat på det valet.
Varför använda ett menybaserat gränssnitt i konsolen?
Enkelt och effektivt: Det är ett enkelt sätt att interagera med användaren utan att behöva bygga ett grafiskt användargränssnitt (GUI).
Fokus på logik: Ni kan fokusera på programmets funktionalitet och logik snarare än design och GUI-element.
Lärorikt: Det hjälper er att förstå hur man hanterar användarinmatning, kontrollflöde och programstruktur.
Plattformsoberoende: Konsolapplikationer kan köras på de flesta system utan ytterligare krav.


Krav för Projektet
Grundläggande Funktionalitet
Meny för Användarval:
Applikationen ska visa en meny med följande alternativ:
1: Lägg till en ny uppgift.
2: Visa alla uppgifter.
3: Markera en uppgift som klar.
4: Ta bort en uppgift.
5: Avsluta programmet.
Använd en loop för att fortsätta visa menyn tills användaren väljer att avsluta.
Användning av Arrayer och Objekt:
Lagra uppgifterna i en array.
Varje uppgift ska vara ett objekt med minst följande egenskaper:
id (unik identifierare)
beskrivning (text)
klar (boolean)
Funktioner:
Använd funktioner för att:
Lägga till en ny uppgift.
Visa uppgifterna.
Markera en uppgift som klar.
Ta bort en uppgift.
Generera ett unikt id för varje uppgift.
Användarinteraktion:
Använd prompt() för att ta emot användarens val och inmatning.
Använd console.log() för att visa information i konsolen.
Använd till exempel: Alert för att visa information i till användaren, andra sätt är godkända också, låt kreativen flöda.
Hantera ogiltiga inmatningar på ett användarvänligt sätt.
Utökad Funktionalitet (Frivilligt men Uppmuntras)
Spara Uppgifterna Mellan Sessioner:
Använd localStorage för att spara uppgifterna så att de finns kvar när sidan laddas om (fungerar i webbläsaren).
Sortera Uppgifterna:
Lägg till funktionalitet för att sortera uppgifterna baserat på om de är klara eller inte, eller efter skapelsedatum.
Redigera Uppgifter:
Ge användaren möjlighet att ändra beskrivningen av en uppgift.
Sökfunktion:
Implementera en funktion som låter användaren söka efter uppgifter baserat på sökord.
Användning av Arrow Functions och Anonyma Funktioner:
Använd arrow functions där det är lämpligt för att göra koden mer koncis.
Kategorier och Taggar
Användare kan organisera uppgifter i olika kategorier eller projekt.
Lägg till möjligheten att tagga uppgifter med nyckelord.
Sortering
Låt användaren sortera uppgifter efter datum, prioritet eller namn.
Återkommande Uppgifter
Implementera funktionalitet för att skapa återkommande uppgifter (dagligen, veckovis, månadsvis).
Prioriteringar och Deadline
Lägg till prioriteringsnivåer (hög, medel, låg) för uppgifter.
Lägg till deadlines och påminnelser för uppgifter.
Implementera färgkodning eller symboler baserat på prioritet och deadline.

Anvisningar för Grupparbetet
Planering:
Strukturera Koden:
Diskutera inom gruppen hur ni vill strukturera er kod med funktioner och moduler.
Bestäm vilka funktioner ni behöver och hur de ska interagera.
Fördelning av Arbetsuppgifter:
Dela upp uppgifterna baserat på gruppmedlemmarnas styrkor och intressen.
Till exempel kan en person fokusera på användargränssnittet medan en annan arbetar med datahantering.
Samarbete:
Versionshantering:
Använd Git och GitHub för att samarbeta effektivt.
Skapa en ny gren för detta projekt.
Kommunikation:
Ha regelbundna avstämningar för att säkerställa att alla är på samma spår.
Använd kommunikationsverktyg som Slack eller Discord.
Dokumentation:
Kommentera Koden:
Använd kommentarer för att förklara funktioner och komplex logik.
Användarinstruktioner:
Skriv en kort guide om hur applikationen används.
Beskriv eventuella speciella funktioner eller begränsningar.


KOM IHÅG!: ”Ledarrollen“ Stina har tagit upp, fråga henne vars den informationen finns och vart ni ska fylla i vem som har den rollen

Presentation
Datum och Tid:
Presentationerna sker på måndag vecka 45 under lektionstid.
OBS! ALLA i gruppen ska vara aktiva delaktiga i presentationen!
Innehåll:
Demonstration av Applikationen:
Visa hur To-Do applikationen fungerar.
Gå igenom de funktioner ni har implementerat.
Förklaring av Koden:
Beskriv hur ni har använt arrayer, objekt och funktioner.
Diskutera hur ni har strukturerat koden och varför.
Utmaningar och Lärdomar:
Diskutera eventuella problem ni stötte på och hur ni löste dem.
Dela med er av vad ni har lärt er under projektet.
Presentationslängd:
Varje grupp har max 15 minuter och minst 7 minuter för sin presentation.

Inlämning
Källkoden ska lämnas in före måndagens lektion vecka 45.
Skicka er kod till kursansvarig och ladda upp den på en gemensam plattform som GitHub.

Tips och Riktlinjer
Testa Koden:
Testning:
Testa varje funktion noggrant för att säkerställa att den fungerar korrekt.
Testa felhantering genom att ange ogiltiga värden.
Felsökning:
Använd console.log() för att spåra variabler och programflöde.
Var uppmärksam på eventuella felmeddelanden och försök förstå vad de betyder.
Användarvänlighet:
Tydliga Meddelanden:
Ge användaren klara instruktioner och feedback.
Hantera fel på ett användarvänligt sätt.
Validering:
Kontrollera att användarens inmatning är giltig innan du utför operationer.
Be om ny inmatning vid fel istället för att avsluta programmet.
Kodstruktur och Kvalitet:
Funktioner:
Bryt ner koden i mindre funktioner för att göra den mer hanterbar.
Se till att varje funktion har ett tydligt syfte.
Namngivelser:
Använd beskrivande och konsekventa array/object och functions namn.
Undvik förkortningar som kan vara förvirrande.
Kommentarer:
Kommentera koden där det behövs för att förklara komplex logik eller beslut.
Kreativitet:
Extra Funktioner:
Känn er fria att lägga till extra funktioner som ni tror skulle förbättra applikationen.
Tänk på användarupplevelsen och hur ni kan göra programmet mer intuitivt.


Lycka till med ert projekt! Om ni har några frågor eller behöver hjälp, tveka inte att kontakta mig.

Genom att bygga denna To-Do applikation kommer ni att få praktisk erfarenhet av att använda arrayer, objekt och funktioner tillsammans. Detta kommer att hjälpa er att förstå hur dessa koncept samverkar för att skapa mer komplexa och användbara program.

