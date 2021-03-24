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
    const params = Dollars.ETHIC.Parameters;
    const calcPrice = (twap, totalCoupons, totalRedeemable) => calculateEmptySetChange(params, totalCoupons, totalRedeemable, twap)
    await loadDollar(Dollars.ETHIC, calcPrice);
}
