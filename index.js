const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        type : ['home', 'electronics','electic ketal'],
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        quantity: 1,
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more',
        type : ['home','electronics'],
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        quantity: 1,
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' ,
        type : ['sports'],
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        quantity: 1,
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' ,
        type : ['electronics','style','sports'],
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        quantity: 1,
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more',
        type : ['electronics', 'beauty'], 
    },
    { 
        id: 'product6',
        url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70', 
        title: {
            shortTitle: 'Table Fans',
            longTitle: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)'
        }, 
        price: {
            mrp: 2250,
            cost: 1199,
            discount: '46%'
        },
        quantity: 1,
        description: 'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
        discount: 'Minimum 40% Off', 
        tagline: 'Top Selling',
        type : ['home', 'electronics'], 
    },
    { 
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70', 
        title: {
            shortTitle: 'Headphones',
            longTitle: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset '
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        quantity: 1,
        description: 'Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.',
        discount: 'Minimum 50% Off', 
        tagline: 'Grab Now!' ,
        type : ['electronics'],
    },
    { 
        id: 'product8',
        url: 'https://rukminim1.flixcart.com/image/200/200/k0bbb0w0pkrrdj/printer-refurbished/k/g/j/b-ink-tank-l130-epson-original-imafk8ffzjkgefyf.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/printer-refurbished/k/g/j/b-ink-tank-l130-epson-original-imafk8ffzjkgefyf.jpeg?q=70', 
        title: {
            shortTitle: 'Printers',
            longTitle: 'Epson L130 Single Function Inkjet Printer  (Black, Ink Tank) '
        }, 
        price: {
            mrp: 10999,
            cost: 10599,
            discount: '3%'
        },
        quantity: 1,
        description: 'Print everything, from project reports for your office to school assignments for your kids, without worrying about cost with this high-performance and highly-economical printer from Epson.',
        discount: 'From ₹10999', 
        tagline: 'Epson' ,
        type : ['electronics', 'home'],
    },
    { 
        id: 'product9',
        url: 'https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/printer-refurbished/k/g/j/b-ink-tank-l130-epson-original-imafk8ffzjkgefyf.jpeg?q=70https://rukminim1.flixcart.com/image/416/416/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70', 
        title: {
            shortTitle: 'Monitors',
            longTitle: 'acer 21.5 inch Full HD IPS Panel White Color Ultra Slim Monitor (HA220Q)  (Frameless, AMD Free Sync, Response Time: 4 ms, 75 Hz Refresh Rate)'
        }, 
        price: {
            mrp: 15700,
            cost: 8349,
            discount: '46%'
        },
        quantity: 1,
        description: 'You can complete your office work without any interruptions on the Acer 54.61 cm (21.5) Full HD Desktop Monitor. With a thickness of up to 6.6 mm, this desktop monitor has a sleek and elegant design. Also, its frameless display offers a clear and immersive viewing experience. And, thanks to its geometric stand, this monitor can be easily placed in the room anywhere you want. Additionally, the inbuilt speakers of this desktop monitor provide enhanced sound.',
        discount: 'From ₹6599', 
        tagline: 'acer' ,
        type : ['electronics'],
    },
    { 
        id: 'product10',
        url: 'https://rukminim1.flixcart.com/image/312/312/ky3b0y80/dslr-camera/3/q/b/x-t30-ii-mirrorless-camera-body-with-xf-18-55mm-ois-zoom-lens-original-imagaegurzwvdmxu.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/ky3b0y80/dslr-camera/3/q/b/x-t30-ii-mirrorless-camera-body-with-xf-18-55mm-ois-zoom-lens-original-imagaegurzwvdmxu.jpeg?q=70', 
        title: {
            shortTitle: 'Top mirrorless cameras',
            longTitle: 'FUJIFILM X-T30II18-55 Mirrorless Camera X-T30II18-55  (Black)'
        }, 
        price: {
            mrp: 124999,
            cost: 106000,
            discount: '15%'
        },
        quantity: 1,
        description: `1 Camera Body, Lens, Li-ion Battery NP-W126S, USB Cable, Shoulder Strap, Body Cap, Owner's Manual`,
        discount: 'Shop now!', 
        tagline: 'canon, sony, fujifilms' ,
        type : ['electronics'],
    },
    { 
        id: 'product11',
        url: 'https://rukminim1.flixcart.com/image/200/200/xif0q/power-bank/j/i/v/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/khz693k0-0/power-bank/v/l/8/power-bank-dx15-20000-mah-20000-dx15-20k-callmate-original-imafxvntggcxjqfq.jpeg?q=70', 
        title: {
            shortTitle: 'Primium power banks',
            longTitle: 'Callmate 20000 mAh Power Bank (15 W, Fast Charging)  (Black, Lithium Polymer)'
        }, 
        price: {
            mrp: 1999,
            cost: 1199,
            discount: '40%'
        },
        quantity: 1,
        description: `Want to charge your devices on-the-go? Then this 20000 mAh power bank from Redmi will be a great addition to your travel bag. It features dual ports and two-way 18 W fast charging. That’s not all, its anti-slip edge grip design ensures that you get to hold the device firmly and avoid any accidental drops.`,
        discount: 'Shop now!', 
        tagline: 'MI, realme and More' ,
        type : ['electronics'],
    },
    { 
        id: 'product12',
        url: 'https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/khz693k0-0/power-bank/v/l/8/power-bank-dx15-20000-mah-20000-dx15-20k-callmate-original-imafxvntggcxjqfq.jpeg?q=https://rukminim1.flixcart.com/image/416/416/xif0q/acoustic-guitar/5/x/5/med-black-acoustic-guitar-piybha-store-original-imagjsagpy3pmj2y.jpeg?q=70', 
        title: {
            shortTitle: 'String Instruments',
            longTitle: 'Piybha Store Med Black Acoustic Guitar Acoustic Guitar Rosewood Linden Wood Right Hand Orientation  (Black)'
        }, 
        price: {
            mrp: 5999,
            cost: 2483,
            discount: '58%'
        },
        quantity: 1,
        description: `Piybha Store Med Black Acoustic Guitar Acoustic Guitar Boxwood Graphite Right Hand Orientation (Black)`,
        discount: 'Upto 70% off', 
        tagline: 'Gitars, Ukuless and More' ,
        type : ['electronics','sports'],
    },
    { 
        id: 'product13',
        url: 'https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/ked56kw0/bar/v/c/b/detachable-push-up-bar-dips-gym-exercise-for-men-women-push-up-original-imafvfq58ucfd32m.jpeg?q=70', 
        title: {
            shortTitle: 'Gym essentials',
            longTitle: 'Shopeleven Pushup bars, pushup stand for sports gym finess bar exerciser 1 pair (Multicolor) Push-up Bar  (Multicolor)'
        }, 
        price: {
            mrp: 99,
            cost: 145,
            discount: '85%'
        },
        quantity: 1,
        description: `Push Up Bars are made of high quality polypropylene, which is sturdy and strong enough to support any weight, ergonomically designed for better load bearing and they do not wobble or slip. As exercise equipment, these are made with high quality to give perfect shape and comfort to your body when you are exercising. This is the effective gym tool for exercise and provides safety to users while doing push-ups. The Push Up Bar handles are covered with comfort foam providing strong grip to users. Moreover, it can support any weight. Great for both men and women, push-ups bars are versatile for any level of fitness. They allow you to work from various angles to better target your upper body muscles, and can be used for multiple exercises. Increase your core strength with L-sits - an incredible abdominal and triceps workout. The ergonomic design will help to reduce the pressure or injury on your wrist. By training with the push up bars, your range of motion will be increased, and you will be able to target muscles more effectively. The handles are covered by soft and comfortable foam, which ensures the slip-resistance.`,
        discount: 'From ₹139', 
        tagline: 'Shop now!' ,
        type : ['sports'],
    },
    { 
        id: 'product14',
        url: 'https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70', 
        title: {
            shortTitle: 'Non-Gear Cycle',
            longTitle: 'HERO Skyper 26T 26 T Mountain/Hardtail Cycle  (Single Speed, Black)'
        }, 
        price: {
            mrp: 6999,
            cost: 6000,
            discount: '14%'
        },
        quantity: 1,
        description: `Do you love adventure? If that's the case, this Hero Skyper cycle is meant for you. Featuring V brakes, this cycle is perfect for riding on the mountains. Its light steel frame, hand bar end grips, integrated carrier, V brakes and an ergonomic saddle will offer you a smooth and safe ride.`,
        discount: 'Upto 40% Off', 
        tagline: 'Hercules, Hero and More' ,
        type : ['sports'],
    },
    { 
        id: 'product15',
        url: 'https://rukminim1.flixcart.com/image/200/200/ki3gknk0/helmet/p/4/9/sba-1-cesar-sba-1-cesar-full-face-steelbird-original-imafxyhzwrhqyvcx.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70', 
        title: {
            shortTitle: 'Helmet',
            longTitle: 'Steelbird SBA-1 CESAR Motorbike Helmet  (Matt Black White with Smoke Visor)'
        }, 
        price: {
            mrp: 2099,
            cost:1679,
            discount: '20%'
        },
        quantity: 1,
        description: `
        Helmet Fitted with Clear Visor and Extra Tinted Visor. 1. High Impact ABS Material Shell 2. Multi layer EPS (Thermocol) High Density and low density For more Safety with Air Channels. 3. Micro-Metric Buckle meeting European Standards. 4. The ventilation of the helmet's upper part uses the AIR BOOSTER system. 5. Italian Design Hygenic Interior With Multipore 6. Breathable Pedding Neck Protector For Extra Comfort 7. Padding Polycarbonate Anti Scratch Coated Visor 8. Quick Release Visor mechanism Kit.`,
        discount: 'From ₹699', 
        tagline: 'Vega, Steelbird and More' ,
        type : ['sports'],
    },
    { 
        id: 'product17',
        url: 'https://rukminim1.flixcart.com/image/200/200/jxxkvww0/bath-linen-set/h/y/h/p4-bathsports-gretea-heelium-original-imafg3zc8kfqzpza.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kzygpzk0/bath-linen-set/3/u/e/face-towel04-crystal-zone-original-imagbuh6egb6jsun.jpeg?q=70', 
        title: {
            shortTitle: 'Bath Linen set',
            longTitle: 'Crystal zone 4 Piece Microfiber Bath Linen Set M, L  (Multicolor, Pack of 4)'
        }, 
        price: {
            mrp: 599,
            cost: 325,
            discount: '45%'
        },
        quantity: 1,
        description: `Crystal zone 4 Piece Microfiber Bath Linen Set M, L  (Multicolor, Pack of 4)`,
        discount: 'From ₹129', 
        tagline: 'Best Selling Range' ,
        type : ['home'],
    },
    { 
        id: 'product18',
        url: 'https://rukminim1.flixcart.com/image/200/200/k5e7o280/wall-clock/6/h/j/designer-wall-clock10-cw-ct-red25412-analog-ajanta-original-imafzyx3fdtf2hcb.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kp5sya80/wall-clock/i/k/l/wall-clock-711-wall-clock-711-analog-ajanta-original-imag3gmpskrvjz3b.jpeg?q=70', 
        title: {
            shortTitle: 'Clocks',
            longTitle: 'AJANTA Analog 30 cm X 30 cm Wall Clock  (Black, Silver, With Glass, Standard)'
        }, 
        price: {
            mrp: 1599,
            cost: 423,
            discount: '73%'
        },
        quantity: 1,
        description: `Wooden Wall Clock With Beautiful Design For Your Living Room Or Bed Room. The Product Is Made High Quality Colors, Kundan Pearls Studded Decorated On Wood Along With Colour Glasses. It Is Durable And Look Elegant And Feel Royal For Oneself At Home. The Clock Is Aa Battery Operated. The Morden Work Reflect True Style And Looks Stunning Hanging On Wall. The Product Is Made By Several Artist With The Specialised Skills And Supervision.`,
        discount: 'Upto 80% Off', 
        tagline: 'Big Discount' ,
        type : ['home'],
    },
    { 
        id: 'product19',
        url: 'https://rukminim1.flixcart.com/image/612/612/kqco5u80/jewellery-set/g/c/h/780-r-a-enterprises-original-imag4dyzceaqhkhp.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kqco5u80/jewellery-set/g/c/h/780-r-a-enterprises-original-imag4dyzceaqhkhp.jpeg?q=70', 
        title: {
            shortTitle: 'Fashion Jwellary',
            longTitle: 'Alloy Rhodium Jewel Set  (Silver)'
        }, 
        price: {
            mrp: 3599,
            cost: 293,
            discount: '91%'
        },
        quantity: 1,
        description: `R A Enterprises 
        Alloy Rhodium Jewel Set  (Silver)`,
        discount: 'From 99', 
        tagline: 'Best Deals!' ,
        type : ['style'],
    },
    { 
        id: 'product20',
        url: 'https://rukminim1.flixcart.com/image/200/200/l3khsi80/shirt/b/n/4/m-ld-hlf-red-cargo-lumad-original-imagenqjfgkujsvv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/n/m/6/m-usshto0975-u-s-polo-association-original-imaggrb5qvw2jvfj.jpeg?q=70', 
        title: {
            shortTitle: 'Shirts, Trousers',
            longTitle: 'Men Regular Fit Solid Button Down Collar Casual Shirt'
        }, 
        price: {
            mrp: 2399,
            cost: 1199,
            discount: '50%'
        },
        quantity: 1,
        description: `U.S. POLO ASSN. 
        Men Regular Fit Solid Button Down Collar Casual Shirt`,
        discount: 'Min 65% Off', 
        tagline: 'Lowes Ever Prices' ,
        type : ['style'],
    },
    { 
        id: 'product21',
        url: 'https://rukminim1.flixcart.com/fk-p-flap/200/200/image/5aa98b7cee183286.jpg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/shoe/z/e/g/7-rlo082-red-tape-grey-original-imagaa3y2tdhqyrg.jpeg?q=70', 
        title: {
            shortTitle: 'Bootes',
            longTitle: 'RED TAPE Walking Shoes For Men  (Grey)'
        }, 
        price: {
            mrp: 5999,
            cost: 1499,
            discount: '75%'
        },
        quantity: 1,
        description: `Shoes that open new ways to move forward. RedTape brings you the most comfortable sports athleisure shoes well crafted with EVA & TPR outsole for adding the new comfort level and Mesh upper material for making it breathable to keep your feet relaxed. The slip-on closure lets your slide in your feet easily with the perfect grip on your feet.`,
        discount: 'Min 40% Off', 
        tagline: 'Woodland, Polo Asisan...' ,
        type : ['style'],
    },
    { 
        id: 'product22',
        url: 'https://rukminim1.flixcart.com/image/200/200/ksez24w0/hand-messenger-bag/w/z/z/amy-plus-md-satchel-ladies-handbag-hgge016022m3-satchel-lavie-original-imag5zj5aqrwgcdz.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/l2f20sw0/shopsy-hand-messenger-bag/b/4/n/stylish-women-shoulder-bag-shoper-1red-hobo-khatushyam-original-imagdrmucazmpztg.jpeg?q=70', 
        title: {
            shortTitle: 'Perse and Wallets',
            longTitle: 'khatushyam collection Women Pink Hand-held Bag'
        }, 
        price: {
            mrp: 999,
            cost: 269,
            discount: '73%'
        },
        quantity: 1,
        description: `khatushyam collection Women Pink Hand-held Bag`,
        discount: '40 - 70% Off', 
        tagline: 'Grab the Deal Now' ,
        type : ['style'],
    },
    { 
        id: 'product23',
        url: 'https://rukminim1.flixcart.com/flap/200/200/image/4398b53c0596430f.jpg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kids-t-shirt/j/6/h/1-2-years-kuctshrt161-disney-by-miss-chief-original-imag5f29zunsmgys-bb.jpeg?q=70', 
        title: {
            shortTitle: `Kid's Clothing`,
            longTitle: 'DISNEY BY MISS & CHIEF Girls Graphic Print Cotton Blend T Shirt  (Multicolor, Pack of 3)'
        }, 
        price: {
            mrp: 1899,
            cost: 509,
            discount: '73%'
        },
        quantity: 1,
        description: `DISNEY BY MISS & CHIEF Girls Graphic Print Cotton Blend T Shirt  (Multicolor, Pack of 3)`,
        discount: 'Min 60% Off', 
        tagline: 'US Polo, Provogue and More' ,
        type : ['style'],
    },

];

// search Button
const serchBtn = document.getElementById("srcbtn");

// become a seller from header
const sellOpener = document.querySelector('#sellOpener');
console.log(sellOpener);

// sell module
const sell_module = document.querySelector('.sell_module');

const category = document.querySelector(".category_container");
const list = document.querySelector(".nav_category");

const main = document.querySelector('.main_container');

// button within module
const logInBtn = document.querySelector('.login_btn')
// button in header
const signinBtn = document.querySelector("#signIn");
const signinModule = document.querySelector(".login_module");

const username = document.getElementById('username');
const password = document.getElementById("password");


const createBtn = document.querySelector(".create_btn");
const closeBtn = document.querySelector(".close_btn");

//close payment btn
const closePaymentBtn = document.querySelector(".close_payment")

const paymentPage = document.querySelector(".paymentPage");

const confirmBtn = document.querySelector(".confirm");

const serchInput = document.getElementById("inputSerch");
const searchBtn = document.getElementById('srcbtn');


const serchOptions = document.querySelectorAll('.serchOption');

serchOptions.forEach(item=>{
    item.addEventListener("click", (e)=>{
        let serchTerm = e.target.innerText.toLowerCase();

        let productfound = []
    
        products.forEach(item=>{
            item.type.forEach(typeofitem=>{
                if(typeofitem.toLowerCase() === serchTerm)
                    productfound.push(item);
            })
        })
        main.innerHTML = "";

        if(productfound.length ==0){
            main.append(`Comming Soon........`);
        }
        createGenereItems(productfound);
    })
})



// function to search from search bar
serchBtn.addEventListener("click",(e)=>{
    console.log(serchInput.value);

    let serchTerm = serchInput.value.toLowerCase();
    
    let productfound = []
    
    products.forEach(item=>{
        if(item.title.longTitle.toLowerCase().includes(serchTerm))
            productfound.push(item);

        else if(item.title.shortTitle.toLowerCase().includes(serchTerm))
            productfound.push(item);
    })

    main.innerHTML = "";
    createGenereItems(productfound);
})




confirmBtn.addEventListener("click",()=>{
    alert("Payment Successfull");
    paymentPage.classList.remove("showPayContainer");
})

closePaymentBtn.addEventListener("click",()=>{
    paymentPage.classList.remove("showPayContainer");
})

function openPayment (){
    console.log("open payment called");
    paymentPage.classList.add("showPayContainer");
}

// funtion to remvome class from module
closeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    sell_module.classList.remove("pop");
    
})

createBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const imgSrc = document.getElementById("img_src");
    const title = document.getElementById("productName");
    const mrp = document.getElementById("mrp");
    const cost = document.getElementById("cost");
    const companyName = document.getElementById("manu_name");

    if(title.value == ""){
        alert("Please fill all fields");
        return;
    }
    if(mrp.value == ""){
        alert("Please fill all fields");
        return;
    }
    if(cost.value == ""){
        alert("Please fill all fields");
        return;
    }
    if(companyName.value == ""){
        alert("Please fill all fields");
        return;
    }


    let dis = (Number(mrp.value)-Number(cost.value));
    let discount = (dis/Number(mrp.value))*100;

    const card = document.createElement('div');
        card.classList.add('productCard');
        card.setAttribute('onClick','openPayment()');

        card.innerHTML = `
            <img src=${imgSrc.value} alt="product">
                <div class="productInfo">
                    <h2>${title.value}</h2>
                    <span class="price">₹${mrp.value}</span>
                    <span class="discount">${companyName.value}</span>
                    <span class="company">${discount}% OFF</span>
                </div>
                `
        main.appendChild(card);

        const item = { 
            url: imgSrc.value,
            title: {
                shortTitle: title.value,
                longTitle:title.value,
            },
            price: {
                mrp: mrp.value,
                cost: companyName.value,
                discount: discount,
            },
            quantity: 1,
            discount: 'Buy Soon!', 
            tagline: 'BestSellet',
        }

        products.push(item);

        sell_module.classList.remove("pop");
})


// function to open sell module
sellOpener.addEventListener("click", ()=>{
    sell_module.classList.add("pop");
})

// function on serch btn click;
serchBtn.addEventListener("click", (e)=>{
    e.preventDefault();
})

category.addEventListener("click",()=>{
    list.classList.toggle("list_active");
})


//to open pop up
signinBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    if(signinBtn.innerText == "Logout"){
        signinBtn.innerText = "Login";
        alert('Log out successfull');
        return;
    }
    else{
        signinModule.classList.add("pop_up");
    }
})


// function to submit user data
logInBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const name = username.value;
    const userPassword = password.value;
    console.log(username.value);
    console.log(password.value);


    if(name == ""){
        alert("Please Enter Username");
        return;
    }
    if(userPassword == ""){
        alert("Please Enter Password");
        return;
    }

    signinModule.classList.remove("pop_up");
    signinBtn.innerText = signinBtn.innerText=="Login"? "Logout": "Login";
    // alert('Login successfull');
    
})

function createGenereItems(data){
 
    data.forEach((item)=>{
        const card = document.createElement('div');
        card.classList.add('productCard');
        card.setAttribute('onClick','openPayment()');

        card.innerHTML = `
            <img src=${item.url} alt="product">
                <div class="productInfo">
                    <h2>${item.title.shortTitle}</h2>
                    <span class="price">₹${item.price.mrp}</span>
                    <span class="discount">${item.tagline}</span>
                    <span class="company">${item.discount}</span>
                </div>
                `
        main.appendChild(card);
    });        
}

createGenereItems(products);
