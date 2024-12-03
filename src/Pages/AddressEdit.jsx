import '../Stylings/AddressEdit.css';
import  { useState } from 'react';
import { addAddress } from '../service/addressService';
import Navigation from '../Components/Navigation';
import locationimg from '../assets/Location.png';



const AddressEdit = () => {
  const [address, setAddress] = useState('');
 
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await addAddress(address); 
      setAddress(
        { 
          state: '', 
          city: '', 
          pincode: '', 
          phone: ''
        }
      );
    } catch (error) {
       console.log(error);
      }
  };

  return (
    <>
      <Navigation/>
      <div className='address-sections'>
        <img src={locationimg} alt="" />
        <p>Add Address</p>
        <form onSubmit={handleSubmit}>
           <input className='state-field'  type="text" name="state" placeholder="State" onChange={handleChange} value={address.state} />
           <input className='city-field'  type="text" name="city" placeholder="City/District" onChange={handleChange} value={address.city} />
           <input className='pincode-field'  type="text" name="pincode" placeholder="Pin Code" onChange={handleChange} value={address.pincode} />
           <input className='phone-field'  type="text" name="phone" placeholder="Phone Number" onChange={handleChange} value={address.phone} />
           <textarea placeholder='Enter full address' rows="10" cols="30" ></textarea>
           <button type="submit">Save</button>
        </form>
      </div>
    </>
  )
}

export default AddressEdit




