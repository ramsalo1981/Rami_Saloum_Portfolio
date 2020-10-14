# Rami_Saloum_Portfolio
1. Run **npm install** i både frontend- och backend-kataloger.  
2. Efter att ha klonat denna repo, måste du ta bort uppladdningsmappen och dess innehåll i strapi-backend.  
3. I backend-körningen utvecklas **npm run develop**.  
4. Återskapa mappuppladdningen i din backend under tillägg, skapa sedan konfigurationsmappen i konfigurationsmappen, skapa inställningar.**settings.json** file med följande struktur.  
**{"provider": "cloudinary",  
"providerOptions": {"cloud_name": "xxxx", "api_key": "xxxxxx", "api_secret": "xxx"}}**   
5. Ersätt innehållet i **cloud_name, api_key** och **api_secret** med din egna uppgifter från **Cloudnairy**  
6. I din frontend, ändra inställningarna för **Rami_Portfolio/portfolio-frontend/src/pages/ contact.js**,  
inställningarna för formuläråtgärd måste vara specifikt din som du fick från gratis.  
7. I frontend **run gatsby develop**  
8. För att använda git make-filen, se till att det bara finns flikar och inga mellanslag. Du kan styra detta med följande tillägg "Space Cadet"
9. Min Portfolio : [Rami portfolio](https://rami-saloum-site.netlify.app/)
