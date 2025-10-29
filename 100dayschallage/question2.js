const genrateHast = (str) => {
  if (str.length === 280 || str.trim().length === 0) {
    return false;
  }

  str = str.trim().split(/\s+/); // handles multiple spaces
  str = str.map(curElem => curElem.replace(curElem[0], curElem[0].toUpperCase()));
  str = `#${str.join('#')}`;
  console.log(str);

};

genrateHast("my name is ragini and i love to code and i am learning new things ");
