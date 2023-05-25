import React, { useState, useEffect } from "react";
import articlesImage from "../Images/articles.png";
import qiitaImage from "../Images/qiita.png";
import devcImage from "../Images/devc.png"
import axios from "../axios";
import requests from "../Requests";

function BlogPage() {
  const [postsInfo, setPostsInfo] = useState([]);
  let totalViewCount = 0;
  
  // Fetching Qiita Info
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.getPostsInfo);
      setPostsInfo(response.data);
      return response;
    }
    
    fetchData();
  }, []);
  
  // Counting total view number
  if(postsInfo.length > 0){
    let count = 0;
    for(let i=0; i<postsInfo.length; i++){
      count += postsInfo[i].page_views_count;
    }
    totalViewCount = count;
  } 
  
  return (
    <div className="container">
      <section class="page-section bg-light text-dark mb-0" id="about">
            <div class="container">
                {/*-- Article Image --*/}
                <div class="d-flex align-items-center flex-column">
                  <img class="mb-4 mt-4" src={articlesImage} alt="article" />
                </div>
                
                {/*<!-- Blog Section Heading-->*/}
                <h2 class="page-section-heading text-center text-dark">Tech Articles</h2>
                
                {/*<!-- Icon Divider-->*/}
                <div class="divider-custom ">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                {/*<!-- Blog Section Content-->*/}
                <div class="row mb-2">
                    <div class="col-md-6">
                      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                          <strong class="d-inline-block mb-2 text-success">Qiita</strong>
                          <p class="card-text mb-auto">
                            Qiitaでは日本語で記事を書いています。
                          </p>
                          <p>
                            Qiita記事 Total View数：
                            { postsInfo.length > 0 ? totalViewCount : "Counting..."}
                          </p>
                          <a target="_blank" rel="noreferrer" href="https://qiita.com/kennyQiita" class="stretched-link">
                            記事一覧
                          </a>
                        </div>
                        <img class="w-50" src={qiitaImage} alt="..." />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                          <strong class="d-inline-block mb-2 text-dark">Dev Community</strong>
                          <p class="card-text mb-auto">
                            Articles are in English at Dev Community.
                          </p>
                          <a target="_blank" rel="noreferrer" href="https://dev.to/kkkensuke" class="stretched-link">
                            Go to Articles
                          </a>
                        </div>
                        <img class="w-50" src={devcImage} alt="..." />
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  );
};

export default BlogPage;