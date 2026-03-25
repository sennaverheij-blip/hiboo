import SectionReveal from '../components/SectionReveal';

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <SectionReveal>
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-gray-900">Algemene Voorwaarden</h1>
          <p className="text-sm text-gray-400 mb-12">HiBOO BV &middot; KvK: 95458751 &middot; BTW: NL866727749B01</p>

          <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 1 — Definities</h2>
              <p>1.1. <strong className="text-gray-700">HiBOO:</strong> HiBOO BV, gevestigd in Nederland, ingeschreven bij de Kamer van Koophandel onder nummer 95458751.</p>
              <p className="mt-2">1.2. <strong className="text-gray-700">Deelnemer:</strong> De natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met HiBOO voor het afnemen van diensten.</p>
              <p className="mt-2">1.3. <strong className="text-gray-700">Diensten:</strong> Alle door HiBOO aangeboden trainingen, cursussen, coaching, digitale producten en overige diensten.</p>
              <p className="mt-2">1.4. <strong className="text-gray-700">Overeenkomst:</strong> Elke afspraak of overeenkomst tussen HiBOO en de Deelnemer waarvan deze Algemene Voorwaarden integraal onderdeel uitmaken.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 2 — Toepasselijkheid</h2>
              <p>2.1. Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten en diensten van HiBOO.</p>
              <p className="mt-2">2.2. Afwijkingen van deze voorwaarden zijn slechts geldig indien uitdrukkelijk schriftelijk overeengekomen.</p>
              <p className="mt-2">2.3. Door het afnemen van diensten van HiBOO verklaart de Deelnemer akkoord te gaan met deze Algemene Voorwaarden.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 3 — Diensten</h2>
              <p>3.1. HiBOO biedt online trainingen en educatieve programma's aan op het gebied van online ondernemerschap en digitale verdienmodellen.</p>
              <p className="mt-2">3.2. HiBOO spant zich in om de diensten naar beste inzicht en vermogen uit te voeren, conform de eisen van goed vakmanschap.</p>
              <p className="mt-2">3.3. HiBOO garandeert niet dat de Deelnemer bepaalde resultaten zal behalen. Resultaten zijn afhankelijk van individuele inspanning en omstandigheden.</p>
              <p className="mt-2">3.4. HiBOO behoudt zich het recht voor om de inhoud van haar programma's aan te passen en te verbeteren.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 4 — Betalingen</h2>
              <p>4.1. Alle genoemde prijzen zijn in euro's en inclusief BTW, tenzij anders vermeld.</p>
              <p className="mt-2">4.2. Betaling dient te geschieden binnen de afgesproken termijn via de door HiBOO aangeboden betaalmethoden.</p>
              <p className="mt-2">4.3. Bij niet-tijdige betaling is de Deelnemer van rechtswege in verzuim en is HiBOO gerechtigd de toegang tot de diensten op te schorten.</p>
              <p className="mt-2">4.4. Eventuele betalingsregelingen worden uitsluitend schriftelijk overeengekomen.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 5 — Aansprakelijkheid</h2>
              <p>5.1. HiBOO is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of gemiste besparingen.</p>
              <p className="mt-2">5.2. De aansprakelijkheid van HiBOO is in alle gevallen beperkt tot het bedrag dat door de Deelnemer is betaald voor de betreffende dienst.</p>
              <p className="mt-2">5.3. HiBOO is niet aansprakelijk voor schade die het gevolg is van het handelen of nalaten van de Deelnemer op basis van de aangeboden informatie.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 6 — Privacy</h2>
              <p>6.1. HiBOO verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</p>
              <p className="mt-2">6.2. Persoonsgegevens worden uitsluitend gebruikt voor het uitvoeren van de overeenkomst en worden niet zonder toestemming gedeeld met derden.</p>
              <p className="mt-2">6.3. De Deelnemer heeft recht op inzage, correctie en verwijdering van persoonsgegevens door contact op te nemen met HiBOO.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Artikel 7 — Toepasselijk recht</h2>
              <p>7.1. Op alle overeenkomsten tussen HiBOO en de Deelnemer is Nederlands recht van toepassing.</p>
              <p className="mt-2">7.2. Geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter in het arrondissement waar HiBOO is gevestigd.</p>
              <p className="mt-2">7.3. Indien enige bepaling van deze voorwaarden nietig of vernietigbaar blijkt, blijven de overige bepalingen onverminderd van kracht.</p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
