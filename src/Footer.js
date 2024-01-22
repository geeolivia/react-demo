import './Footer.css'

const Footer = () => {
  //constant containing info 
  const footer = {
    phone: '(757)-701-6682',
    email: 'oliviapgee@gmail.com',
  };

  //extract individual properties
  const { phone, email} = footer;

  return (
    //main div container with 'foot' and 'center' classes
    <div className='footer'>
        {phone && ( //Render phone
            <h3>
            Phone: <span className='footer_phone'>{phone}.</span>
            </h3>
        )}
        {email && ( //Render email
            <h3>
            Email: <span className='footer_email'>{email}.</span>
            </h3>
        )}
    </div>
  )
}

export default Footer