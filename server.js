const FAVORITE_INSTRUCTOR = process.env.NAME

function sleep(ms) {
  console.log(`${FAVORITE_INSTRUCTOR} rocks!!`)
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
