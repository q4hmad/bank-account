//Business Logic

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = [];
}

Ticket.prototype.ticketPrice = function() {
  if (this.movie === "UP" || this.age >= 65) {
    var price = "$5.00";
  } else if (this.time != "morning" && this.age < 65) {
    var price = "$10.00";
  } else if (this.movie = "morning") {
    var price = "$5.00"
  }
 return ("The cost of " + this.movie + " at " + this.time + "will be " + price);
}


//User-end Logic
$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();
    var movie = $("input:radio[name=movie]:checked").val();
    console.log(movie);
    var time = $("input:radio[name=time]:checked").val();
    console.log(time);
    var age = parseInt($("input.inputAge").val());
    console.log(age);

    var ticketInfo = new Ticket(movie, time, age);
    console.log(ticketInfo.ticketPrice());

    $("#ticketResult").append("ticketInfo.ticketPrice")


  });
});
