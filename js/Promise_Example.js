const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});

// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
