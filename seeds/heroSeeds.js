exports.seed = (knex) =>
  knex('heroes').del()
    .then(() => {
      knex('heroes').insert([
        { id: 1, name: 'Ana' },
        { id: 2, name: 'Ashe' },
        { id: 3, name: 'Baptiste' },
        { id: 4, name: 'Bastion' },
        { id: 5, name: 'Brigitte' },
        { id: 6, name: 'D.Va' },
        { id: 7, name: 'Doomfist' },
        { id: 8, name: 'Genji' },
        { id: 9, name: 'Hanzo' },
        { id: 10, name: 'Junkrat' },
        { id: 11, name: 'Lúcio' },
        { id: 12, name: 'McCree' },
        { id: 13, name: 'Mei' },
        { id: 14, name: 'Mercy' },
        { id: 15, name: 'Moira' },
        { id: 16, name: 'Orisa' },
        { id: 17, name: 'Pharah' },
        { id: 18, name: 'Reaper' },
        { id: 19, name: 'Reinhardt' },
        { id: 20, name: 'Roadhog' },
        { id: 21, name: 'Sigma' },
        { id: 22, name: 'Soldier:76' },
        { id: 23, name: 'Sombra' },
        { id: 24, name: 'Symmetra' },
        { id: 25, name: 'Torbjörn' },
        { id: 26, name: 'Tracer' },
        { id: 27, name: 'Widowmaker' },
        { id: 28, name: 'Winston' },
        { id: 29, name: 'Wrecking Ball' },
        { id: 30, name: 'Zarya' },
        { id: 31, name: 'Zenyatta' }
      ])
    })
