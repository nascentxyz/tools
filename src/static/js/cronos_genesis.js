
$(function() {
    consoleInit(main)
      });

const GENESIS_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_Genesis","internalType":"contract GenesisToken"},{"type":"uint256","name":"_startBlock","internalType":"uint256"},{"type":"address","name":"_devAddress","internalType":"address"},{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"PoolAdd","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"lpToken","internalType":"contract IERC20","indexed":false},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256","indexed":false},{"type":"uint16","name":"depositFeeBP","internalType":"uint16","indexed":false}],"anonymous":false},{"type":"event","name":"PoolSet","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"lpToken","internalType":"contract IERC20","indexed":false},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256","indexed":false},{"type":"uint16","name":"depositFeeBP","internalType":"uint16","indexed":false}],"anonymous":false},{"type":"event","name":"ReferralCommissionPaid","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"referrer","internalType":"address","indexed":true},{"type":"uint256","name":"commissionAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetFeeAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetReferralAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"contract IReferral","indexed":true}],"anonymous":false},{"type":"event","name":"SetReferralCommissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint16","name":"referralCommmissionRate","internalType":"uint16","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"GenesisPerBlock","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateStartBlock","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"startBlock","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract GenesisToken"}],"name":"Genesis","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"GenesisPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MAXIMUM_EMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"MAXIMUM_REFERRAL_COMMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_referrer","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingGenesis","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accGenesisPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"lpSupply","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IReferral"}],"name":"referral","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"referralCommissionRate","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_devAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress","inputs":[{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setReferralAddress","inputs":[{"type":"address","name":"_referral","internalType":"contract IReferral"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setReferralCommissionRate","inputs":[{"type":"uint16","name":"_referralCommissionRate","internalType":"uint16"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_GenesisPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateStartBlock","inputs":[{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

    const GENESIS_CHEF_ADDR = "0xD720528902c832e466bFEddfa60eCeb3A175ca1C";

    const rewardTokenTicker = "GENESIS";
    const GENESIS_CHEF = new ethers.Contract(GENESIS_CHEF_ADDR, GENESIS_CHEF_ABI, App.provider);

    let rewardsPerWeek = 0
    const startBlock = await GENESIS_CHEF.startBlock();
    const currentBlock = await App.provider.getBlockNumber();

    const multiplier = await GENESIS_CHEF.getMultiplier(currentBlock, currentBlock + 1);
 
    if(currentBlock < startBlock){
     _print(`Rewards start at block ${startBlock}\n`)
    }else{
        rewardsPerWeek = await GENESIS_CHEF.GenesisPerBlock() / 1e18 * multiplier * 604800 / 5.6;
    }

    const tokens = {};
    const prices = await getCronosPrices();

    await loadCronosChefContract(App, tokens, prices, GENESIS_CHEF, GENESIS_CHEF_ADDR, GENESIS_CHEF_ABI, rewardTokenTicker,
        "Genesis", null, rewardsPerWeek, "pendingGenesis", [7]);

    hideLoading();
}
