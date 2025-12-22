function twiceAsOld(dadYearsOld, sonYearsOld) {
  var doubledAgeSon = sonYearsOld * 2;
  var dadDouble = doubledAgeSon - dadYearsOld;
  return Math.abs(dadDouble);
}

twiceAsOld(22,1)