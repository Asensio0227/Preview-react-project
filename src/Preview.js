import React, {useState} from 'react'
import { FaQuoteRight,FaChevronCircleLeft,faChevronCircleRight, FaChevronCircleRight } from 'react-icons/fa';
import { reviews } from './data';

const Preview = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return number = 0;
    }
    if (number < 0) {
      return number = reviews.length - 1;
    }
    return number;
  }

  const prevperson = () => {
    setIndex((index) => {
      let newPerson = index - 1;
      return checkNumber(newPerson);
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newPerson = index + 1;
      return checkNumber(newPerson);
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button onClick={prevperson} className="prev-btn">
          <FaChevronCircleLeft/>
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronCircleRight/>
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        suprise me
      </button>
    </article>
  )
}

export default Preview