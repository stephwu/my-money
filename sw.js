/** An empty service worker! */
navigator.serviceWorker && navigator.serviceWorker.register('/sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});

// navigator.serviceWorker && navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {  
//   serviceWorkerRegistration.pushManager.getSubscription()  
//     .then(function(subscription) {  
//       // subscription will be null or a PushSubscription
//     });
// });