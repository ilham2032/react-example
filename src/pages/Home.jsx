import React from 'react'
import Button from '../components/Button'


const Home= () => {
  return (
    <div className='h-[6000px]'>
      
      <div className='bg-blue-700'>
      <div className='flex'>
          <h1 className='text-white font-light text-[35px] ml-[70px]' >Arsha</h1>

          <ul className='flex gap-[20px] mt-[18px] ml-[330px]'>
              <li className='text-blue-300 font-normal text-[15px]'>Home</li>
              <li className='text-white font-normal text-[15px]'>About</li>
              <li className='text-white font-normal text-[15px]'>Services</li>
              <li className='text-white font-normal text-[15px]'>Portfolio</li>
              <li className='text-white font-normal text-[15px]'>Team</li>
              <li className='text-white font-normal text-[15px]'>Pricing</li>
              <li className='text-white font-normal text-[15px]'>Dropdown</li>
              <li className='text-white font-normal text-[15px]'>Contact</li>
          </ul>
          
          <Button className='text-white bg-blue-500 px-[26px]  rounded-3xl ml-[220px]' >Get started</Button>

      </div>

        <div >

          <div className='max-w-[550px] mt-[200px] ml-[50px]'>
          <h1 className='text-white font-bold text-[45px] '>Better Solutions For Your Business</h1>
          <p className='text-gray-300 font-semibold text-[25px]'>We are team of talented designers making websites with Bootstrap</p>
          <Button className='text-white bg-blue-400 px-[26px] py-[5px] rounded-3xl text-[18px]' >Get Started </Button>
          <a className='text-white font-medium text-[18px] ml-[20px]'  href="#">Watch Video</a>
          </div>

          <div>
          <img className='ml-[700px] mt-[-400px]' src="https://bootstrapmade.com/content/demo/Arsha/assets/img/hero-img.png" alt="" />
          </div>

        </div>
        </div>

        <div>
          <h1 className='text-center font-semibold text-[35px] text-blue-900 mt-[70px]'>About Us</h1>

          <div className='max-w-[600px]'>
          <p className='mt-[50px] ml-[150px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

            <ul className='ml-[150px] mt-[30px]'>
              <li> <i class="fa-solid fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li> <i class="fa-solid fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li> <i class="fa-solid fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo.</li>
            </ul>

          <div className='max-w-[650px] ml-[800px] mt-[-150px]'>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button className='text-blue-400 border-2 border-blue-400 px-[26px] py-[10px]'> Read more </Button>        
          </div>

        

        </div>

        <div className='bg-gray-200 h-[600px]'>
          <h1 className='font-meidum text-blue-900 text-[35px] ml-[50px] mt-[80px]'>Eum ipsam laborum deleniti <span className='font-bold'>velit pariatur architecto aut nihil </span> </h1>
          <p className='font-medium text-gray-500 text-[17px] mt-[10px] max-w-[800px] ml-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
          
          <div>

              <div className='bg-white ml-[50px] mt-[30px] max-w-[800px]'>
                  <h3 className='text-blue-400 font-semibold text-[18px]'>01 Non consectetur a erat nam at lectus urna duis?</h3>
                    <p className='max-w-[700px]'>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              </div>

              <div  className='bg-white ml-[50px] mt-[30px] max-w-[800px]'>
                  <h3 className='text-blue-400 font-semibold text-[18px]'>02 Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
                  <p className='max-w-[700px]'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              </div>

              <div  className='bg-white ml-[50px] mt-[30px] max-w-[800px]'>
                  <h3 className='text-blue-400 font-semibold text-[18px]'>03 Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                  <p className='max-w-[700px]'>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
              </div>



          </div>

        <div>
            <img className='h-[400px] ml-[950px] mt-[-400px]' src="https://bootstrapmade.com/content/demo/Arsha/assets/img/why-us.png" alt="" />
          </div>

        </div>

          <div className='mt-[50px] bg-gray-200 h-[500px]'>
              <h1 className='text-center font-semibold text-blue-900 text-[45px]'>Services</h1>
              <p className='text-center font-normal text-[17px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

          <div className='flex gap-[17px] mt-[30px] ml-[134px]'>
              <div className='bg-white w-[300px] h-[300px]'>
              <i className="fa-solid fa-wave-square text-[29px] ml-[20px] mt-[20px]"></i>
              <h1 className='text-[27px] font-semibold text-blue-900 mt-[30px] ml-[20px]'>Lorem Ipsum</h1>
              <p className='text-[17px] max-w-[300px] mt-[15px] ml-[20px]'>Voreptatum deleniti atque corrupti quos dolores et quas molestais excepturi</p>
              </div>

              <div className='bg-white w-[300px] h-[300px]'>
              <i className="fa-brands fa-squarespace text-[29px] ml-[20px] mt-[20px]"></i>
              <h1 className='text-[27px] font-semibold text-blue-900 mt-[30px] ml-[20px]'>Sed ut perspicti</h1>
              <p className='text-[17px] max-w-[300px] mt-[15px] ml-[20px]'>Voreptatum deleniti atque corrupti quos dolores et quas molestais excepturi</p>
              </div>

              <div className='bg-white w-[300px] h-[300px]'>
              <i className="fa-solid fa-calendar-days text-[29px] ml-[20px] mt-[20px]"></i>
              <h1 className='text-[27px] font-semibold text-blue-900 mt-[30px] ml-[20px]'>Magni Dolores</h1>
              <p className='text-[17px] max-w-[300px] mt-[15px] ml-[20px]'>Voreptatum deleniti atque corrupti quos dolores et quas molestais excepturi</p>
              </div>

              <div className='bg-white w-[300px] h-[300px]'>
              <i className="fa-solid fa-mobile-retro text-[29px] ml-[20px] mt-[20px]"></i>
              <h1 className='text-[27px] font-semibold text-blue-900 mt-[30px] ml-[20px]'>Nemo Enim</h1>
              <p className='text-[17px] max-w-[300px] mt-[15px] ml-[20px]'>Voreptatum deleniti atque corrupti quos dolores et quas molestais excepturi</p>
              </div>
          </div>

          </div>

        <div className='bg-blue-500 h-[200px] '>  
          
          <h1 className='text-white font-semibold text-[35px] font-mono mt-[40px]'>Call to action</h1>
          <p className='text-white text-[17px] max-w-[1000px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div>
          <Button className='text-white font-semibold border-2 px-[26px] py-[10px] rounded-3xl ml-[1200px] '>Call to action</Button>
          </div>
        
        </div>

        <div className='bg-gray-100 h-[600px] mt-[40px]'>
            <h1 className='text-center font-bold text-blue-900 text-[35px]'>Team</h1>
            <p className='text-center font-semibold text-[18px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      <div className='flex ml-[30px] mt-[30px]'>
            <div className='bg-white py-[10px] flex max-w-[600px] ml-[130px]'>
                <div>
                  <img className='h-[150px] rounded-full' src="https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-1.jpg" alt="" />
                </div>

                <div>
                    <h3 className='text-blue-900 font-semibold ml-[20px] mt-[10px] text-[25px]'>Walter White</h3>
                    <h5 className='font-medium ml-[20px] mt-[5px] text-[15px]'>Chief Executive Officer</h5>
                    <p className='font-medium ml-[20px] mt-[5px] text-[15px]'>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                     
                      <div className='ml-[20px]'>
                        <i className="fa-brands fa-x-twitter bg-gray-300 p-3 rounded-3xl "></i>
                        <i className="fa-brands fa-facebook bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-instagram bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-linkedin bg-gray-300 p-3 rounded-3xl"></i>
                      </div>
                
                </div>
              


            </div>  


            <div className='bg-white py-[10px] flex max-w-[600px] ml-[60px]'>
                <div>
                  <img className='h-[150px] rounded-full' src="https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-2.jpg" alt="" />
                </div>

                <div>
                    <h3 className='text-blue-900 font-semibold ml-[20px] mt-[10px] text-[25px]'>Sarah Jhonson</h3>
                    <h5 className='font-medium ml-[20px] mt-[5px] text-[15px]'>Product Manager</h5>
                    <p className='font-medium ml-[20px] mt-[5px] text-[15px]'>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                     
                      <div className='ml-[20px]'>
                        <i className="fa-brands fa-x-twitter bg-gray-300 p-3 rounded-3xl "></i>
                        <i className="fa-brands fa-facebook bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-instagram bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-linkedin bg-gray-300 p-3 rounded-3xl"></i>
                      </div>
                
                </div>
              
                

            </div>  

    </div>

    <div className='flex mt-[50px] ml-[30px]'>
            <div className='bg-white py-[10px] flex max-w-[600px] ml-[130px]'>
                <div>
                  <img className='h-[150px] rounded-full' src="https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-3.jpg" alt="" />
                </div>

                <div>
                    <h3 className='text-blue-900 font-semibold ml-[20px] mt-[10px] text-[25px]'>William Anderson</h3>
                    <h5 className='font-medium ml-[20px] mt-[5px] text-[15px]'>CTO</h5>
                    <p className='font-medium ml-[20px] mt-[5px] text-[15px]'>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                     
                      <div className='ml-[20px]'>
                        <i className="fa-brands fa-x-twitter bg-gray-300 p-3 rounded-3xl "></i>
                        <i className="fa-brands fa-facebook bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-instagram bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-linkedin bg-gray-300 p-3 rounded-3xl"></i>
                      </div>
                
                </div>
              
                

            </div>  


            <div className='bg-white py-[10px] flex max-w-[600px] ml-[60px]'>
                <div>
                  <img className='h-[150px] rounded-full' src="https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-4.jpg" alt="" />
                </div>

                <div>
                    <h3 className='text-blue-900 font-semibold ml-[20px] mt-[10px] text-[25px]'>Amanda Jepson</h3>
                    <h5 className='font-medium ml-[20px] mt-[5px] text-[15px]'>Accountant</h5>
                    <p className='font-medium ml-[20px] mt-[5px] text-[15px]'>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                     
                      <div className='ml-[20px]'>
                        <i className="fa-brands fa-x-twitter bg-gray-300 p-3 rounded-3xl "></i>
                        <i className="fa-brands fa-facebook bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-instagram bg-gray-300 p-3 rounded-3xl"></i>
                        <i className="fa-brands fa-linkedin bg-gray-300 p-3 rounded-3xl"></i>
                      </div>
                
                </div>
              
                

            </div>  

            </div>



        </div>


        <div className='bg-gray-100 h-[550px] mt-[40px]'>
            <h1 className='text-center text-blue-900 font-bold text-[45px]'>Pricing</h1>
            <p className='text-center text-[19px] font-semibold'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

            <div className='flex ml-[170px] mt-[20px]'>

                <div className='bg-white max-w-[320px] ml-[50px] w-[800px]'>
                  <h4 className='text-blue-900 font-bold text-[18px] ml-[30px] mt-[10px]'>Free plan</h4>
                  <p className='text-[45px] text-blue-400 font-medium ml-[30px] mt-[5px]'>0$ <span className='text-[19px] text-gray-300 font-medium'> / month</span> </p>

                  <ul className='ml-[30px] mt-[5px]'>
                    <li> <i className="fa-solid fa-check text-green-600"></i> Quam adipiscing vitae proin </li>
                    <br />
                    <li>  <i className="fa-solid fa-check text-green-600"></i> Nec feugiat nisl pretium</li>
                    <br />
                    <li>  <i className="fa-solid fa-check text-green-600"></i> Nulla at volutpat diam uteera</li>
                    <br />
                    <li> <i className="fa-solid fa-xmark text-red-600"></i> Pharetra massa massa ultricies  </li>
                    <br />
                    <li> <i className="fa-solid fa-xmark text-red-600"></i> Massa ultricies mi quis hendrerit  </li>
                  </ul>

                  <Button className='text-blue-400 border-2 border-blue-400 px-[26px] py-[10px] rounded-3xl ml-[25px] mt-[10px]' >Buy now</Button>

                </div>

                <div className='bg-white max-w-[320px] ml-[50px] w-[800px]'>
                  <h4 className='text-blue-900 font-bold text-[18px] ml-[30px] mt-[10px]'>Free plan</h4>
                  <p className='text-[45px] text-blue-400 font-medium ml-[30px] mt-[5px]'>29$ <span className='text-[19px] text-gray-300 font-medium'> / month</span> </p>

                  <ul className='ml-[30px] mt-[5px]'>
                    <li> <i className="fa-solid fa-check text-green-600"></i> Quam adipiscing vitae proin </li>
                    <br />
                    <li>  <i className="fa-solid fa-check text-green-600"></i> Nec feugiat nisl pretium</li>
                    <br />
                    <li>  <i className="fa-solid fa-check text-green-600"></i> Nulla at volutpat diam uteera</li>
                    <br />
                    <li> <i className="fa-solid fa-check text-green-600"></i> Pharetra massa massa ultricies  </li>
                    <br />
                    <li> <i className="fa-solid fa-check text-green-600"></i> Massa ultricies mi quis hendrerit  </li>
                  </ul>

                  <Button className='text-white bg-blue-500 px-[26px] py-[10px] rounded-3xl ml-[25px] mt-[10px]' >Buy now</Button>

                </div>

                <div className='bg-white max-w-[320px] ml-[50px] w-[800px]'>
                  <h4 className='text-blue-900 font-bold text-[18px] ml-[30px] mt-[10px]'>Free plan</h4>
                  <p className='text-[45px] text-blue-400 font-medium ml-[30px] mt-[5px]'>49$ <span className='text-[19px] text-gray-300 font-medium'> / month</span> </p>

                  <ul className='ml-[30px] mt-[5px]'>
                    <li> <i className="fa-solid fa-check text-green-600"></i> Quam adipiscing vitae proin </li>
                    <br />
                    <li>  <i className="fa-solid fa-check text-green-600"></i> Nec feugiat nisl pretium</li>
                    <br />
                    <li>  <i className="fa-solid fa-check text-green-600"></i> Nulla at volutpat diam uteera</li>
                    <br />
                    <li> <i className="fa-solid fa-check text-green-600"></i> Pharetra massa massa ultricies  </li>
                    <br />
                    <li> <i className="fa-solid fa-check text-green-600"></i> Massa ultricies mi quis hendrerit  </li>
                  </ul>

                  <Button className='text-blue-400 border-2 border-blue-400 px-[26px] py-[10px] rounded-3xl ml-[25px] mt-[10px]' >Buy now</Button>

                </div>

            </div>


        </div>


        <div className='bg-gray-200 h-[850px] mt-[40px]'>
          <h1 className='text-center text-blue-900 font-bold text-[45px]'>Frequently asked question</h1>
          <p className='text-center font-medium text-[19px]'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

          <div className='ml-[20px] mt-[30px] bg-white max-w-[800px] py-[5px] ml-[350px]'>
              <h3 className='text-blue-400 font-semibold ml-[10px] mt-[5px] '> <i class="fa-solid fa-question"></i> Non consectetur a erat nam at lectus urna duis?</h3>
              <p className='font-normal ml-[10px] mt-[3px]'>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
          </div>
        
          <div className='ml-[20px] mt-[30px] bg-white max-w-[800px] py-[5px] ml-[350px]'>
              <h3 className='text-blue-400 font-semibold ml-[10px] mt-[5px] '> <i class="fa-solid fa-question"></i> Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
              <p className='font-normal ml-[10px] mt-[3px]'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
          </div>
        
          <div className='ml-[20px] mt-[30px] bg-white max-w-[800px] py-[5px] ml-[350px]'>
              <h3 className='text-blue-400 font-semibold ml-[10px] mt-[5px] '> <i class="fa-solid fa-question"></i> Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
              <p className='font-normal ml-[10px] mt-[3px]'>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
          </div>

          <div className='ml-[20px] mt-[30px] bg-white max-w-[800px] py-[5px] ml-[350px]'>
            <h3 className='text-blue-400 font-semibold ml-[10px] mt-[5px] '> <i class="fa-solid fa-question"></i> Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
            <p className='font-normal ml-[10px] mt-[3px]'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
          </div>

          <div className='ml-[20px] mt-[30px] bg-white max-w-[800px] py-[5px] ml-[350px]'>
            <h3 className='text-blue-400 font-semibold ml-[10px] mt-[5px] '> <i class="fa-solid fa-question"></i> Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h3>
            <p className='font-normal ml-[10px] mt-[3px]'>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
          </div>

        </div>


        <div className='bg-gray-200 mt-[40px] h-[500px]'>
            <h1 className='text-blue-900 font-bold text-center text-[45px]'>Contact</h1>
            <p className='text-center font-medium text-[19px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

            <div className='flex'>

                <div className='bg-white max-w-[500px] ml-[230px] mt-[50px] w-[500px] h-[300px]'>

                <i className="fa-solid fa-location-dot bg-blue-300 rounded-full p-3 mt-[30px] ml-[10px]"></i>
                <h1 className='ml-[50px] mt-[-45px] text-blue-900 text-[19px] font-semibold'>Address</h1>
                <p className='ml-[50px]'>A108 Adam Street, New York, NY 535022</p>

                <i className="fa-solid fa-phone bg-blue-300 rounded-full p-3 mt-[30px] ml-[10px]"></i>
                <h1 className='ml-[50px] mt-[-45px] text-blue-900 text-[19px] font-semibold'>Call us</h1>
                <p className='ml-[50px]'>+1 5589 55488 55</p>

                <i className="fa-solid fa-phone bg-blue-300 rounded-full p-3 mt-[30px] ml-[10px]"></i>
                <h1 className='ml-[50px] mt-[-45px] text-blue-900 text-[19px] font-semibold'>Email</h1>
                <p className='ml-[50px]'>info@example.com</p>

                </div>

                <div className='bg-white ml-[50px] w-[500px] h-[300px] mt-[50px]'>

                  <div className='flex gap-[10px]'>
                <div>
                  <h1>Your Name</h1>                               
                  <input className='border-2 p-2' type="text" placeholder='name'/>            
                 </div>

                <div>
                  <h1>Your Email</h1>
                  <input className='border-2 p-2' type="text" placeholder='info@example.com'/>
                  </div>

                  </div>

                  <h1>Subject</h1>
                  <input className='px-[56px] border-2 py-[10px]' type="text" />

                  <h1>Message</h1>
                  <input className='px-[56px] border-2 py-[10px]' type="text" />

                  <div className='mt-[30px] ml-[170px]'>
                  <Button className='text-white rounded-3xl bg-blue-400 px-[26px] py-[10px]' >Send Message</Button>
                  </div>

                </div>




            </div>

        </div>

    </div>
  )
}

export default Home