const checkIn = getElementbyId(checkindate)
const checkOut = getElementbyId(checkoutdate)

function validate_dates(checkIn, checkOut) {
    return checkOut > checkIn;
}

if (validate_dates(checkIn, checkOut)) {
    console.log('Check-out date is after check-in date');
  } else {
    console.log('Check-out date is not after check-in date');
  }