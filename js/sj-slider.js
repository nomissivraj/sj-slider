var sjSlider = {};
((self) => {
    self.init = (opts) => {
        console.log(opts);
    }
    self.main = () => {
        console.log('main')
    }
})(sjSlider);

let opts = {
    sliders:[
        {
            sliderName: 'Category-2',
            min:0,
            max:10,
            reversed: false
        },
        {
            sliderName: 'Category-2',
            textSlider: true,
            customText: ['text1', 'text2'],
            reversed: false
        },
        {
            sliderName: 'Category-3',
            textSlider: true,
            customText: ['string1', 'string2'],
            reversed: true
        }
    ]
        
};

sjSlider.init(opts)