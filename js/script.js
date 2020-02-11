  var repository = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      types: ['grass', 'water']
    },
    {
      name: 'Pikachu',
      height: 0.4,
      types: ['electric', 'flying']
    },
    {
      name: 'Wartortle',
      height: 1,
      types: ['steel', 'fire']
    },
    {
      name: 'Ninetales',
      height: 1.1,
      types: ['ground', 'ice']
    },
  ];

for (i = 0; i < repository.length; i++) {
  if (repository.height > 1) {
    document.write(
      repository.name, repository.height
    );
  } else {
    document.write(
      repository.name, repository.height, "Wow, that's big!"
    );
  }
}
