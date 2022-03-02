module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'brand-01': '#64C7D1',
        'brand-02': '#238EA0',
        'brand-03': '#4197E8',
        'text-01': '#232735',
        'text-02': '#505565',
        'text-03': '#8B90A0',
        'text-inverse': '#FFFFFF',
        'ui-01': '#FFFFFF',
        'ui-02': '#F8FAFB',
        'ui-03': '#EBEBF1',
        'ui-04': '#D0D3DA',
        'ui-05': '#B5B9CB',
        'ui-06': '#3A4260',
        'ui-07': '#08133A',
        'info': '#2F80ED',
        'success': '#6FCF97',
        'error': '#FB6130',
        'warning': '#F2C94C',
        'hover-primary': '#12A5B1'
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        xxl: '48px',
        '3xl': '64px',
        '4xl': '128px'
      }
    }
  },
  plugins: [],
}
