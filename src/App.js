import { AiOutlineCheck } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import './App.css';


function App() {
  return (

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      <Component1/>
      <Component2/>
      <Component3/>
    </div>
  </div>
</section>

  );
}

export default App;


function Component1() {
  return (
    <div className="Component1">

      {/* Free Tier */}
      
        <div className="card mb-5 mb-xl-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Single User</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> 5GB Storage</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Unlimited Public Projects</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Community Access</li>
              <li className="text-muted"><span className="fa-li"><AiOutlineClose></AiOutlineClose></span> Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><AiOutlineClose></AiOutlineClose></span> Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><AiOutlineClose></AiOutlineClose></span> Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><AiOutlineClose></AiOutlineClose></span> Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
    </div>

    
  );
}

function Component2() {
  return (
    <div className="Component2">  

      {/* Plus Tier */}

        <div className="card mb-5 mb-xl-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span><strong> 5 Users</strong></li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> 50GB Storage</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Unlimited Public Projects</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Community Access</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Unlimited Private Projects</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Dedicated Phone Support</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><AiOutlineClose></AiOutlineClose></span> Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
    </div>


  );
}

function Component3() {
  return (
    <div className="Component3">  

      {/* Pro Tier */}

        <div className="card mb-5 mb-xl-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span><strong> Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> 150GB Storage</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Unlimited Public Projects</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Community Access</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Unlimited Private Projects</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Dedicated Phone Support</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span><strong> Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><AiOutlineCheck></AiOutlineCheck></span> Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
    </div>


  );
}