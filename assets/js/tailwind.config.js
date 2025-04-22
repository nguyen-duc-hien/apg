tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1376px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                maxWidth: '1920px',
                padding: {
                    DEFAULT: '24px',
                    '3xl': '0px',
                    '2xl': '32px',
                    xl: '32px',
                    lg: '24px',
                    md: '24px',
                    sm: '24px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            primary: {
                DEFAULT: "#e26f11",
                80: '#FFD6B5',
                70: '#FBA762',
                60: '#FA882B',
                50: '#E26F11',
            },
            secondary: {
                DEFAULT: "#7d55ff",
                80: '#B7A1FF',
            },
            mono: {
                gray: {
                    70: "#594D40",
                    60: "#736759",
                    50: "#928677",
                    40: "#AFA292",
                    30: "#C7BBAE",
                    20: "#E5DED6",
                    10: "#F9F7F5",
                },
                dark: {
                    90: '#191510',
                    80: '#3E3327',
                },
            },
            purple: {
                gray: {
                    90: "#101119",
                    80: "#2B2E3A",
                    70: "#464853",
                    60: "#5C5F70",
                    50: "#7B7E8E",
                    40: "#9297AF",
                    30: "#AEB2C7",
                    20: "#D6D9E5",
                    10: "#F5F6F9",
                },
            },

            demo: {
                orange: {
                    50: '#FA662B',
                },
                purple: {
                    70: '#8D99F7',
                    60: '#5466F3',
                },
            },

        }
    }
}