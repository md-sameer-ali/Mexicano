jQuery(document).ready(function ($) {

  let headerHeight = jQuery('.main-header').outerHeight();
  jQuery('.header-offset').height(headerHeight);

  const matchSlider = new Swiper('#matchSlider', {
    // 		slidesPerView: 1.2,
    slidesPerView: 1,
    // 		freeMode: true,
    spaceBetween: 15,
    breakpoints: {
      575: {
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  let crossBtn = document.querySelectorAll('.removeSliderButton');

  crossBtn.forEach(function (button, index) {
    console.log(button);
    console.log(index);
    button.addEventListener('click', function (e) {
      e.preventDefault();
      matchSlider.removeSlide(index);
    });
  });


  // Listen for radio button changes
  jQuery('input[type="radio"][name="interested"]').change(function () {
    // Get the selected value
    let selectedValue = $('input[type="radio"][name="interested"]:checked').val();

    // Redirect to the BuddyBoss registration page with the selected value as a query parameter
    window.location.href = '/mexicanmingle/register/?gender=' + selectedValue;
  });







})




jQuery(document).ready(function ($) {
  // Add a click event to your custom button
  $('#custom-friend-request-button:not(.request-sent)').on('click', function (e) {
    e.preventDefault();

    let this_button = $(this);

    // Check if the button is already in a "request-sent" state
    if (this_button.hasClass('request-sent')) {
      // Button is already processing a request, so do nothing
      return;
    }

    // Disable the button to prevent multiple clicks
    this_button.addClass('request-sent');
    this_button.prop('disabled', true);

    // Get the recipient's user ID (You can set this dynamically or retrieve it from your HTML)
    let recipientUserID = this_button.data('user-id'); // Replace with your logic to get the user ID.

    // Send an AJAX request
    $.ajax({
      type: 'POST',
      url: ajaxurl, // WordPress AJAX URL
      data: {
        action: 'send_friend_request', // AJAX action
        recipientUserID: recipientUserID
      },
      success: function (response) {
        // Re-enable the button
        //                 this_button.removeClass('request-sent');
        //                 this_button.prop('disabled', false);

        // Display a success message or handle errors
        if (response.success) {
          // Success handling
        } else {
          alert('Failed to send the friend request.');
        }
      }
    });
  });

  $('.wpstream_button.start_event').on('click', () => {
    Swal.fire({
      title: "Great!",
      text: "Please give us up to one minute to get cloud resources, in the meantime get ready for your stream!",
      icon: "info"
    });
  })

  // SAMEER JS STARTS FROM HERE 

  // Select li elements that have ul as children
  $('.nav-ul li:has(ul)').each(function () {
    // Append a div to their child a tags
    $(this).children('a').append('<span class="dropdown-arrow"><i class="fa-solid fa-chevron-down"></i></span>');
  });


  if ($(window).width() <= 991) {
    $(".nav-ul .dropdown-arrow").on("click", function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(this)
          .parent().siblings(".sub-menu")
          .slideUp(200);
      } else {
        $(".nav-ul .dropdown-arrow").parent().removeClass("active");
        $(this).parent().addClass("active");
        $(".sub-menu").slideUp(200);
        $(this)
          .parent().siblings(".sub-menu")
          .slideDown(200);
      }
    });
  }

  $(".menu-bar").on('click', function () {
    $(".mx_header_area_main .nav-area").addClass("mobi-nav-active");
    $(".black_overlay_for_mobile_responsive").fadeIn();
  });
  $(".cross").on('click', function () {
    $(".mx_header_area_main .nav-area").removeClass("mobi-nav-active");
    $(".black_overlay_for_mobile_responsive").fadeOut(1000);
  });
  $(".black_overlay_for_mobile_responsive").on('click', function () {
    $(".mx_header_area_main .nav-area").removeClass("mobi-nav-active");
    $(this).fadeOut(1000);
  });

  const contentSwiper = new Swiper(".contentSwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  const streamerSwiper = new Swiper(".streamerSwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  $(".faqs-area .set > a").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".faqs-area .content")
        .slideUp(200);
      $(".faqs-area .set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".faqs-area .set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".faqs-area .set > a").removeClass("active");
      $(this).addClass("active");
      $(".faqs-area .content").slideUp(200);
      $(this)
        .siblings(".faqs-area .content")
        .slideDown(200);
    }

  });

  // Select the first .set element
const firstSet = document.querySelector('.faqs-area .set');

// Check if it exists before adding the class
if (firstSet) {
    // Add the 'active' class to its child 'a' element
    const firstLink = firstSet.querySelector('a');
    const firstContent = firstSet.querySelector('.content');
    firstLink.classList.add('active');
    firstContent.style.display = 'block';
}
function changeContent() {
  $("#exampleModalNews").fadeIn();
  $(".newletter_background_overlay").fadeIn();
}

$(window).on('load', function () {
  // Call your function after 5 seconds
  setTimeout(changeContent, 5000); // 5000 milliseconds = 5 seconds
});


$('.cut_modal_icon').on('click', function(){
  $("#exampleModalNews").fadeOut();
  $(".newletter_background_overlay").fadeOut();
});


  let chatMessages = [{
    name: "ms1",
    msg: "Who are you?",
    delay: 1000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms2",
    msg: "We are young team of entrepreneurs, developers, designers and visionaries. We are based in Berlin and started working on Freedactics in early 2015.",
    delay: 2000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms3",
    msg: "Could you describe Freedactics in one sentence?",
    delay: 3000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms4",
    msg: "Everything from lecture to exam in your pocket: Freedactics is a cloud-based platform build for students needs.",
    delay: 4000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms5",
    msg: "And the longer version?",
    delay: 3000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms6",
    msg: "As students we use to organize all our daily life around web and mobile technology, except the actual studying part. For learning we still use huge amounts of paper, books and heavy backpacks.",
    delay: 11000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms7",
    msg: "Why? Because there is no solution out there to help students or teachers to easily digitalize their learning processes and contents. We think that learning should be fast, simple and effective. A platform for studying should give people the option to learn at their own scope, with their own contents integrated.",
    delay: 10000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms8",
    msg: "This is why we developed Freedactics – a cloud-based solution tailored to students needs.",
    delay: 8000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms9",
    msg: "What makes you different from other learning platforms?",
    delay: 4000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms10",
    msg: "We understand the needs of individual student. We don’t focus so much on content publishing or learning management but on learning. At the same time we acknowledge the need to integrate different perspectives, such as flash cards, content and task management.",
    delay: 8000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms11",
    msg: "So we end up with a unique mix of focus on User Experience and thrive towards integration.",
    delay: 4000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms12",
    msg: "What is your vision for the future?",
    delay: 4000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms14",
    msg: "We are releasing an App right now. But that’s only breaking ground. In fact, we have something much bigger in mind: a universe of education! Our vision is to connect people, connect tools and power learning through intelligent systems.",
    delay: 9000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms15",
    msg: "Thanks! Something you want to add?",
    delay: 3000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms16",
    msg: "You are welcome! Yes, check out freedactics.com!",
    delay: 9000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms17",
    msg: "You are welcome! Yes, check out freedactics.com!",
    delay: 9000,
    align: "right",
    showTime: true,
    time: "19:58"
  }
  ];
  let chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };
  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 0;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' ><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='mymessage messageinner-" + obj.name + "' ><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });



});



