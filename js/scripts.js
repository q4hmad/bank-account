//business Logic
function Account(name, initial, deposit, withdrawal) {
  this.name = name;
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}
Account.prototype.accountTotal = function() {
  if (this.withdrawal) {
    var total = this.initial - this.withdrawal
  }
  if (this.deposit) {
    var total = this.initial + this.deposit;

  } else if (this.initial < 0) {
    var total = this.initial;
  }

  return (total);
}


//user interface Logic
$(document).ready(function() {
  $("form#newAccount").submit(function(event) {
    event.preventDefault();
    var name = $("input.name").val();
    console.log(name);
    var firstDeposit = parseInt($("input.initialDeposit").val());
    var deposit = parseInt($("input.depositAmount").val());
    console.log(deposit);
    var withdrawal = parseInt($("input.withdrawalAmount").val());
    console.log(withdrawal);
    var newAccount = new Account(name, firstDeposit, deposit, withdrawal);
    console.log(firstDeposit);
    var currentBalance = newAccount.accountTotal();
    console.log(currentBalance);
  });
});
