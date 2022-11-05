**generate json report**
- npx cypress run --reporter mochawesome

**generate json report into 1 file**
- JSON: npx mochawesome-merge ./cypress/reports/*.json > ./cypress/reports/report1.json
- HTML: npx marge ./cypress/reports/report1.json --reportDir ./cypress/reports 

**remove report**
- rm -r ./cypress/reports/*.json

**run test**
- npm run test