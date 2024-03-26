import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I do</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>
            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
            </div>
        </div>
        <div className="qualification__section">
            <div className="qualification__content">
                <div className="qualification__data">
                    
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification