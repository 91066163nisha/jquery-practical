// ********************to feach data from json and console only***********
// fetch('../table.json')
//     .then((response) => response.json())
//   .then((json) => console.log(json));
  



// feach data from json and  add to table*************************
  $('#example').DataTable({
    "ajax":"../table.json",
    "columns": [
      { "data": "name" },
      { "data": "position" },
      { "data": "office" },
      { "data": "extn" },
      { "data": "start_date" },
      { "data": "salary" },
    ]
  });
