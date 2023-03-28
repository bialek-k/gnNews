export const Information = () => {
  return (
    <div className="flex flex-col gap-3 text-justify">
      <h2 className="font-bold">Tak, wydaje się, że to już koniec...</h2>
      <p>
        ...tej krótkiej aczkolwiek super przygody z pisaniem apki według
        specyfikacji podanej w opisie zdania :) Opowiem kilka słów na temat jej
        powstania: Mam nadzieję, że design aplikacji chociaż o krok odstaje od
        konara ciosanego tępym scyzorykiem.
      </p>
      <p>
        mam nawet na to <strong> figmę </strong>
        <br />
        <a
          target="_blank"
          className="text-blue-500"
          href={
            "https://www.figma.com/file/I2VGFaWo9MM2hr8GEZ3o1J/gnNews?node-id=0%3A1&t=70lorFbKS6erUcPV-1"
          }
        >
          https://www.figma.com/file/I2VGFaWo9MM2hr8GEZ3o1J/gnNews?node-id=0%3A1&t=70lorFbKS6erUcPV-1
        </a>
      </p>
      <p>
        {" "}
        Zdecydowałem się już na samym początku pójść według Waszej propozycji
        jeśli chodzi o api do pobierania newsów i dzięki temu mogłem zmierzyć
        się z kilkoma problemami, które nie występowałyby w innych api (jakie na
        końcu zacząłem sprawdzać). Przede wszystkim ciekawym tematem dla mnie
        było to, że nie każdy news posiada zdjęcie i to niezależnie od tego czy
        jest to news pochodzący z endpointu: /everything czy /top-headlines.
        Początkowo chciałem użyć zdjęcia zaciąganego z assetów, ale paskudnie
        wyglądała jedna fotografia powielana x ilość artykułów więc zdecydowałem
        się na napisanie funkcji, która będzie pobierała zdjęcie wszędzie tam,
        gdzie nie dostajemy go z api. Użyłem do tego{" "}
        <strong>transformResponse</strong> w RTQuery dzięki czemu nie musiałem
        potem kombinować w komponencie tylko od razu dostawałem odpowiednie dane
        do pokazania.
      </p>
      <p>
        Drugim ciekawym problemem / wyzwaniem było dla mnie pobieranie danych z
        odpowiedniego endpointu w zależności od tego, na jakim url się
        znajdujemy, i może nie powinienem tego mówić podczas ubiegania się o
        pracę, ale troszkę się z tym zamotałem. Kombinowałem na wszystkie
        sposoby dookoła, zamiast od razu zajrzeć do dokumentacji i po prostu
        wywołać odpowiednią metodę kondycyjnie :) W zasadzie każda linijka kodu
        w tej apce to była raczej dla mnie frajda niż problem. Jeśli występował
        właśnie jakiś problem to nie widziałem w tym “ściany nie do
        przeskoczenia” tylko bardziej możliwości na ogarnięcie jakiegoś tematu,
        którego wcześniej nie ogarniałem.
      </p>
      <p>
        Co do tej ściany, to w zasadzie mam jedną. Testy w react-test-library...
        Podczas testowania komponentów, w których korzystam z{" "}
        <strong>Link</strong> zawsze dostawałem ten error:{" "}
        <strong className="text-red-500">
          TypeError: Cannot destructure property 'basename' of
          'React__namespace.useContext(...)' as it is null.
        </strong>{" "}
        Znalazłem podpowiedzi, że chodzi o "owrapowanie" komponentu App w{" "}
        <strong>BrowserRoute</strong> ale w moim przypadku to nie było to, ale
        bardzo chętnie dowiem się, o co tak na prawdę chodzi
      </p>
      <p>
        Dzięki jeszcze raz za szanse i mam nadzieję, że coś z tego będzie 😀{" "}
      </p>
    </div>
  );
};
