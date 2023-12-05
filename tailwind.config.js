/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        MyColor: {
          // primary
          BlueGray: {
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            600: '#475569',
            800: '#1E293B',
            900: '#0F172A'
          },
          // secondary
          Rose: {
            300: '#FDA4AF',
            600: '#E11D48'
          },
          Blue: {
            500: '#3B82F6',
            600: '#2563EB',
            800: '#1E40AF'
          },
          Green: {
            500: '#22C55E',
            600: '#16A34A',
            800: '#166534'
          },
          Orange: {
            500: '#F97316',
            600: '#EA580C',
            800: '#9A3412'
          },
          Yellow: '#E5BF00',
          Brown: '#986769',
          Gray: '#B3B3B3',
          // background color
          Bg: {
            WhiteBlur: '#FFFFFFB2',
            Search: '#141B1FE5'
          },
          // gradient
          Gradient: {
            gray: {
              from: '#94A3B8',
              via: '#CBD5E1',
              to: '#CBD5E100'
            },
            red: {
              from: '#E11D48',
              to: '#FB7185'
            },
            red_2: {
              from: '#F43F5E',
              via: '#FB7185',
              via2: '#FDA4AF',
              to: '#FDA4AF'
            }
          },
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // 載入
        load_b_30: ['30px'],
        xl_load_b_60: ['60px'],
        load_b_20: ['20px'],
        xl_load_b_40: ['40px'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    },
  },
  plugins: [],
};
