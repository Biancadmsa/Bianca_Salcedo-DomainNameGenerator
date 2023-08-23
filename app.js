function respuesta() {
let pronoun = ["my", "you", "the", "our"];
let adj = ["dream", "store", "game", "history"];
let noun = ["magic", "pink", "programmed", "funny"];
let extens = [".com", ".es", ".net", ".cl"];

for (let i = 0; i < pronoun.length; i++) {
  for (let i1 = 0; i1 < adj.length; i1++) {
    for (let i2 = 0; i2 < noun.length; i2++) {
      for (let i3 = 0; i3 < extens.length; i3++) {
        console.log("https://www." + pronoun[i] + adj[i1] + noun[i2] + extens[i3]);
      }
    }
  }
}
};
respuesta();
