import React from "react";
import awsCloudImage from "../../Images/portfolio/aws_cloud.png";

const AwsCloudModal = () => {
  return (
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/*<!-- Portfolio Modal - Title-->*/}
                                    <h2 class="portfolio-modal-title text-secondary mb-0">AWS Development</h2>
                                    {/*<!-- Icon Divider-->*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/*<!-- Portfolio Modal - Image-->*/}
                                    <img class="img-fluid rounded mb-5" src={awsCloudImage} alt="..." />
                                    {/*<!-- Portfolio Modal - Text-->*/}
                                    <p class="mb-4">
                                        Highly experienced AWS Certified Developer. Have experiences of build an application from scrach for both server application (EC2) and server-less application (Lambda).
                                        For Server-less application, mainly make use of AWS Lambda, API Gateway, DynamoDB and Cognito for authentication.
                                        For EC2 based application, combined with EC2, RDS, S3.
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

export default AwsCloudModal;