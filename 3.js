let agree = confirm("Do you agree to share your personal information with our site?");
if (agree) {
    let nickname = "jin";
    let heightInInches = 60;
    let weightInKg = 45;

    let heightInCm = heightInInches * 2.54;
    let weightInLbs = weightInKg * 2.20462;

document.write("Nickname: " + nickname + "\nHeight (in inches): " + heightInInches + "\nWeight (in kg): " + weightInKg);
    console.log("Name: " + nickname);
    console.log("Height: " + heightInInches);
    console.log("Weight: " + weightInKg);
  }
  else {
    console.log("User does not wish to share his/her information.");
  }