$.getJSON('https://provinces.open-api.vn/api/?depth=3', function(dataCity) {

    // select city
    $.each(dataCity, function (index, value) {
      $('#province').append('<option value="'+value.name+'">'+value.name+'</option>');
    });
    // select districts
    $('#province').on('change', function(){
      for(var i = 0; i < dataCity.length; i++) {
        if(dataCity[i].name == $(this).val()) {
          var districts = [];
          $.each(dataCity[i].districts, function (index, value) {
            districts.push('<option value="'+value.name+'">'+value.name+'</option>');
          });
          $('#district').html('<option value="">Select District</option>'+ districts);
        }
      }
      wards.push('<option value="">Select Ward</option>');
      $('#ward').html(wards);
    });

    // select wards
    var wards = [];
    $('#district').on('change', function(){
      if($(this).attr('value') == '') {
        wards.push('<option value="">Select Ward</option>');
        $('#ward').html(wards);
      }
      else {
        for(var i = 0; i < dataCity.length; i++) {
          for( var j = 0; j < dataCity[i].districts.length; j++) {
            if(dataCity[i].districts[j].name == $(this).val()) {
              var wards = [];
              $.each(dataCity[i].districts[j].wards, function (index, value) {
                wards.push('<option value="'+value.name+'">'+value.name+'</option>');
              });
              $('#ward').html('<option value="">Select Ward</option>' + wards);
            }
          }
        }
      }
    })
    
  })