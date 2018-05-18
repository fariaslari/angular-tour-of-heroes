import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 11, 
        name: 'Mr. Nice',
        power: 'Really Smart',
        addresses:[
          {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
          {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
        ] 
      },
      { 
        id: 12, 
        name: 'Narco', 
        power: 'Super Hot',
        addresses:[
          {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
        ] 
      },
      { 
        id: 13, 
        name: 'Bombasto',
        power: 'Super Flexible', 
        addresses:[
          {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        ] 
      },
      { 
        id: 14, 
        name: 'Celeritas',
        power: 'Really Smart',
        addresses:[
           {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
        ]  
      },
      { 
        id: 15, 
        name: 'Magneta', 
        addresses:[
          {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        ]  
      },
      { 
        id: 16, 
        name: 'RubberMan', 
        power: 'Weather Changer',
        addresses:[
          {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
        ] 
      },
      { 
        id: 17, 
        name: 'Dynama', 
        addresses:[
           {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
        ] 
      },
      { 
        id: 18, 
        name: 'Dr IQ', 
        power: 'Super Hot',
        addresses:[
          {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
        ]  
      },
      { 
        id: 19, 
        name: 'Magma',
        power: 'Really Smart',
        addresses:[
          
        ]  
      },
      { 
        id: 20, 
        name: 'Tornado', 
        power: 'Super Flexible',
        addresses:[
          {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
          {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
        ]  
      }
    ];

    const powers = [
      'Really Smart', 
      'Super Flexible',
      'Super Hot', 
      'Weather Changer'
    ];
    return {'heroes': heroes, 'powers':powers};
  }
}