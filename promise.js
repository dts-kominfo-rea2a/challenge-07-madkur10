const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (perasaan) => {
  try {
    let teatherXXI = await promiseTheaterIXX();
    let teatherCGV = await promiseTheaterVGC();
  
    let gabungTeather = teatherXXI.concat(teatherCGV);
    
    return gabungTeather.filter(hasilPerasaan => (hasilPerasaan.hasil === perasaan)).length;
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  promiseOutput,
};
