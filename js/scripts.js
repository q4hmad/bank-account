//business Logic
function Account(name, initial, deposit, withdrawal) {
  this.name = name;
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}
Account.prototype.accountTotal = function() {
  var total = this.initial;
  if (this.deposit > total) {
  return ("Your account balance is $" + (this.deposit + total) + ".");
  }
  else if (total > 0) {
    return ("Welcome to the Epicodus Credit Union! Your current balance is " + "$" +
  total + ".00");
  }
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
