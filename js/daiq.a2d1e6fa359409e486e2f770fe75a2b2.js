/*!
* Nascent Tools
* Boilerplate for a Static website using EJS and SASS
* https://tools.nascent.xyz
* @author Andreas Bigger <abigger@nascent.xyz> -- https://tools.nascent.xyz
* Copyright 2021. MIT Licensed.
*/

$(function() {
    consoleInit();
    start(main);
});

async function main() {  
    const params = Dollars.DAIQ.Parameters;

    const calcPrice = twap => Math.min((twap - 1) / params.SupplyChangeDivisor, params.SupplyChangeLimit);
    
    const getEpochPeriod = async (DAO) => await DAO.nextEpochStart() - await DAO.currentEpochStart();

    const getTwap = async (DAO, epoch) => await DAO.twapAtEpoch(epoch) / 1e18;
    
    loadDollar(Dollars.DAIQ, calcPrice, getEpochPeriod, getTwap);
}