import React from "react";
import boomiImage from "../../Images/portfolio/boomi.png";

const BoomiModal = () => {
  return (
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/*<!-- Portfolio Modal - Title-->*/}
                                    <h2 class="portfolio-modal-title text-secondary mb-0">Boomi Integration</h2>
                                    {/*<!-- Icon Divider-->*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/*<!-- Portfolio Modal - Image-->*/}
                                    <img class="img-fluid rounded mb-5" src={boomiImage} alt="..." />
                                    {/*<!-- Portfolio Modal - Text-->*/}
                                    <p class="mb-4">
                                        As a Boomi Professional Developer, with extensive experience in Boomi development and a deep understanding of its architecture, I am a highly capable consultant offering expert solutions for integrating and automating business processes using Boomi and its suite of tools.
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

export default BoomiModal;