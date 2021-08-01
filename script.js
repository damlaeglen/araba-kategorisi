var models = [
    {
        name: 'Bmw 418d',
        Image : 'img/bmw.jpeg',
        link :'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'

    },
    {
        name: 'Megane 1.3 Icon EDC',
        Image : 'img/megan.jpeg',
        link :'http://www.arabalar.com.tr/renault/megane/2021/1-3-icon-edc'

    },
    {
        name: 'Volvo S90',
        Image : 'img/volvo.jpeg',
        link :'http://www.arabalar.com.tr/volvo/s90/2020/2-0-d5-inscription-plus'

    },
    {
        name: 'Renault Clio X-Tronic',
        Image : 'img/renault.jpeg',
        link :'http://www.arabalar.com.tr/renault/clio/2021/1-0-icon-x-tronic'

    },
    {
        name: 'Mini-cooper',
        Image : 'img/mini.jpeg',
        link :'http://www.arabalar.com.tr/mini/cooper/2021/3k-1-5-pure'

    },
    {
        name: 'Alfa Romeo 4C',
        Image : 'img/alfa.jpeg',
        link :'http://www.arabalar.com.tr/alfa-romeo/4c/2017/1-8-tct'

    },
];
var index =0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '2200',
    random: false
};

init(settings);



document.querySelector('.fa-arrow-circle-left').addEventListener
('click', function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener
('click', function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
       init(settings);
    })
})

function init(settins){
    
    var prev;
    interval= setInterval(function(){

        if(settings.random){
            //random index
            do{
                index = Math.floor(Math.random( ) * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            //artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        
        showSlide(index);

    },settings.duration)
}

function showSlide(i){

    index= i;

    if(i<0){
        index = slaytCount -1;
    }
    if(i>=slaytCount){
        index=0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].Image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}


