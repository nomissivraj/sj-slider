let sliderOpts = {
    sliders:[
        {
            category: 'Category-2',
            min:0,
            max:10,
            reversed: false
        },
        {
            category: 'Category-2',
            textSlider: true,
            customText: ['text1', 'text2'],
            reversed: false
        },
        {
            category: 'Category-3',
            textSlider: true,
            customText: ['string1', 'string2'],
            reversed: true
        }
    ]
        
};

window.onload = () => {
    sjSlider.init(sliderOpts)
}

var sjSlider = {};
((self) => {
    self.init = (opts) => {
        let els = document.querySelectorAll('.sj-slider');
        for (let i = 0; i < els.length; i++) {
           let category = els[i].getAttribute('data-slider-category'),
            direction = els[i].getAttribute('data-slider-direction'),
            output = els[i].getAttribute('data-slider-output');
            console.log('Slider',i+':', category, direction, output) 
        }
    }
    self.update = () => {
        console.log('update')
    }
})(sjSlider);