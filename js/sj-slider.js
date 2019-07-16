let sliderOpts = {
    sliders:[
        {
            category: 'Category-1',
            min:0,
            max:10,
            reversed: false
        },
        {
            category: 'Category-2',
            textSlider: true,
            customText: ['text1', 'text2', 'text3', 'text4', 'text5'],
            reversed: false
        }//,
        // { IF DEFINED BUT NO SLIDER PRESENT - MAKE ONE IN CONTAINER?
        //     category: 'Category-3',
        //     textSlider: true,
        //     customText: ['string1', 'string2'],
        //     reversed: true
        // }
    ]
        
};

window.onload = () => {
    sjSlider.init(sliderOpts)
}

var sjSlider = {};
((self) => {

    let supportedAttributes = ['min', 'max'];

    self.init = (opts) => {
        let el = document.querySelectorAll('.sj-slider');
        for (let i = 0; i < el.length; i++) {
           let category = el[i].getAttribute('data-slider-category'),
            direction = el[i].getAttribute('data-slider-direction'),
            output = el[i].getAttribute('data-slider-output');

            //Get options for current slider from matching opts object
            let elOpts = self.matchingOpts(opts.sliders, 'category', category);
            self.setAttributes(el[i], elOpts);
            
            for (let prop in elOpts) {
                if (prop === 'customText') {
                    // Based on min/max props or amount of customText set the min-max of slider
                    let steps = elOpts[prop].length - 1;
                    el[i].setAttribute('min', 0);
                    el[i].setAttribute('max', steps);
                    
                    // Process custom text and apply it to output
                    for (let i = 0; i <  steps; i++) {

                         // Check if reverse order - then loop through customText in reverse order

                    }
                    
                    // Work out how to associate text to numbers - with unknown amount

                } else {
                    // If not customText property then simply grab slider value and add to 
                }
            }
        }
    }

    self.matchingOpts = (array, key, value) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i][key].toLowerCase() === value.toLowerCase()) {
                return array[i];
            }
        }
    }

    self.setAttributes = (el, elOpts) => {
        if (elOpts) {
            // For all supported attributes defined in object, set to current element
            for (let prop in elOpts) {
                if (supportedAttributes.indexOf(prop) > -1) {
                    el.setAttribute(prop, elOpts[prop])
                }
            }
        }
    }

    self.update = () => {
        console.log('update')
    }
})(sjSlider);