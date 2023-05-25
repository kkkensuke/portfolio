import React from "react";
import nodeJSImage from "../../Images/portfolio/nodejs.png";

const NodeJSModal = () => {
  return (
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/*<!-- Portfolio Modal - Title-->*/}
                                    <h2 class="portfolio-modal-title text-secondary mb-0">NodeJS</h2>
                                    {/*<!-- Icon Divider-->*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/*<!-- Portfolio Modal - Image-->*/}
                                    <img class="img-fluid rounded mb-5" src={nodeJSImage} alt="..." />
                                    {/*<!-- Portfolio Modal - Text-->*/}
                                    <p class="mb-4">
                                        With extensive experience in NodeJS development, including on AWS Lambda, and a deep understanding of its framework and libraries, I am a highly capable developer offering expert solutions for building efficient and scalable cloud-based web applications using NodeJS and the AWS ecosystem. 
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

export default NodeJSModal;