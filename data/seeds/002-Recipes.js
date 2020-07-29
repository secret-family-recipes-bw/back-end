exports.seed = function(knex) {
  return knex('Recipes').insert([
    {user_id: 1, title: 'baked pork chops with apple cranberry sauce',  category:'dinner', source: 'mom', image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Cranberry-Apple-Pork-Chops_exps46377_SD132779A06_12_7bC_RMS.jpg'},
    {user_id: 2, title: 'empañapita',  category:'lunch', source: 'KTB_Family', image: 'https://ptclinic.com/img/photos/empanapita.jpg'},
    {user_id: 3, title: 'shepherd’s pie',  category:'dinner', source: 'KTB_Family', image: 'https://www.thewholesomedish.com/wp-content/uploads/2019/02/The-Best-Classic-Shepherds-Pie-550-500x500.jpg'},
  ])
  .then(() => console.log("\n== Seed data for recipes table added. ==\n"));
};