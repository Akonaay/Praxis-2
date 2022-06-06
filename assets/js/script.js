$(function() {
  /*===================================*
	01. MENU JS
	*===================================*/
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 90) {
      $("#site-header").addClass("nav-fixed");
    } else {
      $("#site-header").removeClass("nav-fixed");
    }
  });

  //Main navigation Active Class Add Remove
  $(".navbar-toggler").on("click", function() {
    $("header").toggleClass("active");

    var scroll = $(window).scrollTop();

    if (scroll <= 90) {
      $("header").addClass("dark-bg");
    } else {
      $("header").removeClass("header-bg");
    }
  });

  $(document).on("ready", function() {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
    $(window).on("resize", function() {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
    });
  });
});


$('#vertical-carousel').on('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(this).carousel('prev');
    }
    else {
        $(this).carousel('next');
    }
    e.preventDefault();
});

$("#vertical-carousel").on("touchstart", function (event) {
    var yTouchPointStart = event.originalEvent.touches[0].pageY;
    $(this).on("touchmove", function (event) {
        var yTouchPointEnd = event.originalEvent.touches[0].pageY;
        if (Math.floor(yTouchPointStart - yTouchPointEnd) > 1) {
            $(".carousel").carousel('next');
        }
        else if (Math.floor(yTouchPointStart - yTouchPointEnd) < -1) {
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
    event.preventDefault();
});



var s1 = new Image();
s1.src = "./assets/img/services/research.jpg";

var s2 = new Image();
s2.src = "./assets/img/services/capacity.jpg";

var s3 = new Image();
s3.src = "./assets/img/services/leadership.jpg";

var s4 = new Image();
s4.src = "./assets/img/services/digital.jpg";

var s5 = new Image();
s5.src = "./assets/img/services/policy.jpg";

var s6 = new Image();
s6.src = "./assets/img/services/building.jpg";

// Read services 
let services = [
  {
        id: 1,
        title: "Research and Project Implementation",
        desc: "Research and Learning PRAXIS is renowned for providing exceptional services, across the different phases of a project; from the selected design and implementation approaches across to the analysis and resolution. the team at PRAXIS excels in tailoring the research methodology to answer specific issues/questions. The teams multidisciplinary composition assures the problem/question is credibly addressed by targeting it’s different facets to provide the most informative results that can then translate to practical change. Projects are ethically implemented with clearance sought from national bodies whenever necessary.",
        img: s1
    },

    {
        id: 2,
        title: "Capacity Building",
        desc: "Team building for improved performance, Community engagement and empowerment PRAXIS is in the business of improving provision of health care across different levels. The company targets individual(s) or organization(s) that can benefit from receiving training and workshops in different aspects of health care provision i.e. budget and planning for managers, supportive supervision programs for staff etc. Initially a needs assessment is conducted of the target area/audience to identify gaps, and a tailored training approach is designed and implemented to address areas of improvement. The implementation and subsequent monitoring plans are creative to ensure that the technical knowledge and practical skills needed are acquired and sustained beyond the workshops. This serves to improve the quality of healthcare being offered and also assures that the HF is functioning in an efficient manner.",
        img: s3
    },

    {
        id: 3,
        title: "Monitoring and Evaluation",
        desc: "Program monitoring and Evaluations (Formative, Baseline, Midterm and end-line) PRAXIS designs specialized monitoring and evaluation regimen to assist implementers reach project objectives efficiently. PRAXIS utilizes up to date mechanisms when conducting monitoring and/or evaluation efforts, with a sole goal of enabling client to reach their set targets.",
        img: s2
    },

    {
        id: 4,
        title: "Policy Development",
        desc: "Policy analysis and development, Strategic Planning, Gender analysis and programming",
        img: s5
    },

    {
        id: 5,
        title: "Health Information Systems",
        desc: "Health Information systems and knowledge management, Digital health",
        img: s4
    },

    {
        id: 6,
        title: "Health Systems Strengthening",
        desc: "Data use for service improvement, Leadership and governance in Healthcare",
        img: s6
    }
]

$(document).ready(() => {
  
  let domElement = document.querySelector('#results');

  function getMarkupText(data,i) {
    const obj = data[i];
    if (!obj) return "";
    return `
            <div class="col-md-4 mb-sm-3 mb-md-3">
              <div class="service-content">
                <img src="${obj.img.currentSrc}" class="img-fluid" />
                <a data-key="${obj.id}" class="openModal">${obj.title}</a>
                <p></p>
              </div>
            </div>
          `;
  }

  function setMarkupText() {
    let output = "";

    for (let i = 0; i <= services.length; i += 3) {
      output += `
              <div class="row mb-3">
                  ${getMarkupText(services, i)}
                  ${getMarkupText(services, i + 1)}
                  ${getMarkupText(services, i + 2)}
              </div>
          `;
  }

  domElement.innerHTML = output;
  }
  
  setMarkupText();

  $(document).on('click', 'a.openModal', function () {
    var productKey = $(this).data('key');
    var product = services[productKey - 1];
		if(product){
			$('#exampleModal').modal('toggle');
			$('#exampleModal #exampleModalLabel').html(product.title);
			var content = '<div> <img src="'+product.img.currentSrc+'" class="img-fluid" /> <h4 class="mt-3"> '+ product.title + ' </h4> <p>' + product.desc+'</p>';
			$('#exampleModal .modal-body').html(content);
		}
	})  
})




