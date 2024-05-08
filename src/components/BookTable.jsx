import React, { useState } from 'react';

function BookTable() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numGuests: '',
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions like sending the form data to a server here.
    console.log(formData);
    // Reset the form fields if needed
    setFormData({
      date: '',
      time: '',
      numGuests: '',
      occasion: '',
    });
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number of Guests:</label>
          <input
            type="number"
            name="numGuests"
            value={formData.numGuests}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Occasion:</label>
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Select an Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}

export default BookTable;


/*
<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>

Step 3: Code the form behavior
Using what you already know about events, effects and state in React, update your form's code to keep track of its own state.

Define a state variable for field in the form.

Connect each state variable to the form fields using the value and onChange form element attributes.

The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options.

Tip: Use the useState function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future.

*/
