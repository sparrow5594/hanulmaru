$(document).ready(function(){

    let modal = $('.modal');
    let modal_close = $('.modal-close');

    $(document).click(function(e){
        if(modal.has(e.target).length == 0){
            modal.hide();
        }
    })

    modal_close.click(function(){
        modal.hide();
    });

    $('.m-btn').click(function(){
        $('.gnb__menu').toggle();
    });

    $('.unfold').each(function(index, item) {
        $(this).click(function(event){
            event.preventDefault
            $('.sub-menu').eq(index).toggle();
        })
    });
});