import React from "react";
import awsDevopsImage from "../../Images/portfolio/aws_devops.png";

const AwsDevOpsModal = () => {
  return (
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/*<!-- Portfolio Modal - Title-->*/}
                                    <h2 class="portfolio-modal-title text-secondary mb-0">AWS DevOps</h2>
                                    {/*<!-- Icon Divider-->*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/*<!-- Portfolio Modal - Image-->*/}
                                    <img class="img-fluid rounded mb-5" src={awsDevopsImage} alt="..." />
                                    {/*<!-- Portfolio Modal - Text-->*/}
                                    <p class="mb-4">
                                        With deep expertise in AWS DevOps and a thorough understanding of AWS tools and services, including AWS CodePipeline, AWS CloudFormation, and AWS CodeBuild, I am a highly capable consultant offering comprehensive solutions and best practices to optimize DevOps processes and enhance the overall performance of AWS applications.
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

export default AwsDevOpsModal;