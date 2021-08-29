import React from 'react'; 
function Profile() {
    return (
        <section class="tm-section">
            <div class="container-fluid"> 
                <div class="container rounded bg-white mt-5 mb-5">
                    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Thong Nguyen</span><span class="text-black-50">thongnguyentam@gmail.com</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="Thong"/></div>
                                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" placeholder="surname" value="Nguyen"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="Phone number" value="0969696969"/></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="Address line 1" value = "153 Nguyen Chi Thanh"/></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="Address line 2" /></div>
                    <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="Postcode" value ="70000"/></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="State" value="Vietnam"/></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="Area" value=""/></div>
                                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="Email" value="thongnguyentam2k4@gmail.com"/></div>
                    <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="Education" value ="High School"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="Country" value = "Vietnam"/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" placeholder="State" value = "HCMC"/></div>
                </div>
            </div>
        </div>
        </div>
                </div>
            </div>
        </section>
    );
}
export default Profile;
