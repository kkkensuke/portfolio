import React from "react";
import Masthead from "./Masthead"
import awsCloudImage from "../Images/portfolio/aws_cloud.png";
import awsMigrationImage from "../Images/portfolio/aws_migration.png";
import awsDevopsImage from "../Images/portfolio/aws_devops.png";
import nodeJSImage from "../Images/portfolio/nodejs.png";
import snowImage from "../Images/portfolio/serviceNow.png";
import boomiImage from "../Images/portfolio/boomi.png";
import AwsCloudModal from "./modals/AwsCloudModal";
import AWSMigModal from "./modals/AWSMigModal";
import AwsDevOpsModal from "./modals/AwsDevOpsModal";
import NodeJSModal from "./modals/NodeJSModal";
import SnowModal from "./modals/SnowModal";
import BoomiModal from "./modals/BoomiModal";
import Certificates from "./Certificates";

const HomePage = () => {
  return (
    <div>
       <Masthead />
       <section class="page-section portfolio" id="portfolio">
            <div class="container">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Experiences</h2>
                {/*<!-- Icon Divider-->*/}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/*<!-- Portfolio Grid Items-->*/}
                <div class="row justify-content-center">
                    {/*<!-- Portfolio Item 1-->*/}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={awsCloudImage} alt="..." />
                            <AwsCloudModal />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 2-->*/}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={awsMigrationImage} alt="..." />
                            <AWSMigModal />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 3-->*/}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={awsDevopsImage} alt="..." />
                            <AwsDevOpsModal />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 4-->*/}
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={nodeJSImage} alt="..." />
                            <NodeJSModal />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 5-->*/}
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={snowImage} alt="..." />
                            <SnowModal />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 6-->*/}
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={boomiImage} alt="..." />
                            <BoomiModal />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Certificates />
    </div>
  )
};

export default HomePage;