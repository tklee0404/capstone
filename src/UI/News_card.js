import React from "react";


export default function CardExample() {
    return (
        
        <div>
            <div class="card removing:translate-x-5 removing:opacity-0 w-full transition duration-300 ease-in-out" id="card-dismiss" >
              
                <div class="card-body">
                    <h5 class="card-title mb-2.5">Important Update</h5>
                    <p class="mb-4">Stay informed with the latest updates and features that enhance your experience. Click on the icons above to refresh, maximize, or close this card.</p>
                    <a href="#" class="text-blue-500 hover:underline">Learn more</a>
                </div>
            </div>

            11111 11111 11111
            <div class="card bg-primary text-primary-content">
                <div class="card-body">
                    <h5 class="card-title text-primary-content mb-2.5">Customer Support</h5>
                    <p>Enhance customer satisfaction by providing timely and effective support solutions.</p>
                </div>
            </div>
            <div class="card bg-primary/20 border-primary text-primary border shadow-none">
                <div class="card-body">
                    <h5 class="card-title text-primary mb-2.5">Customer Support</h5>
                    <p>Enhance customer satisfaction by providing timely and effective support solutions.</p>
                </div>
            </div>
            <div class="card border-primary text-primary border bg-transparent shadow-none">
                <div class="card-body">
                    <h5 class="card-title text-primary mb-2.5">Customer Support</h5>
                    <p>Enhance customer satisfaction by providing timely and effective support solutions.</p>
                </div>
            </div>


        </div>


    );
}
