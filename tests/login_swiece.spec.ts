import { test, expect } from '@playwright/test';

// test('Test_ID_01 Przejście do głównej strony + pierwsza poprawna rejestracja usera', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByRole('link', { name: 'Zarejestruj się' }).click();
//   await page.getByRole('textbox', { name: 'Adres e-mail Wymagane' }).click();
//   await page.getByRole('textbox', { name: 'Adres e-mail Wymagane' }).fill('yosek89519@cristout.com');
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click({button: 'right'});
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('TestD44testowy22!');
//   await page.getByRole('button', { name: 'Zarejestruj się' }).click();
//   await page.goto('https://woskiknot.pl/my-account/');
//   //await page.getByRole('heading', { name: 'Moje Konto' }).click();

  // test('Test_ID_02 Sprawdzenie pola obowiązkowego Adres e-mail przy rejestracji', async ({ page }) => {
  // await page.goto('https://woskiknot.pl/');
  // await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
  // await page.getByRole('link', { name: 'Zarejestruj się' }).click();
  // await page.locator('#et-register-form').getByText('Hasło *Wymagane').click();
  // await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('TestD44testowy22!');
  // await page.getByRole('button', { name: 'Zarejestruj się' }).click();

//   test('Test_ID_03 Sprawdzenie pola obowiązkowego Hasło przy rejestracji', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByRole('link', { name: 'Zarejestruj się' }).click();
//   await page.getByText('Adres e-mail *Wymagane', { exact: true }).click();
//   await page.getByRole('textbox', { name: 'Adres e-mail Wymagane' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('button', { name: 'Zarejestruj się' }).click();

//   test('Test_ID_04 Pierwsze logowanie usera po rejestracji', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByText('Nazwa użytkownika lub adres e').click();
//   await page.getByRole('textbox', { name: 'Nazwa użytkownika lub adres e' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click();
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('TestD44testowy22!');
//   await page.getByRole('button', { name: 'Zaloguj się' }).click();
//   await page.getByRole('heading', { name: 'Moje Konto' }).click();
//   await page.getByText('Witaj testowymaild24 (nie jesteś testowymaild24? Wyloguj się) W ustawieniach').click();
// });

// test('Test_ID_05 Sprawdzenie pola obowiązkowego Adres e-mail przy logowaniu', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click();
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('TestD44testowy22!');
//   await page.getByRole('button', { name: 'Zaloguj się' }).click();
//   await page.getByText('Błąd: Nazwa użytkownika jest').click();
// });

// test('Test_ID_06 Sprawdzenie pola obowiązkowego Hasło  przy logowaniu', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByText('Nazwa użytkownika lub adres e').click();
//   await page.getByRole('textbox', { name: 'Nazwa użytkownika lub adres e' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('button', { name: 'Zaloguj się' }).click();
//   await page.getByText('Błąd: pole hasła jest puste.').click();
// });

// test('Test_ID_07 Sprawdzenie checkboxa “Zapamiętaj mnie” w oknie logowania', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByText('Nazwa użytkownika lub adres e').click();
//   await page.getByRole('textbox', { name: 'Nazwa użytkownika lub adres e' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click();
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('TestD44testowy22!');
//   await page.getByRole('checkbox', { name: 'Zapamiętaj mnie' }).check();
//   await page.getByRole('button', { name: 'Zaloguj się' }).click();
//   await page.getByRole('heading', { name: 'Moje Konto' }).click();
//   await page.getByRole('paragraph').filter({ hasText: 'Witaj testowymaild24 (nie' }).click();
//   await page.getByText('Witaj testowymaild24 (nie jesteś testowymaild24? Wyloguj się) W ustawieniach').click();
// });

// test('Test_ID_08 User resetuje hasło poprzez kliknięcie w “Nie pamiętasz hasła?”', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByRole('link', { name: 'Nie pamiętasz hasła?' }).click();
//   await page.getByRole('heading', { name: 'Zapomniane hasło' }).click();
//   await page.getByText('Zapomniane hasło? Proszę').click();
//   await page.getByText('Nazwa użytkownika lub adres e').click();
//   await page.getByRole('textbox', { name: 'Nazwa użytkownika lub adres e' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('button', { name: 'Zresetuj hasło' }).click();
//   await page.getByRole('heading', { name: 'Zapomniane hasło' }).click();
//   await page.getByText('Wysłano e-mail do').click();
//   await page.getByText('E-mail z linkiem do').click();
// });

// test('Test_ID_09 Podgląd hasła za pomocą ikony oka', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
//   await page.getByText('Nazwa użytkownika lub adres e').click();
//   await page.getByRole('textbox', { name: 'Nazwa użytkownika lub adres e' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click();
//   await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('TestD44testowy22!');
//   await page.getByRole('button', { name: 'Pokaż hasło' }).click();
//   await page.getByRole('button', { name: 'Ukryj hasło' }).click();
//   await page.getByRole('button', { name: 'Zaloguj się' }).click();
//   await page.getByRole('heading', { name: 'Moje Konto' }).click();
//   await page.getByRole('paragraph').filter({ hasText: 'Witaj testowymaild24 (nie' }).click();
//   await page.getByText('Witaj testowymaild24 (nie jesteś testowymaild24? Wyloguj się) W ustawieniach').click();
//   await page.getByRole('link', { name: 'Moje Konto' }).click();
//   await page.getByRole('link', { name: 'Wyloguj się' }).click();


// test('Test_ID_10 Podanie poprawnego adresu e-mail do newslettera', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.getByRole('heading', { name: '💌 Newsletter' }).click();
//   await page.getByText('Podaj swój adres e-mail, jeż').click();
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('testowymaild24@gmail.com');
//   await page.getByRole('button', { name: 'Zapisz' }).click();
//   await page.getByRole('heading', { name: 'Już prawie gotowe!' }).click();
//   await page.getByText('Potwierdź swój zapis klikając').click();
// });

// test('Test_ID_11 Sprawdzenie opcji wyszukiwania po nazwie ', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   await page.getByRole('link', { name: 'Szukaj' }).click();
//   await page.getByRole('searchbox', { name: 'Szukaj:' }).click();
//   await page.getByRole('searchbox', { name: 'Szukaj:' }).fill('Lemon Cola świeca sojowa');
//   await page.getByRole('link', { name: 'Lemon Cola świeca sojowa Lemon Cola świeca sojowa 69,90 zł' }).click();
//   await page.getByText('Strona główna / ŚWIECE SOJOWE / ŚWIECE BASIC / Lemon Cola świeca sojowaLemon').click();
//   //await page.locator('input[name="products\\[0\\]\\[id\\]"]').check();
//   //await page.locator('input[name="products\\[1\\]\\[id\\]"]').check();
//   await page.locator('ol').getByRole('img', { name: 'Lemon Cola świeca sojowa' }).first().click();
//   await page.locator('ol').getByRole('img', { name: 'Lemon Cola świeca sojowa' }).nth(1).click();
//   await page.locator('ol').getByRole('img', { name: 'Lemon Cola świeca sojowa' }).nth(2).click();
//   await page.locator('ol').getByRole('img', { name: 'Lemon Cola świeca sojowa -' }).click();
//   await page.locator('ol').getByRole('img', { name: 'Lemon Cola świeca sojowa' }).first().click();
//   await page.getByRole('link', { name: 'Next ' }).click();
//   await page.getByRole('link', { name: 'Next ' }).click();
//   await page.getByRole('link', { name: 'Next ' }).click();
//   await page.getByRole('link', { name: 'Next ' }).click();
//   await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
//   await page.getByText('Aktualizowanie... × Lemon').click();
//   await page.getByRole('button', { name: 'Akceptuj wszystko' }).click();
//   await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
//   //await page.getByText('Podsumowanie koszyka Kwota 87').click();
//   //await page.getByRole('link', { name: 'Usuń Pudełko Zapałek <small' }).click();
//   //await page.getByRole('link', { name: 'Usuń Opakowanie Prezentowe na' }).click();
//   await page.getByRole('link', { name: 'Usuń Lemon Cola świeca sojowa' }).click();
//   await page.getByText('Usunięto: „Lemon Cola świeca').click();
//   await page.getByText('Twój koszyk aktualnie jest').click();
//   await page.getByRole('link', { name: 'Wróć do sklepu' }).click();
//   await page.getByText('Strona główna / sklep 187').click();
// });

// test('Test_ID_12 Sprawdzenie działania koszyka w toolbarze', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   await page.getByRole('link', { name: 'Koszyk', exact: true }).click();
//   await page.locator('#side-cart').getByText('Koszyk 0').click();
//   await page.locator('#minicart-panel div').filter({ hasText: 'Brak produktów w koszyku.' }).locator('div').click();
//   await page.getByText('Brak produktów w koszyku.').click();
//   await page.getByRole('link', { name: 'Kontynuować zakupy' }).click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });

// test('Test_ID_13 Sprawdzenie działania ikony side drawer oraz jego ikony X', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   await page.getByRole('button', { name: 'Menu' }).click();
//   await page.locator('#fullscreen-menu div').filter({ hasText: 'ROOM SPRAYNEW ŚWIECE SOJOWE' }).first().click();
//   await page.locator('#fullscreen-menu').getByRole('button', { name: 'Zamknij' }).click();
// });

// test('Test_ID_14 Sprawdzenie działania ikony side drawer oraz jego user icon ', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   await page.getByRole('button', { name: 'Menu' }).click();
//   await page.locator('#fullscreen-menu div').filter({ hasText: 'ROOM SPRAYNEW ŚWIECE SOJOWE' }).first().click();
//   await page.locator('#fullscreen-menu').getByRole('link', { name: 'Logowanie' }).click();
//   await page.locator('.et-form-container').click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });

// test('Test_ID_15 Sprawdzenie działania ikony Facebooka', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   //const page1Promise = page.waitForEvent('popup');
//   await page.getByText('Darmowa Wysyłka od 190 PLN🎁').click();
//   //const page1 = await page1Promise;
//   //await page.getByText('Zezwolić na użycie plików cookie z Facebooka w tej przeglądarce?Używamy plików').click();
// });

// test('Test_ID_16 Sprawdzenie działania ikony Instagrama', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   //const page1Promise = page.waitForEvent('popup');
//   await page.getByText('Darmowa Wysyłka od 190 PLN🎁').click();
//   // page1 = await page1Promise;
//   //await page.getByRole('dialog').locator('div').filter({ hasText: 'JęzykAfrikaansالعربيةČeš' }).nth(2).click();
// });

// test('Test_ID_17 Sprawdzenie działania ikony Pinteresta ', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   //const page1Promise = page.waitForEvent('popup');
//   await page.getByText('Darmowa Wysyłka od 190 PLN🎁').click();
//   //const page1 = await page1Promise;
// });

// test('Test_ID_18 Sprawdzenie działania ikony w postaci tekstu Kontakt', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/sklep/');
//   await page.locator('#menu-item-12443').getByRole('link', { name: 'Kontakt' }).click();
//   await page.getByRole('heading', { name: 'Kontakt' }).click();
//   await page.getByText('Kontakt Chętnie pomożemy i').click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });


//  test('Test_ID_19 Sprawdzenie działania reklamy na stronie głównej i przeniesienie produktu do koszyka', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.getByRole('link', { name: 'znajdz swoj 17 – świece' }).click();
//   await page.getByText('Truskawka & Eukaliptus świeca').click();
//   await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
//   await page.getByRole('button', { name: 'Akceptuj wszystko' }).click();
//   await page.getByRole('link', { name: 'Zamówienie' }).click();
//   await page.getByRole('button', { name: 'Kupuję i płacę' }).click();
//   await page.getByText('Miasto * *Proszę wypełnić wymagane polaKod pocztowy * *Kod pocztowy płatnika').click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });

// test('Test_ID_20 Sprawdzenie widgetu Świece zapachowe i dodanie pierwszej świecy do koszyka', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.getByRole('link', { name: 'DOSTAWA 3 – świece sojowe' }).click();
//   await page.getByRole('heading', { name: 'Świece – wszystkie produkt:' }).click();
//   await page.getByRole('link', { name: 'Świeca Sojowa Na Dzień Mamy' }).first().click();
//   await page.getByLabel('Wybierz Zapach').selectOption('Lawenda & Cedr');
//   await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
//   await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
//   await page.getByRole('link', { name: 'Przejdź do płatności' }).click();
//   await page.getByRole('button', { name: 'Kupuję i płacę' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Proszę wypełnić wymagane pola' }).click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });

// test('Test_ID_21 Sprawdzenie widgetu Woski zapachowe i dodanie pierwszego wosku do koszyka', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.getByRole('link', { name: 'DOSTAWA – świece sojowe Wosk' }).click();
//   await page.getByRole('link', { name: 'Toskańska Winiarnia wosk' }).first().click();
//   await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
//   await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
//   await page.getByRole('radio', { name: 'Paczkomaty InPost: 15,90 zł' }).check();
//   await page.getByText('Paczkomaty InPost: 15,90 zł').click();
//   await page.getByRole('link', { name: 'Przejdź do płatności' }).click();
//   await page.getByRole('button', { name: 'Wybierz z mapy' }).click();
//   await page.getByText('PaczkoPunktInPostDaszyna 36,').click();
//   await page.getByRole('button', { name: 'Wybierz punkt' }).click();
//   await page.getByRole('button', { name: 'Kupuję i płacę' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Proszę wypełnić wymagane pola' }).click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });


// test('Test_ ID_22 Sprawdzenie widgetu Nietuzinkowe puzzle i dodanie pierwszych puzzli do koszyka', async ({ page }) => {
//   await page.goto('https://woskiknot.pl/');
//   await page.getByRole('link', { name: 'DOSTAWA 1 – świece sojowe' }).first().click();
//   await page.getByRole('link', { name: 'CHEETAH puzzle 500 elementów' }).first().click();
//   //await page.getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
//   await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
//   await page.getByRole('radio', { name: 'ORLEN Paczka: 9,90 zł' }).check();
//   await page.getByRole('link', { name: 'Przejdź do płatności' }).click();
//   await page.getByRole('radio', { name: 'ORLEN Paczka: 9,90 zł' }).check();
//   await page.getByRole('button', { name: 'Wybierz z mapy' }).click();
//   await page.getByRole('textbox', { name: 'Wpisz adres' }).click();
//   await page.getByRole('textbox', { name: 'Wpisz adres' }).fill('Tychy');
//   await page.getByText('ORLEN PaczkaGROTA ROWECKIEGO').click();
//   await page.getByRole('button', { name: 'Wybierz punkt' }).click();
//   await page.getByRole('button', { name: 'Dodaj do zamówienia' }).click();
//   await page.getByRole('button', { name: 'Kupuję i płacę' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Proszę wypełnić wymagane pola' }).click();
//   await page.getByRole('link', { name: 'świece sojowe Wosk i Knot' }).click();
// });

//test 23 - blad na stronie podczas kliknięcie Dodaj do koszyka

test('Test_ID_23 Sprawdzenie widgetu ZESTAWY PREZENTOWE na stronie i dodanie zapałek do koszyka', async ({ page }) => {
  await page.goto('https://woskiknot.pl/');
  await page.getByRole('link', { name: 'DOSTAWA 2 – świece sojowe' }).click();
  await page.getByRole('link', { name: 'Zestaw Prezentowy Świeca & Room Spray' }).first().click();
  await page.getByRole('img', { name: 'Zestaw Prezentowy Świeca &' }).nth(3).click();
  //await page.locator('ol').getByRole('img', { name: '<b>Zestaw Prezentowy</b> Świeca & Room Spray - obrazek 3' }).click();
  await page.locator('ol').getByRole('img', { name: '<b>Zestaw Prezentowy</b> Świeca & Room Spray - obrazek 4' }).click();
  await page.getByRole('img', { name: 'Zestaw Prezentowy Świeca &' }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Kocham Cię Mamo - Świeca Sojowa - Lawenda & Cedr$/ }).locator('span').nth(1).click();
  await page.locator('a').filter({ hasText: /^Kocham Cię Mamo - Świeca Sojowa - Lawenda & Cedr$/ }).click();
  await page.locator('#wooco_component_product_select_2 div span').nth(1).click();
  await page.getByText('Jaśminowa Herbata room spray Na stanie').click();
  await page.locator('#wooco_component_product_select_3 span').nth(1).click();
  await page.getByRole('listitem').filter({ hasText: 'Tak, chce wstążkę +6,90 zł' }).locator('a').click();
  await page.locator('#product-128114 svg').nth(1).click();
  await page.getByRole('button', { name: 'Dodaj do Koszyka' }).click();
  //await page.getByRole('button', { name: 'Akceptuj wszystko' }).click();
  await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
  await page.locator('inpost-izi-button div').nth(1).click();
  await page.locator('#izi-phone-input').fill('500');
  await page.locator('#inpostizi-modal-button-close').click();
  await page.getByRole('link', { name: 'Usuń <b>Zestaw Prezentowy</b' }).click();
  await page.getByText('Usunięto: „Zestaw Prezentowy').click();
  await page.getByRole('link', { name: 'Wróć do sklepuu' }).click();
});

// });

// });


//});
// });

  


