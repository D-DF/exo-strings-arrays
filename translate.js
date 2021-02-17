let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

const phrase = str.trim().toUpperCase().split(' ');

for (const tableau of phrase) {
  console.log(`mot: ${tableau}`);
}