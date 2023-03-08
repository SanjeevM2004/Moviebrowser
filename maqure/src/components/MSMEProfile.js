import './MSMEProfile.css';

const MSMEProfile = () => {
    return(
        <>
            <div class="container rounded  mt-4 mb-8" style={{backgroundImage : `url("https://i.postimg.cc/LscmGmck/494664.jpg")`}}>
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3" id="profile">
                            <h4 class="text-right"><b>Profile Settings</b></h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6 text-white"><label class="labels">First Name</label><input type="text" class="form-control" placeholder="first name" required/></div>
                            <div class="col-md-6 text-white"><label class="labels">Last name</label><input type="text" class="form-control" required placeholder="Last name"/></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12 text-white"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" required/></div>
                            <div class="col-md-12 text-white"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" required/></div>
                            <div class="col-md-12 text-white"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" required/></div>
                            <div class="col-md-12 text-white"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 3" required/></div>
                            <div class="col-md-12 text-white"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" required/></div>
                            <div class="col-md-12 text-white"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" required/></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6 text-white"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" required/></div>
                            <div class="col-md-6 text-white"><label class="labels">State/Region</label><input type="text" class="form-control" required placeholder="state"/></div>
                        </div>
                        <div className="experience-msme">
                        <div class="d-flex justify-content-between align-items-center text-white experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>
                        <div class="col-md-12 text-white"><label class="labels"><b>Experience in Designing</b></label><input type="text" class="form-control" placeholder="experience" required/></div>
                        <div class="col-md-12 text-white"><label class="labels"><b>Additional Details</b></label><input type="text" class="form-control" placeholder="additional details" required/></div>
                        <div class="mt-5 text-center"><button class="btn btn-primary-2" type="button" id="save-profile-msme"><b>Save Profile</b></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default MSMEProfile;