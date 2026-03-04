import { test, expect } from '@playwright/test';

test ('Test_ID_01_corection Go to the website and enter the data for registration' , async ({ page }) => {
  
  //GIVEN - the user is on the home page, accepts cookies, and navigates to the login panel
  await page.goto('https://woskiknot.pl/');
  await page.getByRole('button', { name: 'Akceptuj wszystko' }).click();
  await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();
  await page.getByRole('link', { name: 'Zarejestruj się' }).click();

  //WHEN - register an account with correct details
  await page.getByRole('textbox', { name: 'Adres e-mail Wymagane' }).click();
  await page.getByRole('textbox', { name: 'Adres e-mail Wymagane' }).fill('but44619@laoia.com');
  await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click();
  await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('vyCzv68sEzTr4f');
  await page.getByRole('button', { name: 'Zarejestruj się' }).click();

  //THEN - is redirected to ‘My Account’ and the user profile
  await page.goto('https://woskiknot.pl/my-account/');
  await page.getByRole('heading', { name: 'Moje Konto' }).click();

  
});


test('Test_ID_05_correction Checks the required field Email address when logging in', async ({ page }) => {
  
  //GIVEN - the user is on the home page, accepts cookies, and proceeds to log in
  await page.goto('https://woskiknot.pl/?utm_source=google&utm_medium=cpc&utm_campaign=%7Bcampaignname%7D&utm_content=%7Badgroupname%7D_781020646448&utm_term=wosk%20i%20knot&gad_source=1&gad_campaignid=23191400593&gbraid=0AAAAACQm-3xy9avTIgui6Au_zobZS-kRE&gclid=EAIaIQobChMIjNWLpaqGkwMVK2SRBR3jHit2EAAYASAAEgJRifD_BwE');
  await page.getByRole('button', { name: 'Akceptuj wszystko' }).click();
  await page.locator('#header').getByRole('link', { name: 'Logowanie' }).click();

  //WHEN - skip the username, only fills in the password
  //await page.getByRole('textbox', { name: 'Nazwa użytkownika lub adres e-mail *' }).fill('');
  await page.getByRole('textbox', { name: 'Hasło Wymagane' }).click();
  await page.getByRole('textbox', { name: 'Hasło Wymagane' }).fill('Ew0uCfyxEF');
  await page.getByRole('button', { name: 'Zaloguj się' }).click();

  //THEN - see the error message "Wypełnij to pole." with an exclamation mark icon 
 // THEN - check if the email field is required
   await expect(page.getByRole('textbox', { name: 'Nazwa użytkownika' })).toHaveAttribute('required');

});
