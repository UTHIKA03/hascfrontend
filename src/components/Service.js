import React, { useState } from 'react'
import { Footer } from './Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-scroll';
import './service.css'
// import { Link } from 'react-router-dom';
export const Service = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleRequestService = () => {
        setShowSuccessMessage(true);
      };
  return (
    <div>
      <div className='service-title'><h1>Our Services</h1></div>
            <div className='services'>
                <div className='serv'>
                    <Card style={{ maxWidth: 400, height: 450,textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://media.istockphoto.com/id/1425979010/photo/portrait-of-young-male-technician-repairing-air-conditioner.jpg?s=612x612&w=0&k=20&c=edT7-RZJgD5aParAYbD97aUOgT1j9WgvhhVGgDcBa_c="
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Reparation
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{marginBottom:"2rem"}}>
                                    In order to provide the variegrated needs and demands of our customer,we provide efficient and repairing services for your wide range of home appliance. 
                                </Typography>
                                <Link to="formSection" smooth={true} duration={500} offset={-100}>
                                 <button>Enquire Now</button>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv'>
                    <Card sx={{ maxWidth: 400,textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://media.istockphoto.com/id/1096963798/photo/serviceman-repairing-refrigerator.jpg?s=612x612&w=0&k=20&c=nwVWXcvAVUxbWtv4XeUXnnDZ7yrkVh2JZUk-58IQmRM="
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Annual Maintenance Services
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    With the support of our talented team of professionlas, we are also engaged in providing annual maintenance services for your wide range of appliances.
                                </Typography>
                                <Link to="formSection" smooth={true} duration={500} offset={-100}>
                <button>Enquire Now</button>
              </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv' >
                    <Card sx={{ maxWidth: 400, height: 450,textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQRBB5kJMyFQZotNdotwDSmBo2kY-MEjyJA&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Spare parts Dealing
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{marginBottom:"2rem"}}>
                                    In order to fulfill clients varied needs and demands, we engaged in offering genuine and reliable spare parts for home appliances at market friendly prices.
                                </Typography>
                                <Link to="formSection" smooth={true} duration={500} offset={-100}>
                <button>Enquire Now</button>
              </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv' >
                    <Card sx={{ maxWidth: 400,textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://media.istockphoto.com/id/846037302/photo/working-man-plumber-repairs-washing-machine-in-laundry.jpg?s=612x612&w=0&k=20&c=QrUHGOe5NRg3autdNIChUBGnholwYWlR7Wi9GT2vUFU="
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Express Emergency Reparation
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We have our experts to deliver you an express emergency reparation service to support you as per your requirement with an approximate quotation.
                                </Typography>
                                <Link to="formSection" smooth={true} duration={500} offset={-100}>
                <button>Enquire Now</button>
              </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                
            </div>
            <div><h1 style={{textAlign:"center"}}>We Take Care Of...</h1></div>
            <div className='wetakecare'>
                <div className='maincontainer'>
                   <div className='thecard'>
                    <div className='thefront'><Card sx={{ maxWidth: 400, height: 420,textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/ac_1-sixteen_nine-_3.jpg?VersionId=qkpVYdZSqtVMgqe9ASDRQa0NDnPdWAjQ&size=690:388'
                                alt='Air Conditioner'
                            />
                            <CardContent style={{background:"grey",color:"white"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Air Conditioner
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </Card></div>
                    <div className='theback'>
                    <Card sx={{ maxWidth: 400, height: 420,textAlign: "center",background:"rgb(28, 24, 24)" }}>
                        <CardActionArea>
                            
                            <CardContent>
                                <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
                                    Express Reparation
                                </Typography>
                                <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                                When the kitchen hood fails, the kitchen becomes not the most pleasant place to stay as a mix of various smells permeates everything around. can help you solve this issue. We have extensive experience, skilled technicians, and original parts and can provide prompt same day repair. Our technicians work for you 6 days a week (Monday through Saturday) from  7 am till 7 pm. Just call us or indicate your phone number when leaving an online request on the website and we will contact you, pick a time convenient for you and arrange the range hood repair.
                                </Typography>
                                
                                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                   </div>
                   </div>
                <div className='maincontainer'>
                   <div className='thecard'>
                    <div className='thefront'><Card sx={{ maxWidth: 400, height: 420,textAlign: "center" }}>
                        <CardActionArea>
                        <CardMedia
                                component="img"
                                height="350"
                                src='https://www.businessinsider.in/thumb/msid-88535108,width-700,height-525,imgsize-188232/Large-capacity-fully-automatic-washing-machine.jpg'
                                alt='Washing Machine'
                            />
                            <CardContent style={{background:"grey",color:"white"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Washing Machine
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </Card></div>
                    <div className='theback'>
                    <Card sx={{ maxWidth: 400, height: 420,textAlign: "center",background:"rgb(28, 24, 24)" }}>
                        <CardActionArea>
        
                            <CardContent>
                                <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
                                    Express Reparation
                                </Typography>
                                <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                                Certified specialists of our company quickly and efficiently fix any breakdown of your appliance and give a warranty on services provided. We repair all types of washing machines (washer dryer combination, washer & dryer sets, top loading, front loading, portable and compact washing machines) and work with most manufacturers so we always have original parts and tools. If you need to have your washing machine repaired, you can call us any day. Our service works seven days a week and accepts applications every day.
                                </Typography>
                               
                                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                   </div>
                   </div>
                <div className='maincontainer'>
                   <div className='thecard'>
                    <div className='thefront'><Card sx={{ maxWidth: 400, height: 420,textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                src='https://media.product.which.co.uk/prod/images/900_450/gm-837b4ca1-45e0-443a-9392-88768311026e-smarttv1-470080.jpg'
                                alt='Television'
                            />
                            <CardContent style={{background:"grey",color:"white"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Television
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </Card></div>
                    <div className='theback'>
                    <Card sx={{ maxWidth: 400, height: 420,textAlign: "center",background:"rgb(28, 24, 24)" }}>
                        <CardActionArea>
                           
                            <CardContent>
                                <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
                                    Express Reparation
                                </Typography>
                                <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                                Has your microwave oven suddenly stopped working or reheating food properly? This is a signal that it needs to be shown to the technician as fast as possible. Contact Optimus Appliance & HVAC Inc., a comprehensive microwave oven repair service, and get prompt same day oven repair or diagnostics and repair of your microwave oven. Our company provides professional service for home and kitchen appliances every day (Monday through Saturday) during business hours from 7 am till 7 pm. Call us and we will quickly fix the problem.
                                </Typography>
                                
                                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                   </div>
                   </div>
                <div className='maincontainer'>
                   <div className='thecard'>
                    <div className='thefront'><Card sx={{ maxWidth: 400, height: 420,textAlign: "center" }}>
                        <CardActionArea>
                        <CardMedia
                                component="img"
                                height="350"
                                src='https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/types-of-refrigerators/types-of-refrigerators_1.jpg?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1'
                                alt='Refrigerator'
                            />
                            <CardContent style={{background:"grey",color:"white"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                   Refrigerator
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </Card></div>
                    <div className='theback'>
                    <Card sx={{ maxWidth: 400, height: 420,textAlign: "center",background:"rgb(28, 24, 24)" }}>
                        <CardActionArea>
                           
                            <CardContent>
                                <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
                                    Express Reparation
                                </Typography>
                                <Typography style={{color:"white"}} variant="body2" color="text.secondary">
                                Order refrigerator repair and freezer repair in Optimus Appliance & HVAC Inc. the same day you have detected a fault. Our skilled technicians will make every effort to repair your appliances as soon as possible. Our technicians regularly undergo advanced training and study the specifics of repairing new models and problems that may occur. 

We can repair your appliances not only at your house, but in restaurants, pubs, cafes and other places where the work flow can stop because of faulty refrigerator.
                                </Typography>
                                
                                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                   </div>
                   </div>
            </div>
            <div className='contact_us'>
            <div id="formSection" className='contain'>
              <div>.</div>
      <div className='form'>
        <h1>Send us a request to book an appointment</h1>
          <form>
            <div className='input-row'>
              <div className='input-group'>
            <input type='text' placeholder='Your Name*' required></input></div>
            
            
            <div className='input-group'>
            <input type='email' placeholder='Email*' required></input></div>
            <div className='input-group'>
            <input type='tel' placeholder='Phone number*' required></input></div>
            
            </div>
            <div className='input-address'>
                <div className='input-add'>
               <input type='text' placeholder='Your address*' required></input></div>
            
                <div className='input-add'>
                <input type='text' placeholder='ZIP code*' required></input></div>

            </div>
            <textarea rows={6} placeholder="Your review" required/>
            
            <button className='btn' onClick={handleRequestService}>Request Service</button>
       
          {showSuccessMessage && <div className="success-message">Your request has been submitted successfully!</div>}
           
          </form>
      </div></div>
      </div>
      
      <Footer/>
    </div>
  )
}
