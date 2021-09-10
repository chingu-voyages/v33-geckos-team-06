import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div>
        <div class="sign-up-box"> 
        <div class="create-title">Create an account on Gekch.io
        </div>
        


        <hr class="hr"></hr>
        <form>
          <div class="sign-up-form">
            
            <div class="form-input">
              <div class="input">
                <label for="new-username">Create username</label><br></br>
                <input type="text" id="new-username" name="new-usernamee" placeholder="username" autofocus>
                </input>
              </div>

              <div class="input"> 
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" placeholder="password" autofocus></input>
              </div>
              
              <div class="input"> 
                <label for="repeat-password">Repeat Password</label><br></br>
                <input type="text" id="repeat-password" name="repeat-password" placeholder="password" autofocus></input>
              </div>

              <div class="input"> 
                <label for="email-address">Email Address</label><br></br>
                <input type="text" id="email-address" name="email-adress" placeholder="email address" autofocus></input>
              </div>

              <div class="submit-button">
          <input type="submit" class="button" value="Create account"></input>
          <div>
            <p class="login-option">or already have an account? <a href="/login-page">Login in</a></p>
          </div>
          </div>
          </div>
          


<div class="vl"></div>

        <div class="right-side-signup">
            <div>
              <p class="register">Why register?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum delectus facilis dolores pariatur veritatis quas molestias natus quo dolor qui velit nesciunt hic odio, repellendus quaerat corporis unde sed veniam!</p>
              <p class="register">I want to start a collection of new content!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum delectus facilis dolores pariatur veritatis quas molestias natus quo dolor qui velit nesciunt hic odio, repellendus quaerat corporis unde sed veniam</p>

            </div>

        </div>

          </div>
        </form>

        
    </div>
        </div>
    )
}

export default index
