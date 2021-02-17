let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let mini = str.toLocaleLowerCase();
console.log(`${mini.includes("bob") ? "Le mot bob est présent" : "Le mot n'est pas présent"}`);
