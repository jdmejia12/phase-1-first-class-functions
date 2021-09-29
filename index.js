function receivesAFunction(cb){
    return cb();
  }
  receivesAFunction(function(){
    return (2*2 + 3*3);
  })
  /////////////
  function returnsANamedFunction(){
    return (function SK(){'is the man'})
  }
  /////////////
  returnsANamedFunction();
  function returnsAnAnonymousFunction(){
    return (function (){'this is Anonymous. Shhhh'})
  }