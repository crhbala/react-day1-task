import './App.css';

const Free = (props) => {
  return(
    <div className='card' >
      <span className='card-top'>
        <h5 className='card-header'>{props.pakage}</h5>
        <h1>${props.price}/month</h1>
        <div className='card-header-line'></div>
      </span>
      <p><i class="bi bi-check-lg"></i>Single User</p>
      <p><i class="bi bi-check-lg"></i>50GB Storage</p>
        <p><i class="bi bi-check-lg"></i>Unlimited Public Project</p>
        <p><i class="bi bi-check-lg"></i>Community Access</p>
        <p className='disabled'><i class="bi bi-x"></i>Unlimited Private Project</p>
        <p className='disabled'><i class="bi bi-x"></i>Dedicated Phone Support</p>
        <p className='disabled'><i class="bi bi-x"></i>Free Subdomine</p>
      <p className='disabled'><i class="bi bi-x"></i>Monthly Status Reports</p>
      <span><button disabled>BUTTON</button></span>
  </div>
  )
}
const Plus = (props) => {
  return(
    <div className='card' >
      <span className='card-top'>
        <h5 className='card-header'>{props.pakage}</h5>
        <h1>${props.price}/month</h1>
        <div className='card-header-line'></div>
      </span>
        <p><i class="bi bi-check-lg"></i>Single User</p>
        <p><i class="bi bi-check-lg"></i>50GB Storage</p>
        <p><i class="bi bi-check-lg"></i>Unlimited Public Project</p>
        <p><i class="bi bi-check-lg"></i>Community Access</p>
        <p><i class="bi bi-check-lg"></i>Unlimited Private Project</p>
        <p><i class="bi bi-check-lg"></i>Dedicated Phone Support</p>
        <p><i class="bi bi-check-lg"></i>Free Subdomine</p>
      <p className='disabled'><i class="bi bi-x"></i>Monthly Status Reports</p>
      <span><button disabled>BUTTON</button></span>
  </div>
  )
}
const Pro = (props) => {
  
  return(
    <div className='card' >
      <span className='card-top'>
        <h5 className='card-header'>{props.pakage}</h5>
        <h1>${props.price}/month</h1>
        <div className='card-header-line'></div>
      </span>
        <p><i class="bi bi-check-lg"></i>Single User</p>
        <p><i class="bi bi-check-lg"></i>50GB Storage</p>
        <p><i class="bi bi-check-lg"></i>Unlimited Public Project</p>
        <p><i class="bi bi-check-lg"></i>Community Access</p>
        <p><i class="bi bi-check-lg"></i>Unlimited Private Project</p>
        <p><i class="bi bi-check-lg"></i>Dedicated Phone Support</p>
        <p><i class="bi bi-check-lg"></i>Free Subdomine</p>
      <p><i class="bi bi-check-lg"></i>Monthly Status Reports</p>
      <span><button>BUTTON</button></span>
  </div>
  )
}


const App = () => {
  
  return (
    <div className='container'>
      <div className='price-card'>
        <Free pakage = 'FREE' price ='0' />
        <Plus pakage = 'PLUS' price ='9' />
        <Pro pakage='PRO' price='49' />
      </div>
    </div>
  )
  
}

export default App;