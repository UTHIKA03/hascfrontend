import React, { useEffect, useState } from 'react'
import './wetake.css'
import axios from 'axios';
import { Footer } from './Footer';
// import { Link } from 'react-router-dom'
export const Review = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]); // State variable to store submitted reviews

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newReview = {
      name,
      email,
      phone,
      reviewText,
    };

    try {
      // Make a POST request to add the feedback to the backend
      await axios.post('http://localhost:8082/api/v1/feed/addFeedback', newReview);
      // Update the reviews state with the new feedback
      setReviews([...reviews, newReview]);
      // Reset the form fields
      setName('');
      setEmail('');
      setPhone('');
      setReviewText('');
      
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/v1/feed/getFeedback');
        setReviews(response.data); // Assuming the response data is an array of feedback objects
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"2.5rem"}}>Reviews</h1>
      <div className='review-container'>
      <div className='content-body'>
        <div className='rew-list'>
          <div className='review-content'>
            <div className='rew-rating'>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className='rew-text'>
              <p>My washing machine broke down and I didn’t know how to fix it! My friends advised me to call the master home, but I don’t understand this. Then I found Optimus Appliance in Google maps and called there. they came right away and repaired everything! Thanks guys!</p>
            </div>
            <div className='rew-autor'>Luna</div>
          </div>

        </div>
      </div>
      <div className='content-body'>
        <div className='rew-list'>
          <div className='review-content'>
            <div className='rew-rating'>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className='rew-text'>
              <p>My washing machine broke down and I didn’t know how to fix it! My friends advised me to call the master home, but I don’t understand this. Then I found Optimus Appliance in Google maps and called there. they came right away and repaired everything! Thanks guys!</p>
            </div>
            <div className='rew-autor'>Eleanor</div>
          </div>

        </div>
      </div>
      <div className='content-body'>
        <div className='rew-list'>
          <div className='review-content'>
            <div className='rew-rating'>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className='rew-text'>
              <p>Andrew had his work cut out for him with my GE washer. He easily coped with it,
after making a diagnosis of an elusory problem, finished the job and now my
washer is working well.  arrived when he said
and the workmanship and value was outstanding.</p>
            </div>
            <div className='rew-autor'>Aria</div>
          </div>

        </div>
      </div>
      <div className='content-body'>
        <div className='rew-list'>
          <div className='review-content'>
            <div className='rew-rating'>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className='rew-text'>
              
              {reviews.map((review, index) => (
                <div key={index}>
                  <p style={{color:"black"}}>{review.reviewText}</p>
                  <div className='rew-autor'>{review.name}</div>
                 
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>
            
      <div className="contact_us">
        <div className="contain">
          <div>.</div>
          <div className="form review-form">
            <h1>Write a review</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
              </div>
              <textarea
                rows={6}
                placeholder="Your review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                />
              <button type="submit" className="btn">
                Send Review
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// export const Review = () =>{
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }


