import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/*<!-- Footer Location-->*/}
                    <div class="col-sm-5 col-md-6">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Based on Melbourne
                        </p>
                    </div>
                    {/*<!-- Footer Social Icons-->*/}
                    <div class="col-sm-5 col-md-6">
                        <h4 class="text-uppercase mb-4">Connect SNS</h4>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kensuke-saiki/" class="btn btn-outline-light btn-social mx-1"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/kensukeeeeee/" class="btn btn-outline-light btn-social mx-1"><i class="fa-brands fa-facebook"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kkkensukee/?hl=en" class="btn btn-outline-light btn-social mx-1"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    {/*<!-- Footer About Text-->*/}
                    {/*
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div>
                    */}
                </div>
            </div>
      </footer>
      {/*Copyright*/}
      <div class="copyright py-4 text-center text-white">
          <div class="container"><small>Copyright &copy; kensukesaiki 2023</small></div>
      </div>
    </div>
  );
};

export default Footer;