exports.seed = (knex) =>
  knex('users').del()
    .then(() => {
      knex('users').insert([
        { id: 1, email: 'rjrferens@gmail.com', user_name: 'HippywithanAK', first_name: 'Rich', surname: 'Fez', pref_role: 'DPS' }
      ])
    })

