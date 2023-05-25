import React from "react";
import awsMigrationImage from "../../Images/portfolio/aws_migration.png";

const AWSMigModal = () => {
  return (
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/*<!-- Portfolio Modal - Title-->*/}
                                    <h2 class="portfolio-modal-title text-secondary mb-0">AWS Consultation</h2>
                                    {/*<!-- Icon Divider-->*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/*<!-- Portfolio Modal - Image-->*/}
                                    <img class="img-fluid rounded mb-5" src={awsMigrationImage} alt="..." />
                                    {/*<!-- Portfolio Modal - Text-->*/}
                                    <p class="mb-4">
                                        With extensive knowledge and hands-on experience in AWS, including AWS Migration and AWS Cost Optimization, I am a highly capable consultant offering expert guidance on cloud migration strategies and best practices to ensure seamless and secure transitions to the AWS cloud, as well as tailored solutions for optimal utilization of AWS services.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default AWSMigModal;