const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms

delay(1500).then(logger); // Resolved after 1500ms



 const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };
 const makeTransaction = (transaction) => {
   const delay = randomIntegerFromInterval(200, 500);
   return new Promise((onSuccess, onError) => {
     setTimeout(() => {
     const canProcess = Math.random() > 0.3
     if (canProcess) {
       onSuccess({id:transaction.id, delay:delay});
     } else {
       onError(transaction.id);
     }
   }, delay);
   })
 };

 const logSuccess = (id, time) => {
   console.log(`Transaction ${id} processed in ${time}ms`);
 }
 const logError = id => {
   console.warn(`Error processing transaction ${id}. Please try again later.`);
 }
 makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
 makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
 makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
 makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

 makeTransaction({ id: 70, amount: 150 })
   .then(({ id, delay }) =>logSuccess(id, delay))
   .catch(logError)
 makeTransaction({ id: 71, amount: 230 })
   .then(({ id, delay }) =>logSuccess(id, delay))
   .catch(logError)
 makeTransaction({ id: 72, amount: 75 })
   .then(({ id, delay }) =>logSuccess(id, delay))
   .catch(logError)
 makeTransaction({ id: 73, amount: 100 })
   .then(({ id, delay }) =>logSuccess(id, delay))
   .catch(logError)