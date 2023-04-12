# Devveron2.0

[Conflict Resolution Plan](https://docs.google.com/document/d/1R4Gunji-XKpJoc_1CfpgQABldjdQSgHE07fA_936u4g/edit)

[Tech Plan](https://docs.google.com/document/d/1QO11svnE5w68hl98H-61lrhrzLKYH-wd1eBO4vnKW6g/edit?usp=sharing)

## Database structure

### Players

| Name | Type | Notes |
|---|---|---|
| user | string | pk, links to auth0 pub |
| char_name | string | |
| pronouns | string | |
| description | text | |
| inventory | text | `#` seperated strings |
| location | string | |

## Redux Store

| Inventory | `string[]` |
| Messages | `{from: string, message: string}[]` |
| Nearby PCs | `{name:string, pronouns:string, description:string}[]` |