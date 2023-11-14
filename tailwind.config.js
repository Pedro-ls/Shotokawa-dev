module.exports = {
    content: [
      './templates/*.html',
        './templates/**/*.html',
        '*/templates/*/*.html',
        'templates/**/*.css',
        'templates/*.css',
        '**/templates/**/*.html',

        'static/*/*.css',
        
        './node_modules/flowbite/**/*.js',
        '*/*/forms.py'
        
        

    ],
    theme: {
        extend: {
          fontSize: {
            ss: "7pt",
            ls: "5px"
          },
          colors: {
            "d-darker":{
              100: "#212121",
            },
            
            "d-orange": {
              50: "#ee7825",
    
              80: "#fe7755",
            },
            "d-black": {
              85: "#090808",
            },
            "gray-transparent": "rgba(121, 121, 121, 0.15)",
            "black-transparent": "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    plugins: [
        require("@tailwindcss/forms"),
        require('flowbite/plugin')
    ]

}