$('.btn_active_modal_window').on('click', () => console.log('clicked!'))

window.onload = function(){
  const btnCloseOne = document.querySelector('.close_foto_one')
  const btnCloseTwo = document.querySelector('.close_foto_two')
  const btnCloseThree = document.querySelector('.close_foto_three')
  const btnCloseFour = document.querySelector('.close_foto_four')
  const btnCloseFive = document.querySelector('.close_foto_five')
  const btnCloseSix = document.querySelector('.close_foto_six')

  const portfolio_column = document.querySelectorAll('.portfolio_column')
  const mainContentPortfolio = document.querySelector('.main_content_portfolio')

  portfolio_column.forEach((item) => {
    item.onclick = function openClassWindow(e){
      switch(e.target.className){
        case 'item_class item_class_one': 
          $('.class_one_foto').addClass('act_class_foto');
          mainContentPortfolio.style.display = 'none';
          break;
        case 'item_class item_class_two': 
          $('.class_two_foto').addClass('act_class_foto');
          mainContentPortfolio.style.display = 'none';
          break;
        case 'item_class item_class_three': 
          $('.class_three_foto').addClass('act_class_foto');
          mainContentPortfolio.style.display = 'none';
          break;
        case 'item_class item_class_four':
          $('.class_four_foto').addClass('act_class_foto');
          mainContentPortfolio.style.display = 'none';
          break;
        case 'item_class item_class_five':
          $('.class_five_foto').addClass('act_class_foto');
          mainContentPortfolio.style.display = 'none';
          break;
        case 'item_class item_class_six':
          $('.class_six_foto').addClass('act_class_foto');
          mainContentPortfolio.style.display = 'none';
          break;
        default:
          console.log('def');
          break
      }
    }
  })
  


  btnCloseOne.onclick = function (){
    const openWindow = document.querySelector('.class_one_foto')
    openWindow.classList.remove('act_class_foto');
    mainContentPortfolio.style.display = 'flex'
  }

  btnCloseTwo.onclick = function (){
    const openWindow = document.querySelector('.class_two_foto')
    openWindow.classList.remove('act_class_foto');
    mainContentPortfolio.style.display = 'flex'
  }

  btnCloseThree.onclick = function (){
    const openWindow = document.querySelector('.class_three_foto')
    openWindow.classList.remove('act_class_foto');
    mainContentPortfolio.style.display = 'flex'
  }

  btnCloseFour.onclick = function (){
    const openWindow = document.querySelector('.class_four_foto')
    openWindow.classList.remove('act_class_foto');
    mainContentPortfolio.style.display = 'flex'
  }

  btnCloseFive.onclick = function (){
    const openWindow = document.querySelector('.class_five_foto')
    openWindow.classList.remove('act_class_foto');
    mainContentPortfolio.style.display = 'flex'
  }

  btnCloseSix.onclick = function (){
    const openWindow = document.querySelector('.class_six_foto')
    openWindow.classList.remove('act_class_foto');
    mainContentPortfolio.style.display = 'flex'
  }




  function event(){
    $(window).on('scroll', header)
  }
  event()

  function header(){
    if($(window).scrollTop() > 0){
      $('.container_nav').addClass('fixed_nav_container')
    } else {
      $('.container_nav').removeClass('fixed_nav_container')
    }
  }












}