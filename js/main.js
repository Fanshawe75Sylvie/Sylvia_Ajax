(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var theImages = document.querySelectorAll('.data-ref'),
      theNames = document.querySelector('.modelName'),
      thePrices = document.querySelector('.priceInfo'),
      theDetails = document.querySelector('.modelDetails');

      const httpRequest = new XMLHttpRequest();

      function getCarData () {

        const url = './includes/functions.php?carModel=' + this.id;
        // NEW, the fetch API uses new Javascript promise API
        fetch(url) // do an ajax call with fetch
        .then((resp) => resp.json())  // convert to JSON
        .then(({ modelName, pricing, modelDetails, model }) => {
          let theNames = document.querySelector('.modelName').textContent = modelName;
          let thePrices = document.querySelector('.priceInfo').innerHTML = pricing;
          let theDetails = document.querySelector('.modelDetails').textContent = modelDetails;

              theImages.forEach(function(image, index){
                image.classList.add('nonActive');
        }); // this is a template string constructor - look it up! (also new for ES6)
        document.querySelector(`#${model}`).classList.remove('nonActive');
      })
        .catch(function(error) {  //catch any error and report it to the console
          // console.log(error);
        });


// make an AJAX call to the DB; hande errors firstChild
//if (!httpRequest) {
//   alert('giving up... your browser sucks');
//   return false;
// }

//httpRequest.onreadystatechange = processRequest;
//httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
//httpRequest.send ();
      }

  //    function processRequest() {
  //        let reqIndicator = document.querySelector('.request-state');
  //        reqIndicator.textContent = httpRequest.readyState;

  //        if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //          if (httpRequest.status === 200) { // 200 means everything is awesome
              //debugger;
  //            let data = JSON.parse(httpRequest.responseText);

  //            processResult(data);
  //          } else {
  //            alert('There was a problem with the request.');
  //          }
  //        }
  //      }



  //function processResult(data) {
  //  const { modelName, pricing, modelDetails } = data;

  //  let theNames = document.querySelector('.modelName').textContent = modelName;
  //  let thePrices = document.querySelector('.priceInfo').innerHTML = pricing;
  //  let theDetails = document.querySelector('.modelDetails').textContent = modelDetails;

      //  theNames.textContent = modelName;
      //  thePrices.innerHTML = pricing;
      //  theDetails.textContent = modelDetails;

  //let objectIndex = carData[this.id];

  //      theImages.forEach(function(image, index){
  //        image.classList.add('nonActive');
//});

  //        document.querySelector(`#${data.model}`).classList.remove('nonActive');

//sß};
        theImages.forEach(function(image, index){
          image.addEventListener('click', getCarData, false);
});

})();
