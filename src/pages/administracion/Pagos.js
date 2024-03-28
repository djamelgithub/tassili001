import React from 'react'

const Pagos = () => {
  return (
    <div>
        <h1 className="text-center">Pick the best plan for you</h1>
        <div className="pricing-box-container">
          <div className="pricing-box text-center">
            <h5>Free</h5>
            <p className="price"><sup>$</sup>0<sub>/mo</sub></p>
            <ul className="features-list">
              <li><strong>1</strong> Project</li>
              <li><strong>5</strong> Team Members</li>
              <li><strong>50</strong> Personal Projects</li>
              <li><strong>5,000</strong> Messages</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="pricing-box pricing-box-bg-image text-center">
            <h5>Premium</h5>
            <p className="price"><sup>$</sup>39<sub>/mo</sub></p>
            <ul className="features-list">
              <li><strong>5</strong> Project</li>
              <li><strong>20</strong> Team Members</li>
              <li><strong>100</strong> Personal Projects</li>
              <li><strong>15,000</strong> Messages</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="pricing-box text-center">
            <h5>Platinum</h5>
            <p className="price"><sup>$</sup>89<sub>/mo</sub></p>
            <ul className="features-list">
              <li><strong>25</strong> Project</li>
              <li><strong>50</strong> Team Members</li>
              <li><strong>500</strong> Personal Projects</li>
              <li><strong>50,000</strong> Messages</li>
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
       
      </div>
  )
}

export default Pagos