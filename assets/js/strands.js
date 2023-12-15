// Function to display content based on the selected strand
function showStrand(strand) {
    const strandContentDiv = $('#strandContent');

    // Clear any previous content in the container
    strandContentDiv.empty();

    // Generate content based on the selected strand
    if (strand === 'STEM') {
        strandContentDiv.html(`
        <div class="container">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
    </div>
    <div class="content hide-scrollbar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-6"><img id="strand" src="assets/img/strands/STEM.jpg"></div>
                <div class="col-md-12 col-lg-6">
                    <h2 class="text-dark" style="padding-top:20px;padding-left:15px;padding-right:15px;"><br><span
                            style="color:rgba(0, 0, 0, 0.5);">
                            The Science, Technology, Engineering, and Mathematics (STEM) strand</span><br><br></h2>
                    <hr>
                    <p class="text-black-50" style="padding-left:15px;padding-right:15px;"><br>&nbsp;Is a strand that
                        aims to equip students
                        with the necessary skills, knowledge, and<br>experience in science and technology-related
                        fields.The strand covers a wide<br>range of subjects, including biology, physics, chemistry, computer
                        science,and<br>mathematics. STEM strand exposes the student to more complex mathematics<br>and science
                        concepts that aim to create a foundation of knowledge for future<br>college degrees. The strand also includes
                        hands-on activities,laboratory<br>experiments, and research projects to build up practical experiences<br><br></p>
                  
                </div>
            </div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">
                        <h2 style="font-weight: bold;">Science</h2>
                        <h6>Bachelor of Science</h6>
                        <ul>
                            <li>Environmental Science (BSES)</li>
                            <li>Geology (BS Geology)</li>
                            <li>Molecular Biology (BS Molecular Biology)</li>
                            <li>Physics (BS Physics)</li>
                            <li>Applied Physics (BS Applied Physics)</li>
                            <li>Chemistry (BS Chemistry)</li>
                            <li>Food Technology (BS Food Technology)</li>
                            <li>Nutrition and Dietetics (BS Nutrition and Dietetics)</li>
                            <li>Medical Technology (BS Med Tech)</li>
                            <li>Midwifery (BS Midwifery)</li>
                            <li>Nursing (BSN)</li>
                            <li>Occupational Therapy (BSOT)</li>
                            <li>Pharmacy (BS Pharmacy)</li>
                            <li>Radiologic Technology (BS Rad Tech)</li>
                            <li>Respiratory Therapy (BSRT)</li>
                            <li>Speech-Language Pathology</li>
                        </ul>
                        <br>
                        <br>
                        <h2 style="font-weight: bold;">Technology</h2>
                        <h6>Bachelor of Science</h6>
                        <ul>
                            <li>Computer Science (BSCS)</li>
                            <li>Information Technology (BSIT)</li>
                            <li>Information System (BSIS)</li>
                        </ul>
                    </div>
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">


                        <h2 style="font-weight: bold;">Engineering</h2>
                        <h6>Bachelor of Science</h6>
                        <ul>
                            <li>Aeronautical Engineering (BS AeroE)</li>
                            <li>Ceramic Engineering (BSCerE)</li>
                            <li>Chemical Engineering (BSChE)</li>
                            <li>Civil Engineering (BSCE)</li>
                            <li>Computer Engineering (BSCpE)</li>
                            <li>Electrical Engineering (BSEE)</li>
                            <li>Electronics and Communications Engineering (BSECE)</li>
                            <li>Geodetic Engineering (BSGE)</li>
                            <li>Geological Engineering (BSGeoE)</li>
                            <li>Industrial Engineering (BSIE)</li>
                            <li>Marine Engineering (BSMarE)</li>
                            <li>Materials Engineering (BSMatE)</li>
                            <li>Mechanical Engineering (BSME)</li>
                            <li>Metallurgical Engineering (BSMetE)</li>
                            <li>Mining Engineering (BSEM)</li>
                            <li>Petroleum Engineering (BSPetE)</li>
                            <li>Sanitary Engineering (BSSE)</li>
                            <li>Marine Transportation (BSMT)</li>
                        </ul>
                        <h2 style="font-weight: bold;">Mathematics</h2>
                        <h6>Bachelor of Science</h6>
                        <ul>
                            <li>Mathematics (BS Mathematics)</li>
                            <li>Applied Mathematics (BS Applied Mathematics)</li>
                            <li>Statistics(BS Stat)</li>
                        </ul>
                    </div>



                </div>
                <hr class="mt-4 mb-4">
                <div class="row mt-4">
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">

                        <h2 style="font-weight: bold;">Job Opportunities</h2>
                        <br>
                        <ul>
                            <li>Medical doctors</li>
                            <li>Dentists</li>
                            <li>Health Care Professionals</li>
                            <li>Engineers</li>
                            <li>Scientists</li>
                            <li>Agriculture</li>
                            <li>Statistics</li>
                        </ul>

                    </div>
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">
                        <br><br><br>
                        <ul>

                            <li>Architects</li>
                            <li>Computer Technician</li>
                            <li>Welders</li>
                            <li>Machinists</li>
                            <li>Manufacturing Technologists</li>
                            <li>Electricians</li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
        `);
    } else if (strand === 'HUMSS') {
        strandContentDiv.html(`
            <!-- Content for HUMSS strand -->
            <!-- Replace with your desired content -->
            <h2>HUMSS Strand</h2>
            <p>This is the content for the HUMSS strand...</p>
        `);
    } else if (strand === 'ABM') {
        strandContentDiv.html(`
            <!-- Content for ABM strand -->
            <!-- Replace with your desired content -->
            <h2>ABM Strand</h2>
            <p>This is the content for the ABM strand...</p>
        `);
    }

    // Show the generated content in a popup or modal
    // You can use your preferred method to display this content as a popup/modal
    // For instance, you can use a Bootstrap modal or a custom popup implementation
    // Example using Bootstrap modal:
    $('#strandModal').modal('show'); // Show Bootstrap modal
}
$('.btn-open-modal').on('click', function () {
    var strand = $(this).data('strand'); // Get the strand from the clicked button

    // Set the modal title based on the strand
    var title = getStrandTitle(strand);
    $('#strandModalLabel').text(title);

    // Show the modal
    $('#strandModal').modal('show');
});

// Function to get the title based on the selected strand (you can modify this function based on your requirement)
function getStrandTitle(strand) {
    // Example titles based on different strands
    if (strand === 'STEM') {
        return 'Science, Technology, Engineering, and Mathematics (STEM) Strand';
    } else if (strand === 'HUMSS') {
        return 'Humanities and Social Sciences (HUMSS) Strand';
    } else if (strand === 'ABM') {
        return 'Accountancy, Business, and Management (ABM) Strand';
    } else {
        return 'Strand Details';
    }
}
$(document).on('click', '[data-dismiss="modal"]', function () {
    // Close the modal
    $('#strandModal').modal('hide');

    // Delay the back navigation to ensure the modal is fully closed
    setTimeout(function() {
        // Navigate back to the result page
        window.history.back();
    }, 500); // Adjust the delay timing if needed
});