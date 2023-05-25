import React from 'react';

const Certificates = () => {
  return(
    <div class="container">
        {/* Certificates Section Heading */}
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0 h1">Certificates</h2>
        {/* Icon Divider */}
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <div class="container content mb-4">
        <div class="row gutters">
        	<div class="col-lg-4 col-md-4 col-sm-12">
        		<div class="plan-card plan-one">
        			<div class="pricing-header">
        				<div class="plan-cost">AWS</div>
        			</div>
        			<ul class="plan-features">
        				<li>AWS Certified Solutions Architect</li>
        				<li>AWS Certified Developer</li>
        				<li>AWS Certified SysOps Administrator</li>
        			</ul>
        		</div>
        	</div>
        	<div class="col-lg-4 col-md-4 col-sm-12">
        		<div class="plan-card plan-one">
        			<div class="pricing-header orange">
        				<div class="plan-cost">SaaS&Tools</div>
        			</div>
        			<ul class="plan-features">
        				<li>ServiceNow Certified System Administrator</li>
        				<li>Boomi Professional Developer</li>
        				<li>Boomi Professional Windows Operational Administrator</li>
        				<li>UiPath RPA Developer Advanced Certification</li>
        			</ul>
        		</div>
        	</div>
        	<div class="col-lg-4 col-md-4 col-sm-12">
        		<div class="plan-card plan-one">
        			<div class="pricing-header green">
        				<div class="plan-cost">Technology</div>
        			</div>
        			<ul class="plan-features">
        				<li>Oracle Certified Java Programmer, Silver</li>
        				<li>Professional Scrum Master</li>
        				<li>基本情報技術者（FE）</li>
        			</ul>
        		</div>
        	</div>
        </div>
        </div>
    </div>
  );
  
};

export default Certificates;