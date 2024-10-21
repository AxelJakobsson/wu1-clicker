# Titel: Rymdkolonisering

## Inledning: 
 Spelet är ett clicker-spel där man klickar tills man kan börja köpa några uppgraderingar. Spelet går ut på att man har fyra olika byggnader som man kan bygga, byggnaderna förutom den första bygger byggnaden som är innan. Den första byggnaden producerar resurser. 

T.ex: 1 Industrial Generator, 8 Factories, 100 Robothelpers, efter ett tick => 
+1 (från industrial generators) factories, +8 (från factories) robothelpers


## Bakgrund
 Syftet med att göra det här klicker-spelet var att få en grundläggande förståelse för hur javascript fungerar. 

## Mitt mål med spelet var att ha:
✔ Olika resurser (metall, energi, krystaller) <br>

✔ Byggnader som producerar tidigare byggnaden. <br>

❌ Uppgraderingar som kostar olika mycket resurser och har olika branches att gå ut till  (dålig planering av tid, hade inte tid)<br>

❌ Ett rebirth system där man kan starta om och bli starkare beroende på hur långt man hade kommit (hade inte tid).

    Man hade försökt invadera en annan planet och man vet inte exakt hur många robot helpers man behöver, ifall man lyckas så låser man upp en ny planet med nya resurser och byggnader. Ifall man misslyckades så startar man om från början med en boost. (hade inte tid)

❌ Ha en tickspeed uppgradering så att all produktion i spelet går snabbare (spelet laggade för mycket med tickspeed uppgradering när den blev låg nog ~500ms, så jag gjorde så att vid varje achievement man får så går tick speeden ner lite grann så att man har ett incentive för att gå för achievements.)<br>

❌ Manual purchases multiplier, varje manual purchase så multipliceras den byggnadens produktion x2 (hade inte tagit lång tid alls men jag gjorde det inte för att det kändes för obalanserat, istället så blir sin clicking power lite bättre för varje manual robot helper.)<br>



### Ett problem:
Ett problem jag hade var med min resource generation när man klickade och man hade auto produktionen, för att lösa det så gjorde jag två olika funktioner som betedde sig lite annorlunda. 

## Positiva erfarenheter
Lärt mig mer om hur Javascript fungerar och hur man kan interagera med html och css. 
Lärt mig om inbyggda funktioner i js
Tycker att mitt system blev rätt så bra med byggnaderna
Fick till lite “juice” till min knapp, den bouncar lite och man får upp en notifikation som visar vilken resurs man fick

## Negativa erfarenheter
Jag planerade tiden lite sämre än vad jag hade tänkt, var kanske lite väl ambitiös med hur mycket jag hade haft tid att lägga till. 
Spelet känns inte så jätte roligt då det inte är så mycket att göra och balansen är inte balanserad alls. 
Inte jätte responsivt, hade nog kunnat fixa det ifall jag hade spenderat lite mer tid på det. 
Ändrade inte layouten eller “looken” på spelet så mycket som jag nog borde ha gjort, jag tillbringade för mycket tid på js koden. 
Fick inte uppgraderingskostnaderna att formattera sig, så uppgraderings korten ser lite whack ut när kostnaden kommer upp i högre siffror. 

## Sammanfattning
All in all så tror jag att det här projektet har gått rätt så bra. Det finns många improvements som jag hade kunnat göra men med tiden spenderat på spelet så känns det som att det har gått rätt så bra. Min grund-vision av spelet är ungefär så som jag hade tänkt mig, jag har lärt mig mer av js, css och html. 