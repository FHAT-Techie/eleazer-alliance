document.getElementById('donateNow').addEventListener('click', payWithPaystack);

function payWithPaystack() {
  console.log("Paystack button clicked");

  // Retrieve form values
  const donationAmount = document.getElementById('donationAmount').value;
  const donorName = document.getElementById('donorName').value;
  const donorEmail = document.getElementById('donorEmail').value;
  const donorPhone = document.getElementById('donorPhone').value;
  const donorMessage = document.getElementById('donorMessage').value;

  if (!donationAmount || !donorName || !donorEmail) {
    alert('Please fill all required fields.');
    console.error("Missing required fields:", { donationAmount, donorName, donorEmail });
    return;
  }

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert('Please enter a valid donation amount.');
    console.error("Invalid donation amount:", donationAmount);
    return;
  }

  const handler = PaystackPop.setup({
    key: 'pk_test_70554463699a640abf6684075493ead01c82e800',
    email: donorEmail,
    amount: donationAmount * 100,
    currency: 'NGN',
    ref: 'DONATION_' + Math.floor((Math.random() * 1000000000) + 1),
    metadata: {
      custom_fields: [
        { display_name: "Donor Name", variable_name: "donor_name", value: donorName },
        { display_name: "Phone Number", variable_name: "donor_phone", value: donorPhone },
        { display_name: "Message", variable_name: "donor_message", value: donorMessage }
      ]
    },
    callback: function (response) {
      console.log("Payment completed, reference:", response.reference);

      // Send reference to the backend for verification
      fetch('/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: response.reference }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === 'Payment verified') {
            alert('Payment verified successfully!');
            console.log(data);

            // Clear the form
            document.getElementById('donationForm').reset();
          } else {
            alert('Payment verification failed.');
            console.error(data);
          }
        })
        .catch((error) => {
          console.error('Error verifying payment:', error);
          alert('Error verifying payment.');
        });
    },
    onClose: function () {
      console.log("Payment window closed");
      alert('Transaction was not completed.');

      // Clear the form
      document.getElementById('donationForm').reset();
    }
  });

  console.log("Opening Paystack iframe...");
  handler.openIframe();
}
