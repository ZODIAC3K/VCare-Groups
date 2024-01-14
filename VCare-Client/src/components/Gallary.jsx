import React from 'react'
import '../pages/css/gallary.css'

const Gallary = (props) => {
  return (
    <React.Fragment>
      <section class="ag-photo-gallery-block mt-10">
        <div class="ag-format-container">
          <div class="ag-photo-gallery_list-hu">

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure class="ag-photo-gallery_figure">
                <a href="img/i4.jpg" data-fancybox="gallery">
                  <img src="img/hu1.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__middle">
              <figure class="ag-photo-gallery_figure">
                <a href="img/i5.jpg" data-fancybox="gallery">
                  <img src="img/hu2.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure class="ag-photo-gallery_figure">
                <a href="img/hu3.jpg" data-fancybox="gallery">
                  <img src="img/hu3.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__wide">
              <figure class="ag-photo-gallery_figure">
                <a href="img/i2-wide.jpg" data-fancybox="gallery">
                  <img src="img/hu4.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item">
              <figure class="ag-photo-gallery_figure">
                <a href="img/i7.jpg" data-fancybox="gallery">
                  <img src="img/hu5.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure class="ag-photo-gallery_figure">
                <a href="img/i8.jpg" data-fancybox="gallery">
                  <img src="img/hu6.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__middle">
              <figure class="ag-photo-gallery_figure">
                <a href="img/d1.jpg" data-fancybox="gallery">
                  <img src="img/hu7.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>

            <div data-aos="zoom-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
              <figure class="ag-photo-gallery_figure">
                <a href="img/i9.jpg" data-fancybox="gallery">
                  <img src="img/hu8.jpg" class="ag-photo-gallery_img" alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Gallary