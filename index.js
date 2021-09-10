var count = 0,
  get;
$('#get-otp').click(function() {
  min = Math.ceil(111);
  max = Math.floor(999);
  get = Math.floor(Math.random() * (max - min)) + min;
  $('#otp-number').text(get);
  count = count + 1;
  //$('.save-random').text(count);
 
});
$("#table-data").hide();
$("#login").on('click',function(e){
    e.preventDefault();
   document.getElementById('LoginModal').style.display = 'none';
   document.getElementById('entry-buttons').style.display = 'none';
    
    document.getElementById('table-data').style.display = 'block';
    

});

$(document).ready(function(){
  $("#createAccount").submit(function(e){
    e.preventDefault();
      var values = [$("#exampleName").val(), $("#exampleName1").val(), $("#exampleAge").val(), $("#exampleGender").val() , $("#exampleHeight").val(),$("#exampleWeight").val() , $("#exampleWeight").val()/($("#exampleHeight").val()*$("#exampleHeight").val())*10000];
      var markup = "<tr><td>" + values[0] + "</td><td>" + values[1] + "</td><td>" + values[2] + "</td><td>" + values[3] + "</td><td>" + values[4] + "</td><td>" + values[5] + "</td><td>" + values[6] + "</td></tr>";
      $("table tbody").append(markup);
      document.getElementById('Sign-upModal').style.display = 'none';
      return false;
      
     
      
      
  });
  
});

// function Data(firstname,lastname,age,gender,height,weight,bmi){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.gender = gender;
//     this.height = height;
//     this.weight = weight;
//     this.bmi = bmi;

    

// }

// function Display(){

// }

// Display.prototype.add = function(data){
//     tablebody = document.getElementById('tablebody');
// $('#create-account').on('click',addRecord);
// function addRecord(data){
//     let uistring = `
//     <tr>                
//     <td>${data.firstname}</td>
//     <td>${data.lastname}</td>
//     <td>${data.age}</td>
//     <td>${data.gender}</td>
//     <td>${data.height}</td>
//     <td>${data.weight}</td>
//     <td>${bmi}</td>
//   </tr>  
//     `;
//     $('table tbody').append(uistring);
// }


// Display.prototype.validate = function(data){
//     if(data.firstname.length<2 || data.lastname.length<2){
//         return false;
//     }else{
//         return true;
//     }
// }


// let createAccount = document.getElementById('createAccount');
// createAccount.addEventListener('submit',createAccountSubmit);

// function createAccountSubmit(e){
//     let firstname = document.getElementById('exampleName').value;
//     let lastname = document.getElementById('exampleName1').value;
//     let age = document.getElementById('exampleAge').value;
//     let gender = document.getElementById('exampleGender').value;
//     let height = document.getElementById('exampleHeight').value;
//     let weight = document.getElementById('exampleWeight').value;
//     let bmi = weight.value/(height.value*height.value) * 10000;

//     let data = new Data(firstname,lastname,age,gender,height,weight,bmi);

//     let display = new Display();

//     if(display.validate(data)){
//     display.add(data);
// }
// }