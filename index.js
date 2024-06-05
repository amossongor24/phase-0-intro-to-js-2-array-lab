const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveFirstCat() {
    cats.shift();
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function prependCat(name) {
    const copyOfCatsPrepend = ["Arnold", ...cats];
    return copyOfCatsPrepend
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeLastCat() {
    return cats.slice(0, -1);
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeFirstCat() {
    return cats.slice(1);
  }
  