
function showStrand(strand) {
    const strandContentDiv = $('#strandContent');

    // Clear any previous content in the container
    strandContentDiv.empty();


    if (strand === 'STEM') {
        strandContentDiv.html(`
     
    <div class="content hide-scrollbar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-6"><img id="img-strand" src="assets/img/strands/STEM.jpg" class="img-fluid"></div>
                <div class="col-md-12 col-lg-6">
                    <h2 class="text-dark"><br><span
                            style="color:rgba(0, 0, 0, 0.5);">
                            The Science, Technology, Engineering, and Mathematics (STEM) strand</span><br><br></h2>
                    <hr>
                    <p class="text-black-50" <br>&nbsp;Is a strand that
                        aims to equip students with the necessary skills, knowledge, <br/>and  experience in science and technology-related
                        fields.The strand covers a wide range of subjects, including biology, physics, chemistry, computer
                        science,and mathematics. STEM strand exposes the student to more complex mathematics and science
                        concepts that aim to create a foundation of knowledge for future college degrees. The strand also includes
                        hands-on activities,laboratory experiments, and research projects to build up practical experiences<br><br></p>
                  
                </div>
            </div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">
                        <h2 style="font-weight: bold;">Science</h2>
                        <h6>Bachelor of Science</h6>
                        <ul class="list-course">
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
                        <ul class="list-course">
                            <li>Computer Science (BSCS)</li>
                            <li>Information Technology (BSIT)</li>
                            <li>Information System (BSIS)</li>
                        </ul>
                    </div>
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">


                        <h2 style="font-weight: bold;">Engineering</h2>
                        <h6>Bachelor of Science</h6>
                        <ul class="list-course">
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
                        <ul class="list-course"c>
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
                        <ul class="list-course">
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
                        <ul class="list-course">

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
    
    <div class="content hide-scrollbar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-6"><img id="strand" src="assets/img/strands/HUMSS.jpg"></div>
                <div class="col-md-12 col-lg-6">
                    <h2 class="text-dark" ><br><span
                            style="color:rgba(0, 0, 0, 0.5);">
                            The Humanities and Social Sciences (HUMSS) strand</span><br><br></h2>
                    <hr>
                    <p class="text-black-50"><br>&nbsp;Designed to help
                        students interested in pursuing a career in social sciences, humanities, and other
                        related fields. The strand also explores law, teaching, psychology, and sociology.
                        The HUMSS offers Philippine Politics and Governance, creative writing, world
                        religions and belief systems, and an introduction to world history. The HUMSS
                        strand also encourages extracurricular activities such as debate, writing, and
                        public speaking to improve critical thinking and communication skills.
                        <br><br>
                    </p>
                   
                </div>
            </div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">
                        <h2 style="font-weight: bold;">HUMSS CAREER</h2>
                        <h6>Bachelor of Art</h6>
                        <ul>
                            <li>Philosophy (AB Philosophy)</li>
                            <li>English (AB English)</li>
                            <li>Linguistics (AB Linguistics)</li>
                            <li>Literature (AB Literature)</li>
                            <li>Filipino (AB Filipino)</li>
                            <li>Islamic Studies (AB Islamic Studies)</li>
                            <li>Multimedia Arts (AB Multimedia Arts)</li>
                        </ul>
                        <br>

                    </div>

                    <hr class="mt-4 mb-4">
                    <div class="row mt-4">
                        <div class="col-md-6">

                            <h2 style="font-weight: bold;">Job Opportunities</h2>
                            <br>
                            <ul>
                                <li>Teacher</li>
                                <li>Lawyer</li>
                                <li>Psychologist</li>
                                <li>Author / Editor</li>
                                <li>Politician</li>
                                <li>Criminologist</li>
                                <li>Journalist</li>
                                <li>Police</li>
                                <li>News Anchor</li>
                                <li>Archaeologist</li>
                                <li>College Professor</li>
                                <li>Consultant</li>
                                <li>Cultural Anthropologist</li>
                            </ul>

                        </div>
                        <div class="col-md-6">
                            <br><br><br>
                            <ul>

                                <li>Editor/Writer</li>
                                <li>Geologist</li>
                                <li>Historian</li>
                                <li>Linguistic Anthropologist</li>
                                <li>Museum Curator</li>
                                <li>Park Interpreter</li>
                                <li>Physical Anthropologist</li>
                                <li>Oceanographer</li>
                                <li>Statistician</li>
                                <li>Travel agent/guide</li>
                                <li>Weather Forecaster</li>
                                <li>Economist</li>
                                <li>Political Scientist</li>
                                <li>Sociologist</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
        `);
    } else if (strand === 'ABM') {
        strandContentDiv.html(`
        <div class="container">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
    </div>
    <div class="content hide-scrollbar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-6"><img id="strand" src="assets/img/strands/ABM.jpg"></div>
                <div class="col-md-12 col-lg-6">
                    <h2 class="text-dark" style="padding-top:20px;padding-left:15px;padding-right:15px;"><br><span
                            style="color:rgba(0, 0, 0, 0.5);">
                            The Accountacy, Business and Management (ABM) strand</span><br><br></h2>
                    <hr>
                    <p class="text-black-50" style="padding-left:15px;padding-right:15px;"><br>&nbsp;Focuses on teaching
                        business management concepts such as accounting, finance, operations,
                        entrepreneurship, business mathematics, and marketing. The strand teaches
                        subjects such as applied economics, fundamentals of ABM, business math and
                        finance, organization and management, principles of marketing, and marketing
                        simulation. ABM strand equips the students with the skills and knowledge to be
                        business professionals in a highly competitive industry.<br><br></p>

                </div>
            </div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">
                        <h2 style="font-weight: bold;">Accountacy</h2>
                        <h6>Bachelor of Science</h6>
                        <ul>
                            <li>Accountancy (BSA)</li>
                            <li>Accounting Technology (BSAcT)</li>
                            <li>Accounting Information Systems (BSAIS)</li>
                        </ul>
                        <br>

                        <h2 style="font-weight: bold;">Business</h2>
                        <h6>Bachelor of Science Business Administration Majors</h6>
                        <ul>
                            <li>Business Economics (BSBA)</li>
                            <li>Financial Management (BSBA major in FM)</li>
                            <li>Human Resource Development (BSBA major in HRDM)</li>
                            <li>Marketing Management (eBSBA major in MM)</li>
                            <li>Operations Management (BSBA major in OM)</li>
                            <li>Entrepreneurship (BS Entrep)</li>
                            <li>Agribusiness (BS Agribusiness)</li>

                        </ul>
                    </div>
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">


                        <h2 style="font-weight: bold;">Management</h2>
                        <h6>Bachelor of Science</h6>
                        <ul>
                            <li>Hotel and Restaurant Management (BS HRM)</li>
                            <li>Office Administration (BSOA)</li>
                            <li>Real Estate Management (BS REM)</li>
                            <li>Tourism Management (BSTM)</li>
                            <li>Community Development (BS Community Development)</li>
                            <li>Foreign Service (BS Foreign Service)</li>
                            <li>International Studies (BSIS)</li>
                            <li>Public Safety (BSPS)</li>
                            <li>Social Work (BS Social Work)</li>
                        </ul>
        
                    </div>

                </div>
                <hr class="mt-4 mb-4">
                <div class="row mt-4">
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">

                        <h2 style="font-weight: bold;">Job Opportunities</h2>
                        <br>
                        <ul>
                            <li>Hotel and Restaurant Management (BS HRM)</li>
                            <li>Office Administration (BSOA)</li>
                            <li>Real Estate Management (BS REM)</li>
                            <li>Tourism Management (BSTM)</li>
                        </ul>

                    </div>
                    <div class="col-md-6" style="list-style-position:inside; text-align: left;">
                        <br><br><br>
                        <ul>

                            <li>Community Development (BS Community Development)</li>
                            <li>Foreign Service (BS Foreign Service)</li>
                            <li>International Studies (BSIS)</li>
                            <li>Public Safety (BSPS)</li>
                            <li>Social Work (BS Social Work)</li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
        `);
    }

    $('#strandModal').modal('show'); 
    }

// JavaScript function to close the modal and enable scrolling
function hideModalAndEnableScroll() {
    $('#strandModal').modal('hide');
    $('body').css('overflow', 'auto'); // Re-enable scrolling on the body
    // Additional logic if needed
}


function getStrandTitle(strand) {
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
    