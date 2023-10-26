# citiesAO
[cities-ao](https://cities-ao.onrender.com/api/v1/cities)
```
https://cities-ao.onrender.com/api/v1/cities
```
## :memo: Description
API-REST created in #nodejs with the purpose of providing a list of cities in Angola.

All data available in the API was extracted from the Government of Angola website [governo.gov.ao](https://www.governo.gov.ao/angola/provincias)



## :books: Functionalities
* <b>list of cities in Angola</b>
  
```json

[
    { 
        "id":"luanda",
        "name":"Luanda",
        "capital":"Luanda",
        "counties":[
            {"id":"icoloebengo","name":"Icolo-e-Bengo","communes":["Cassoneca","Cabiri","Bom Jesus","Caculo Cahango","Quiminha"],"districts":["Catete","Bela Vista"]},
            {"id":"luanda","name":"Luanda","communes":[""],"districts":["Sambizanga","Rangel","Maianga","Ingombota","Samba","Neves Bendinha","Ngola Kiluanje"]},
            {"id":"quicama","name":"Quiçama","communes":["Muxima","Demba Chio","Quixinge","Mumbondo","Caboledo"],"districts":[]},
            {"id":"cacuaco","name":"Cacuaco","communes":["Cacuaco","Quicolo","Funda"],"districts":["Kikolo","Cacuaco","Mulenvos de Baixo","Sequele"]},
            {"id":"cazenga","name":"Cazenga","communes":[""],"districts":["Cazenga","Hoji ya Henda","11 de Novembro","Kima Kieza","Tala Hadi","Kalawenda"]},
            {"id":"viana","name":"Viana","communes":["Calumbo"],"districts":["Viana","Estalagem","Kikuxi","Baía","Zango","Vila Flôr"]},
            {"id":"belas","name":"Belas","communes":["Camama","Benfica","Vila Estoril","Ilha do Mussulo","Barra do Kwanza","Futungo de Belas","Ramiro"],"districts":["Quenguela","Morro dos Veados","Ramiros","Vila Verde","Cabolombo","Kilamba"]},
            {"id":"kilamba_kiaxi","name":"Kilamba Kiaxi","communes":[""],"districts":["Golfe","Sapú","Palanca","Nova Vida"]},
            {"id":"talatona","name":"Talatona","communes":["Mussulo"],"districts":["Benfica","Futungo de Belas","Lar do Patriota","Talatona","Camama","Cidade Universitária"]}]
    }
]

```
## :wrench: Technologies used
  * <a  href="https://expressjs.com"><b>express</b></a>
  * <a  href="https://nodejs.org/en"><b>nodejs</b></a>
  * <a  href="https://nodemon.io/"><b>nodemon</b></a>

## :rocket: Running the project

* Installing dependencies
```
npm ci
```
* Start the project in development mode
```
npm rum dev
```
* Start the project in production mode
```
npm rum start
```

## :soon: Future implementation
* <b>indication of the ethnicity of each city and its extension<b>

## :handshake: Collaborators
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/sipitalie">
        <img src="https://avatars.githubusercontent.com/u/58750371?s=400&u=24d12ba8e682d3aebcfd3f3878c2b4eb38314b4f&v=4" width="100px;" alt="Foto de sipitali no GitHub"/><br>
        <sub>
          <b>sipitalie</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

